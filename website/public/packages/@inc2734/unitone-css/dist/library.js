"use strict";function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,l=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw l}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=function(e){var t=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),n=parseFloat(window.getComputedStyle(e).getPropertyValue("font-size"));e.style.setProperty("--unitone--fluid-font-size-magnification",n/t)},r=function(e){var t,n,r=null===(t=[].slice.call(e.children))||void 0===t?void 0:t[0];r&&[].slice.call(e.children).forEach((function(e){var t,i=r.getBoundingClientRect(),o=null===(t=n)||void 0===t?void 0:t.getBoundingClientRect(),l=e.getBoundingClientRect(),a=(e.getAttribute("data-unitone-layout")||"").split(" ");i.top<l.top?a.includes("-linewrap")||a.push("-linewrap"):a=a.filter((function(e){return"-linewrap"!==e})),r===e||null!=o&&o.top&&o.top<l.top?a.includes("-bol")||a.push("-bol"):a=a.filter((function(e){return"-bol"!==e})),e.setAttribute("data-unitone-layout",a.join(" ")),n=e}))},i=function(e){var t,n=null===(t=[].slice.call(e.children))||void 0===t?void 0:t[0];if(n){var r,i=0;[].slice.call(e.children).forEach((function(t){var o;t.style.setProperty("--unitone--stairs-step","");var l=null===(o=r)||void 0===o?void 0:o.getBoundingClientRect(),a=t.getBoundingClientRect();n===t||null!=l&&l.top&&l.top<a.top?(i=0,t.style.setProperty("--unitone--stairs-step",i)):(i++,t.style.setProperty("--unitone--stairs-step",i)),r=t,e.style.setProperty("--unitone--stairs-step",i)}))}};exports.dividersResizeObserver=function(t){var n=0;new ResizeObserver((function(t){var i,o=e(t);try{for(o.s();!(i=o.n()).done;){var l,a=i.value,u=null===(l=a.borderBoxSize)||void 0===l?void 0:l[0].inlineSize;u!==n&&(r(a.target),n=u)}}catch(e){o.e(e)}finally{o.f()}})).observe(t)},exports.fluidFontSizeResizeObserver=function(t){var r=0;new ResizeObserver((function(t){var i,o=e(t);try{for(o.s();!(i=o.n()).done;){var l,a=i.value,u=null===(l=a.borderBoxSize)||void 0===l?void 0:l[0].inlineSize;u!==r&&(n(a.target),r=u)}}catch(e){o.e(e)}finally{o.f()}})).observe(t)},exports.stairsResizeObserver=function(t){var n=0;new ResizeObserver((function(t){var r,o=e(t);try{for(o.s();!(r=o.n()).done;){var l,a=r.value,u=null===(l=a.borderBoxSize)||void 0===l?void 0:l[0].inlineSize;u!==n&&(i(a.target),n=u)}}catch(e){o.e(e)}finally{o.f()}})).observe(t)},exports.verticalsResizeObserver=function(t){var n=0,r=new ResizeObserver((function(t,r){var i,o=e(t);try{var l=function(){var e,t=i.value,o=null===(e=t.contentRect)||void 0===e?void 0:e.width;parseInt(o)!==parseInt(n)&&(n=o,r.unobserve(t.target),function(e){e.parentNode.style.height="",e.parentNode.style.width="",e.style.columnCount="",e.setAttribute("data-unitone-layout",e.getAttribute("data-unitone-layout").replace(" -force-switch",""));var t,n=getComputedStyle(e);if(String(n.getPropertyValue("--unitone--threshold")).trim()){var r=document.createElement("div");r.setAttribute("data-unitone-layout","vertical-writing__thresholder"),e.appendChild(r);var i=r.offsetWidth>=e.offsetWidth;if(e.removeChild(r),i)return void e.setAttribute("data-unitone-layout","".concat(e.getAttribute("data-unitone-layout")," -force-switch"))}if([].slice.call(e.children).reverse().some((function(e){if(!["absolute","fixed"].includes(getComputedStyle(e).position))return t=e,!0})),t){var o=!1;e.getBoundingClientRect().left>t.getBoundingClientRect().left&&(e.style.columnCount=2,o=!0),setTimeout((function(){var n=e.getBoundingClientRect().top+e.getBoundingClientRect().height,r=t.getBoundingClientRect().top+t.getBoundingClientRect().height;n<r&&(e.parentNode.style.height="".concat(Math.ceil(r-e.getBoundingClientRect().top),"px"))}),o?250:0)}}(t.target),setTimeout((function(){r.observe(t.target)}),500))};for(o.s();!(i=o.n()).done;)l()}catch(e){o.e(e)}finally{o.f()}}));r.observe(t)};
