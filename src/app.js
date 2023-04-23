const setFluidFontSizeMagnification = (target) => {
  const baseFontSize = parseFloat(
    window.getComputedStyle(document.documentElement).getPropertyValue('font-size'),
  );
  const fontSize = parseFloat(window.getComputedStyle(target).getPropertyValue('font-size'));
  target.style.setProperty('--unitone--fluid-font-size-magnification', fontSize / baseFontSize);
};

const fluidFontSizeResizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    setFluidFontSizeMagnification(entry.target);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const fluidFontSizeElements = document.querySelectorAll(
    '[data-unitone-layout~="-fluid-typography"]',
  );
  fluidFontSizeElements.forEach((target) => {
    fluidFontSizeResizeObserver.observe(target);
  });
});

const setDividerLinewrap = (target) => {
  const firstChild = [].slice.call(target.children)?.[0];
  if (!!firstChild) {
    let prevChild;

    [].slice.call(target.children).forEach((child) => {
      const baseRect = firstChild.getBoundingClientRect();
      const prevRect = prevChild?.getBoundingClientRect();
      const targetRect = child.getBoundingClientRect();

      let layout = (child.getAttribute('data-unitone-layout') || '').split(' ');
      if (baseRect.top < targetRect.top) {
        if (!layout.includes('-linewrap')) {
          layout.push('-linewrap');
        }
      } else {
        layout = layout.filter((value) => value !== '-linewrap');
      }

      if (firstChild === child || (!!prevRect?.top && prevRect.top < targetRect.top)) {
        if (!layout.includes('-bol')) {
          layout.push('-bol');
        }
      } else {
        layout = layout.filter((value) => value !== '-bol');
      }

      child.setAttribute('data-unitone-layout', layout.join(' '));
      prevChild = child;
    });
  }
};

export const dividersResizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    setDividerLinewrap(entry.target);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const dividers = document.querySelectorAll('[data-unitone-layout*="-divider:"]');
  dividers.forEach((target) => {
    dividersResizeObserver.observe(target);
  });
});

const setColumnCountForVertical = (target) => {
  const parent = target.parentNode;
  target.style.columnCount = '';

  let lastChild;
  [].slice
    .call(target.children)
    .reverse()
    .some((child) => {
      if (!['absolute', 'fixed'].includes(getComputedStyle(child).position)) {
        lastChild = child;
        return true;
      }
    });

  if (!lastChild) {
    return;
  }

  const setColumnCount = (columnCount) => {
    target.style.columnCount = columnCount;
    const targetY = target.getBoundingClientRect().top + target.getBoundingClientRect().height;
    const lastChildY =
      lastChild.getBoundingClientRect().top + lastChild.getBoundingClientRect().height;

    const targetX = target.getBoundingClientRect().left;
    const lastChildX = lastChild.getBoundingClientRect().left;

    if (targetY < lastChildY || targetX > lastChildX) {
      setColumnCount(columnCount + 1);
    }
  };
  setColumnCount(1);
};

export const verticalsResizeObserve = (target) => {
  let prevWidth = 0;

  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const width = entry.borderBoxSize?.[0].blockSize;
      if (width !== prevWidth) {
        prevWidth = width;
        setColumnCountForVertical(entry.target);
      }
    }
  });

  observer.unobserve(target);
  observer.observe(target);
};

document.addEventListener('DOMContentLoaded', () => {
  const verticals = document.querySelectorAll('[data-unitone-layout~="vertical-writing"]');
  verticals.forEach((target) => {
    verticalsResizeObserve(target);
  });
});
