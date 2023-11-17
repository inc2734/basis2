"use strict";var e,t,n;function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,l=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw l}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var i=new ResizeObserver((function(e){var t,n,r,i,l=o(e);try{for(l.s();!(t=l.n()).done;){n=t.value.target,void 0,void 0,r=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),i=parseFloat(window.getComputedStyle(n).getPropertyValue("font-size")),n.style.setProperty("--unitone--fluid-font-size-magnification",i/r)}}catch(e){l.e(e)}finally{l.f()}})),l=function(e){var t,n,o=null===(t=[].slice.call(e.children))||void 0===t?void 0:t[0];o&&[].slice.call(e.children).forEach((function(e){var t,r=o.getBoundingClientRect(),i=null===(t=n)||void 0===t?void 0:t.getBoundingClientRect(),l=e.getBoundingClientRect(),u=(e.getAttribute("data-unitone-layout")||"").split(" ");r.top<l.top?u.includes("-linewrap")||u.push("-linewrap"):u=u.filter((function(e){return"-linewrap"!==e})),o===e||null!=i&&i.top&&i.top<l.top?u.includes("-bol")||u.push("-bol"):u=u.filter((function(e){return"-bol"!==e})),e.setAttribute("data-unitone-layout",u.join(" ")),n=e}))},u=new ResizeObserver((function(e){var t,n=o(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;l(r.target)}}catch(e){n.e(e)}finally{n.f()}})),a=function(e){var t;if(e.parentNode.style.height="",e.parentNode.style.width="",e.style.columnCount="",[].slice.call(e.children).reverse().some((function(e){if(!["absolute","fixed"].includes(getComputedStyle(e).position))return t=e,!0})),t){e.getBoundingClientRect().left>t.getBoundingClientRect().left&&(e.style.columnCount="auto",e.parentNode.style.width="".concat(Math.ceil(e.getBoundingClientRect().width+e.getBoundingClientRect().left-t.getBoundingClientRect().left),"px"),e.getBoundingClientRect().width>=e.parentNode.getBoundingClientRect().width&&(e.style.columnCount="")),e.getBoundingClientRect().left>t.getBoundingClientRect().left&&(e.style.columnCount=2);var n=e.getBoundingClientRect().top+e.getBoundingClientRect().height,o=t.getBoundingClientRect().top+t.getBoundingClientRect().height;n<o&&(e.parentNode.style.height="".concat(Math.ceil(o-e.getBoundingClientRect().top),"px"))}};n=u,t=i,e=function(e){var t=0;new MutationObserver((function(e){var t,n=o(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;a(r.target)}}catch(e){n.e(e)}finally{n.f()}})).observe(e,{characterData:!0,childList:!0,subtree:!0});var n=new ResizeObserver((function(e,n){var r,i=o(e);try{for(i.s();!(r=i.n()).done;){var l,u=r.value,c=null===(l=u.borderBoxSize)||void 0===l?void 0:l[0].blockSize;c!==t&&(t=c,n.unobserve(u.target),a(u.target),n.observe(u.target))}}catch(e){i.e(e)}finally{i.f()}}));n.unobserve(e),n.observe(e)},document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){var n,o=null===(n=e.parentNode)||void 0===n?void 0:n.querySelectorAll('[data-unitone-layout~="-fluid-typography"]');null==o||o.forEach((function(e){t.unobserve(e),t.observe(e)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})})),document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){var t,o=null===(t=e.parentNode)||void 0===t?void 0:t.querySelectorAll('[data-unitone-layout*="-divider:"]');null==o||o.forEach((function(e){n.unobserve(e),n.observe(e)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})})),document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){var n,o=null===(n=t.parentNode)||void 0===n?void 0:n.querySelectorAll('[data-unitone-layout~="vertical-writing"]');null==o||o.forEach((function(t){e(t)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})}));
