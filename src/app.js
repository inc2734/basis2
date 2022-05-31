const setFluidFontSizeMagnification = (target) => {
  const baseFontSize = parseFloat(
    window.getComputedStyle(document.documentElement).getPropertyValue('font-size'),
  );
  const fontSize = parseFloat(window.getComputedStyle(target).getPropertyValue('font-size'));
  target.style.setProperty('--fluid-font-size-magnification', fontSize / baseFontSize);
};

const fluidFontSizeResizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    setFluidFontSizeMagnification(entry.target);
  }
});

const fluidFontSizeElements = document.querySelectorAll('[data-layout~="-fluid-typography"]');
fluidFontSizeElements.forEach((target) => {
  fluidFontSizeResizeObserver.observe(target);
  setFluidFontSizeMagnification(target);
});
