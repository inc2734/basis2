"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,l=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw l}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var r=function(t){var e=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),n=parseFloat(window.getComputedStyle(t).getPropertyValue("font-size"));t.style.setProperty("--unitone--fluid-font-size-magnification",n/e)},o=function(t){var n,i,r,o=null===(n=[].slice.call(null!==(i=null==t?void 0:t.children)&&void 0!==i?i:[]))||void 0===n?void 0:n[0];o&&([].slice.call(t.children).forEach((function(t){var n=t.getAttribute("data-unitone-layout")||"",i=n.split(" ");t.classList.contains("unitone-empty")?t.remove():(i=e(i.filter((function(t){return!["-bol","-linewrap"," "].includes(t)}))).join(" ")||"")!==n&&t.setAttribute("data-unitone-layout",i)})),[].slice.call(t.children).forEach((function(t){var n,i=o.getBoundingClientRect(),l=null===(n=r)||void 0===n?void 0:n.getBoundingClientRect(),a=t.getAttribute("data-unitone-layout")||"",u=a.split(" ");if((o===t||(null==l?void 0:l.top)<t.getBoundingClientRect().top)&&(u.includes("-bol")||(u=[].concat(e(u),["-bol"]))),(null==l?void 0:l.top)<t.getBoundingClientRect().top){var s=document.createElement("div");s.classList.add("unitone-empty"),t.before(s),(null==l?void 0:l.top)<s.getBoundingClientRect().top&&s.remove()}i.top<t.getBoundingClientRect().top&&(u.includes("-linewrap")||(u=[].concat(e(u),["-linewrap"]))),(u=u.filter(Boolean).join(" ")||"")!==a&&t.setAttribute("data-unitone-layout",u),r=t})))},l=function(t){var e,n,i=null===(e=[].slice.call(null!==(n=null==t?void 0:t.children)&&void 0!==n?n:[]))||void 0===e?void 0:e[0];if(i){var r,o=0,l=o;[].slice.call(t.children).forEach((function(t){var e,n=window.getComputedStyle(t).getPropertyValue("position");if("absolute"!==n&&"fixed"!==n){t.style.setProperty("--unitone--stairs-step","");var a=null===(e=r)||void 0===e?void 0:e.getBoundingClientRect(),u=t.getBoundingClientRect();i===t||null!=a&&a.left&&a.left>=u.left?(o=0,t.style.setProperty("--unitone--stairs-step",o)):(o++,t.style.setProperty("--unitone--stairs-step",o)),r=t,o>l&&(l=o)}})),t.getAttribute("data-unitone-layout").match(/-stairs-up:right/)?t.style.setProperty("--unitone--stairs-step",l):t.style.setProperty("--unitone--stairs-step",o)}},a=function(t){t.style.columnCount="",t.setAttribute("data-unitone-layout",t.getAttribute("data-unitone-layout").replace(" -force-switch",""));var e,n=getComputedStyle(t);if(String(n.getPropertyValue("--unitone--threshold")).trim()){var i=document.createElement("div");i.setAttribute("data-unitone-layout","vertical-writing__thresholder"),t.appendChild(i);var r=i.offsetWidth>=t.offsetWidth;if(t.removeChild(i),r)return void t.setAttribute("data-unitone-layout","".concat(t.getAttribute("data-unitone-layout")," -force-switch"))}if([].slice.call(t.children).reverse().some((function(t){if(!["absolute","fixed"].includes(getComputedStyle(t).position))return e=t,!0})),e){var o=!1;t.getBoundingClientRect().left>e.getBoundingClientRect().left&&(t.style.columnCount=2,o=!0),setTimeout((function(){var n=t.getBoundingClientRect().top+t.getBoundingClientRect().height,i=e.getBoundingClientRect().top+e.getBoundingClientRect().height;n!==i&&(t.parentNode.style.height="".concat(Math.ceil(i-t.getBoundingClientRect().top),"px"))}),o?250:0)}};exports.dividersResizeObserver=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=0,l=new ResizeObserver((function(t){var e,i=n(t);try{for(i.s();!(e=i.n()).done;){var l,a=e.value,u=null===(l=a.borderBoxSize)||void 0===l?void 0:l[0].inlineSize;u!==r&&(o(a.target),r=u)}}catch(t){i.e(t)}finally{i.f()}})),a={attributes:!0,attributeFilter:["style","data-unitone-layout","class"],attributeOldValue:!0,subtree:!0,characterData:!0},u=new MutationObserver((function(t){var r,l=n(t);try{var a=function(){var t=r.value;if("attributes"===t.type&&"data-unitone-layout"===t.attributeName){var n,l,a,u,s=[].concat(e(null!==(n=null==i||null===(l=i.ignore)||void 0===l?void 0:l.layout)&&void 0!==n?n:[]),["-bol","-linewrap"]);(null!==(a=t.target.getAttribute(t.attributeName))&&void 0!==a?a:"").split(" ").filter((function(t){return!s.includes(t)})).join(" ")!==(null!==(u=t.oldValue)&&void 0!==u?u:"").split(" ").filter((function(t){return!s.includes(t)})).join(" ")&&o(t.target)}else if("attributes"===t.type&&"class"===t.attributeName){var c,d,v,f,y=e(null!==(c=null==i||null===(d=i.ignore)||void 0===d?void 0:d.className)&&void 0!==c?c:[]);(null!==(v=t.target.getAttribute(t.attributeName))&&void 0!==v?v:"").split(" ").filter((function(t){return!y.includes(t)})).join(" ")!==(null!==(f=t.oldValue)&&void 0!==f?f:"").split(" ").filter((function(t){return!y.includes(t)})).join(" ")&&o(t.target)}else"attributes"===t.type&&"style"===t.attributeName&&o(t.target)};for(l.s();!(r=l.n()).done;)a()}catch(t){l.e(t)}finally{l.f()}})),s=new IntersectionObserver((function(t,e){t.forEach((function(t){var n=t.target;t.isIntersecting&&(e.unobserve(n),l.observe(n),u.observe(n,a))}))}),{rootMargin:"100px 0px"});s.observe(t)},exports.fluidFontSizeResizeObserver=function(t){var e=0;new ResizeObserver((function(t){var i,o=n(t);try{for(o.s();!(i=o.n()).done;){var l,a=i.value,u=null===(l=a.borderBoxSize)||void 0===l?void 0:l[0].inlineSize;u!==e&&(r(a.target),e=u)}}catch(t){o.e(t)}finally{o.f()}})).observe(t)},exports.setDividerLinewrap=o,exports.stairsResizeObserver=function(t){var e=0;new ResizeObserver((function(t){var i,r=n(t);try{for(r.s();!(i=r.n()).done;){var o,a=i.value,u=null===(o=a.borderBoxSize)||void 0===o?void 0:o[0].inlineSize;u!==e&&(l(a.target),e=u)}}catch(t){r.e(t)}finally{r.f()}})).observe(t)},exports.verticalsResizeObserver=function(t){var e=0;t.setAttribute("data-unitone-layout","".concat(t.getAttribute("data-unitone-layout")," -initialized"));var i=new ResizeObserver((function(r,o){var l,u=n(r);try{var s=function(){var n,r=l.value,u=null===(n=r.contentRect)||void 0===n?void 0:n.width;parseInt(u)!==parseInt(e)&&(e=u,i.unobserve(t),o.unobserve(r.target),r.target.parentNode.style.height="",a(r.target),setTimeout((function(){o.observe(r.target)}),500))};for(u.s();!(l=u.n()).done;)s()}catch(t){u.e(t)}finally{u.f()}}));i.observe(t);var r,o={attributes:!0,attributeFilter:["style"],childList:!0,subtree:!0};new MutationObserver((function(e,n){if(clearTimeout(r),0<e.length){var l,u,s=e[0],c=null===(l=s.addedNodes)||void 0===l?void 0:l[0],d=null===(u=s.removedNodes)||void 0===u?void 0:u[0];if((null==c?void 0:c.nodeType)===Node.ELEMENT_NODE&&"vertical-writing__thresholder"===c.getAttribute("data-unitone-layout")||(null==d?void 0:d.nodeType)===Node.ELEMENT_NODE&&"vertical-writing__thresholder"===d.getAttribute("data-unitone-layout"))return;n.disconnect(),i.unobserve(t),r=setTimeout((function(){a(t),setTimeout((function(){n.observe(t,o),i.observe(t)}),500)}),500)}})).observe(t,o)};
