!function(){"use strict";var e={};function t(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,u=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return a=e.done,e},e:function(e){u=!0,l=e},f:function(){try{a||null==o.return||o.return()}finally{if(u)throw l}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o=new ResizeObserver((function(e){var n,o,r,i,l=t(e);try{for(l.s();!(n=l.n()).done;){o=n.value.target,void 0,void 0,r=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),i=parseFloat(window.getComputedStyle(o).getPropertyValue("font-size")),o.style.setProperty("--unitone--fluid-font-size-magnification",i/r)}}catch(e){l.e(e)}finally{l.f()}}));document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('[data-unitone-layout~="-fluid-typography"]').forEach((function(e){o.observe(e)}))}));var r=function(e){var t,n,o=null===(t=[].slice.call(e.children))||void 0===t?void 0:t[0];o&&[].slice.call(e.children).forEach((function(e){var t,r=o.getBoundingClientRect(),i=null===(t=n)||void 0===t?void 0:t.getBoundingClientRect(),l=e.getBoundingClientRect(),a=(e.getAttribute("data-unitone-layout")||"").split(" ");r.top<l.top?a.includes("-linewrap")||a.push("-linewrap"):a=a.filter((function(e){return"-linewrap"!==e})),o===e||null!=i&&i.top&&i.top<l.top?a.includes("-bol")||a.push("-bol"):a=a.filter((function(e){return"-bol"!==e})),e.setAttribute("data-unitone-layout",a.join(" ")),n=e}))},i=new ResizeObserver((function(e){var n,o=t(e);try{for(o.s();!(n=o.n()).done;){var i=n.value;r(i.target)}}catch(e){o.e(e)}finally{o.f()}}));document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('[data-unitone-layout*="-divider:"]').forEach((function(e){i.observe(e)}))}));var l=function(e){var t;if(e.parentNode.style.height="",e.style.columnCount="",[].slice.call(e.children).reverse().some((function(e){if(!["absolute","fixed"].includes(getComputedStyle(e).position))return t=e,!0})),t){e.getBoundingClientRect().left>t.getBoundingClientRect().left&&(e.style.columnCount=2);var n=e.getBoundingClientRect().top+e.getBoundingClientRect().height,o=t.getBoundingClientRect().top+t.getBoundingClientRect().height;n<o&&(e.parentNode.style.height="".concat(Math.ceil(o-e.getBoundingClientRect().top),"px"))}};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('[data-unitone-layout~="vertical-writing"]').forEach((function(e){!function(e){var n=0;new MutationObserver((function(n){var o,r=t(n);try{for(r.s();!(o=r.n()).done;)o.value,l(e)}catch(e){r.e(e)}finally{r.f()}})).observe(e,{characterData:!0,childList:!0,subtree:!0}),new ResizeObserver((function(e){var o,r=t(e);try{for(r.s();!(o=r.n()).done;){var i,a=o.value,u=null===(i=a.borderBoxSize)||void 0===i?void 0:i[0].blockSize;u!==n&&(n=u,l(a.target))}}catch(e){r.e(e)}finally{r.f()}})).observe(e)}(e)}))}))}();