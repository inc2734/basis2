"use strict";var e,t,n,o;function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,l=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw l}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l=function(e){var t=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),n=parseFloat(window.getComputedStyle(e).getPropertyValue("font-size"));e.style.setProperty("--unitone--fluid-font-size-magnification",n/t)},u=function(e){var t,n,o=null===(t=[].slice.call(e.children))||void 0===t?void 0:t[0];o&&[].slice.call(e.children).forEach((function(e){var t,i=o.getBoundingClientRect(),r=null===(t=n)||void 0===t?void 0:t.getBoundingClientRect(),l=e.getBoundingClientRect(),u=(e.getAttribute("data-unitone-layout")||"").split(" ");i.top<l.top?u.includes("-linewrap")||u.push("-linewrap"):u=u.filter((function(e){return"-linewrap"!==e})),o===e||null!=r&&r.top&&r.top<l.top?u.includes("-bol")||u.push("-bol"):u=u.filter((function(e){return"-bol"!==e})),e.setAttribute("data-unitone-layout",u.join(" ")),n=e}))},a=function(e){var t,n=null===(t=[].slice.call(e.children))||void 0===t?void 0:t[0];if(n){var o,i=0;[].slice.call(e.children).forEach((function(t){var r;t.style.setProperty("--unitone--stairs-step","");var l=null===(r=o)||void 0===r?void 0:r.getBoundingClientRect(),u=t.getBoundingClientRect();n===t||null!=l&&l.top&&l.top<u.top?(i=0,t.style.setProperty("--unitone--stairs-step",i)):(i++,t.style.setProperty("--unitone--stairs-step",i)),o=t,e.style.setProperty("--unitone--stairs-step",i)}))}},c=function(e){var t;if(e.parentNode.style.height="",e.parentNode.style.width="",e.style.columnCount="",[].slice.call(e.children).reverse().some((function(e){if(!["absolute","fixed"].includes(getComputedStyle(e).position))return t=e,!0})),t){var n=!1;e.getBoundingClientRect().left>t.getBoundingClientRect().left&&(e.style.columnCount=2,n=!0),setTimeout((function(){var n=e.getBoundingClientRect().top+e.getBoundingClientRect().height,o=t.getBoundingClientRect().top+t.getBoundingClientRect().height;n<o&&(e.parentNode.style.height="".concat(Math.ceil(o-e.getBoundingClientRect().top),"px"))}),n?250:0)}};o=function(e){var t=0;new ResizeObserver((function(e){var n,o=i(e);try{for(o.s();!(n=o.n()).done;){var r,l=n.value,a=null===(r=l.borderBoxSize)||void 0===r?void 0:r[0].inlineSize;a!==t&&(u(l.target),t=a)}}catch(e){o.e(e)}finally{o.f()}})).observe(e)},n=function(e){var t=0;new ResizeObserver((function(e){var n,o=i(e);try{for(o.s();!(n=o.n()).done;){var r,u=n.value,a=null===(r=u.borderBoxSize)||void 0===r?void 0:r[0].inlineSize;a!==t&&(l(u.target),t=a)}}catch(e){o.e(e)}finally{o.f()}})).observe(e)},t=function(e){var t=0;new ResizeObserver((function(e){var n,o=i(e);try{for(o.s();!(n=o.n()).done;){var r,l=n.value,u=null===(r=l.borderBoxSize)||void 0===r?void 0:r[0].inlineSize;u!==t&&(a(l.target),t=u)}}catch(e){o.e(e)}finally{o.f()}})).observe(e)},e=function(e){var t=0;new ResizeObserver((function(e){var n,o=i(e);try{for(o.s();!(n=o.n()).done;){var r,l=n.value,u=null===(r=l.borderBoxSize)||void 0===r?void 0:r[0].inlineSize;u!==t&&(c(l.target),t=u)}}catch(e){o.e(e)}finally{o.f()}})).observe(e)},document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){var t,o=null===(t=e.parentNode)||void 0===t?void 0:t.querySelectorAll('[data-unitone-layout~="-fluid-typography"]');null==o||o.forEach((function(e){n(e)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})})),document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){var t,n=null===(t=e.parentNode)||void 0===t?void 0:t.querySelectorAll('[data-unitone-layout*="-divider:"]');null==n||n.forEach((function(e){o(e)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})})),document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){var n,o=null===(n=e.parentNode)||void 0===n?void 0:n.querySelectorAll('[data-unitone-layout*="-stairs:"]');null==o||o.forEach((function(e){t(e)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})})),document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){var n,o=null===(n=t.parentNode)||void 0===n?void 0:n.querySelectorAll('[data-unitone-layout~="vertical-writing"]');null==o||o.forEach((function(t){e(t)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})}));
