"use strict";var t,e,n,o;function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,u=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw u}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var u=function(t){var e=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),n=parseFloat(window.getComputedStyle(t).getPropertyValue("font-size"));t.style.setProperty("--unitone--fluid-font-size-magnification",n/e)},a=function(t){var e,n,o=null===(e=[].slice.call(t.children))||void 0===e?void 0:e[0];o&&[].slice.call(t.children).forEach((function(t){var e,i=o.getBoundingClientRect(),r=null===(e=n)||void 0===e?void 0:e.getBoundingClientRect(),u=t.getBoundingClientRect(),a=(t.getAttribute("data-unitone-layout")||"").split(" ");i.top<u.top?a.includes("-linewrap")||a.push("-linewrap"):a=a.filter((function(t){return"-linewrap"!==t})),o===t||null!=r&&r.top&&r.top<u.top?a.includes("-bol")||a.push("-bol"):a=a.filter((function(t){return"-bol"!==t})),t.setAttribute("data-unitone-layout",a.join(" ")),n=t}))},l=function(t){var e,n=null===(e=[].slice.call(t.children))||void 0===e?void 0:e[0];if(n){var o,i=0,r=i;[].slice.call(t.children).forEach((function(t){var e,u=window.getComputedStyle(t).getPropertyValue("position");if("absolute"!==u&&"fixed"!==u){t.style.setProperty("--unitone--stairs-step","");var a=null===(e=o)||void 0===e?void 0:e.getBoundingClientRect(),l=t.getBoundingClientRect();n===t||null!=a&&a.left&&a.left>=l.left?(i=0,t.style.setProperty("--unitone--stairs-step",i)):(i++,t.style.setProperty("--unitone--stairs-step",i)),o=t,i>r&&(r=i)}})),t.getAttribute("data-unitone-layout").match(/-stairs-up:right/)?t.style.setProperty("--unitone--stairs-step",r):t.style.setProperty("--unitone--stairs-step",i)}},d=function(t){t.style.columnCount="",t.setAttribute("data-unitone-layout",t.getAttribute("data-unitone-layout").replace(" -force-switch",""));var e,n=getComputedStyle(t);if(String(n.getPropertyValue("--unitone--threshold")).trim()){var o=document.createElement("div");o.setAttribute("data-unitone-layout","vertical-writing__thresholder"),t.appendChild(o);var i=o.offsetWidth>=t.offsetWidth;if(t.removeChild(o),i)return void t.setAttribute("data-unitone-layout","".concat(t.getAttribute("data-unitone-layout")," -force-switch"))}if([].slice.call(t.children).reverse().some((function(t){if(!["absolute","fixed"].includes(getComputedStyle(t).position))return e=t,!0})),e){var r=!1;t.getBoundingClientRect().left>e.getBoundingClientRect().left&&(t.style.columnCount=2,r=!0),setTimeout((function(){var n=t.getBoundingClientRect().top+t.getBoundingClientRect().height,o=e.getBoundingClientRect().top+e.getBoundingClientRect().height;n!==o&&(t.parentNode.style.height="".concat(Math.ceil(o-t.getBoundingClientRect().top),"px"))}),r?250:0)}};o=function(t){var e=0;new ResizeObserver((function(t){var n,o=i(t);try{for(o.s();!(n=o.n()).done;){var r,u=n.value,l=null===(r=u.borderBoxSize)||void 0===r?void 0:r[0].inlineSize;l!==e&&(a(u.target),e=l)}}catch(t){o.e(t)}finally{o.f()}})).observe(t)},n=function(t){var e=0;new ResizeObserver((function(t){var n,o=i(t);try{for(o.s();!(n=o.n()).done;){var r,a=n.value,l=null===(r=a.borderBoxSize)||void 0===r?void 0:r[0].inlineSize;l!==e&&(u(a.target),e=l)}}catch(t){o.e(t)}finally{o.f()}})).observe(t)},e=function(t){var e=0;new ResizeObserver((function(t){var n,o=i(t);try{for(o.s();!(n=o.n()).done;){var r,u=n.value,a=null===(r=u.borderBoxSize)||void 0===r?void 0:r[0].inlineSize;a!==e&&(l(u.target),e=a)}}catch(t){o.e(t)}finally{o.f()}})).observe(t)},t=function(t){var e=0;t.setAttribute("data-unitone-layout","".concat(t.getAttribute("data-unitone-layout")," -initialized"));var n=new ResizeObserver((function(o,r){var u,a=i(o);try{var l=function(){var o,i=u.value,a=null===(o=i.contentRect)||void 0===o?void 0:o.width;parseInt(a)!==parseInt(e)&&(e=a,n.unobserve(t),r.unobserve(i.target),i.target.parentNode.style.height="",d(i.target),setTimeout((function(){r.observe(i.target)}),500))};for(a.s();!(u=a.n()).done;)l()}catch(t){a.e(t)}finally{a.f()}}));n.observe(t);var o,r={attributes:!0,attributeFilter:["style"],childList:!0,subtree:!0};new MutationObserver((function(e,i){if(clearTimeout(o),0<e.length){var u,a,l=e[0],c=null===(u=l.addedNodes)||void 0===u?void 0:u[0],s=null===(a=l.removedNodes)||void 0===a?void 0:a[0];if((null==c?void 0:c.nodeType)===Node.ELEMENT_NODE&&"vertical-writing__thresholder"===c.getAttribute("data-unitone-layout")||(null==s?void 0:s.nodeType)===Node.ELEMENT_NODE&&"vertical-writing__thresholder"===s.getAttribute("data-unitone-layout"))return;i.disconnect(),n.unobserve(t),o=setTimeout((function(){d(t),setTimeout((function(){i.observe(t,r),n.observe(t)}),500)}),500)}})).observe(t,r)},document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){var e,o=null===(e=t.parentNode)||void 0===e?void 0:e.querySelectorAll('[data-unitone-layout~="-fluid-typography"]');null==o||o.forEach((function(t){n(t)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})})),document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){var e,n=null===(e=t.parentNode)||void 0===e?void 0:e.querySelectorAll('[data-unitone-layout*="-divider:"]');null==n||n.forEach((function(t){o(t)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})})),document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){var n,o=null===(n=t.parentNode)||void 0===n?void 0:n.querySelectorAll('[data-unitone-layout*="-stairs:"]');null==o||o.forEach((function(t){e(t)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})})),document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){var n,o=null===(n=e.parentNode)||void 0===n?void 0:n.querySelectorAll('[data-unitone-layout~="vertical-writing"]');null==o||o.forEach((function(e){t(e)}))}))}))})).observe(document.body,{childList:!0,subtree:!0})}));
