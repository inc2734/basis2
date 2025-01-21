"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){a=!0,l=t},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw l}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var r=function(t){var e=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),n=parseFloat(window.getComputedStyle(t).getPropertyValue("font-size"));t.style.setProperty("--unitone--fluid-font-size-magnification",n/e)},o=function(t){var e,n,i,r=null===(e=[].slice.call(null!==(n=null==t?void 0:t.children)&&void 0!==n?n:[]))||void 0===e?void 0:e[0];r&&([].slice.call(t.children).forEach((function(t){if(t.classList.contains("unitone-empty"))t.remove();else{var e=t.getAttribute("data-unitone-layout")||"",n=e.split(" ").filter((function(t){return!["-bol","-linewrap"," "].includes(t)})).join(" ");n!==e&&t.setAttribute("data-unitone-layout",n)}})),[].slice.call(t.children).forEach((function(t){var e,n=r.getBoundingClientRect(),o=null===(e=i)||void 0===e?void 0:e.getBoundingClientRect(),l=t.getBoundingClientRect(),u=t.getAttribute("data-unitone-layout")||"",a=u.split(" ");if((r===t||(null==o?void 0:o.top)<l.top&&(null==o?void 0:o.left)>=l.left)&&(a.includes("-bol")||a.push("-bol")),(null==o?void 0:o.top)<l.top){var s=document.createElement("div");s.classList.add("unitone-empty"),t.before(s),(null==o?void 0:o.top)<s.getBoundingClientRect().top&&s.remove()}n.top<l.top&&(a.includes("-linewrap")||a.push("-linewrap")),a!==u&&t.setAttribute("data-unitone-layout",a.filter(Boolean).join(" ")||""),i=t})))},l=function(t){var e,n,i,r=[].slice.call(t.children),o=null==r?void 0:r[0];if(o){t.style.removeProperty("--unitone--stairs-step-overflow-volume"),t.style.removeProperty("--unitone--max-stairs-step"),[].slice.call(null!==(e=null==t?void 0:t.children)&&void 0!==e?e:[]).forEach((function(t){t.style.removeProperty("--unitone--stairs-step")}));var l,u=t.getBoundingClientRect(),a=[],s=0,d=s;r.forEach((function(t){var e,n=window.getComputedStyle(t).getPropertyValue("position"),i=window.getComputedStyle(t).getPropertyValue("display");"absolute"!==n&&"fixed"!==n&&"none"!==i&&(a.push(t),o===t||(null===(e=l)||void 0===e||null===(e=e.getBoundingClientRect())||void 0===e?void 0:e.left)>=t.getBoundingClientRect().left?(s=0,t.style.setProperty("--unitone--stairs-step",s)):(s++,t.style.setProperty("--unitone--stairs-step",s)),l=t,s>d&&(d=s))})),t.style.setProperty("--unitone--max-stairs-step",d);var c=a.reduce((function(t,e){var n=null!=t&&t.childrenTop?Math.min(null==t?void 0:t.childrenTop,e.getBoundingClientRect().top):e.getBoundingClientRect().top,i=e.getBoundingClientRect().bottom-n;return{childrenTop:n,childrenHeight:Math.max(null==t?void 0:t.childrenHeight,i)}}),{childrenTop:null==a||null===(n=a[0])||void 0===n||null===(n=n.getBoundingClientRect())||void 0===n?void 0:n.top,childrenHeight:null==a||null===(i=a[0])||void 0===i||null===(i=i.getBoundingClientRect())||void 0===i?void 0:i.height}).childrenHeight;t.style.setProperty("--unitone--stairs-step-overflow-volume",c-u.height)}},u=function(t){t.style.columnCount="",t.setAttribute("data-unitone-layout",t.getAttribute("data-unitone-layout").replace(" -force-switch",""));var e,n=getComputedStyle(t);if(String(n.getPropertyValue("--unitone--threshold")).trim()){var i=document.createElement("div");i.setAttribute("data-unitone-layout","vertical-writing__thresholder"),t.appendChild(i);var r=i.offsetWidth>=t.offsetWidth;if(t.removeChild(i),r)return void t.setAttribute("data-unitone-layout","".concat(t.getAttribute("data-unitone-layout")," -force-switch"))}if([].slice.call(t.children).reverse().some((function(t){if(!["absolute","fixed"].includes(getComputedStyle(t).position)&&"none"!==getComputedStyle(t).display)return e=t,!0})),e){var o=!1;t.getBoundingClientRect().left>e.getBoundingClientRect().left&&(t.style.columnCount=2,o=!0),setTimeout((function(){var n=t.getBoundingClientRect().top+t.getBoundingClientRect().height,i=e.getBoundingClientRect().top+e.getBoundingClientRect().height;n!==i&&(t.parentNode.style.height="".concat(Math.ceil(i-t.getBoundingClientRect().top),"px"))}),o?250:0)}};exports.dividersResizeObserver=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=0,l=new ResizeObserver((function(t){var e,i=n(t);try{for(i.s();!(e=i.n()).done;){var l,u=e.value,a=null===(l=u.borderBoxSize)||void 0===l?void 0:l[0].inlineSize;a!==r&&(o(u.target),r=a)}}catch(t){i.e(t)}finally{i.f()}})),u={attributes:!0,attributeFilter:["style","data-unitone-layout","class"],attributeOldValue:!0,subtree:!0,characterData:!0},a=new MutationObserver((function(t){var r,l=n(t);try{var u=function(){var t=r.value;if("attributes"===t.type&&"data-unitone-layout"===t.attributeName){var n,l,u,a,s=[].concat(e(null!==(n=null==i||null===(l=i.ignore)||void 0===l?void 0:l.layout)&&void 0!==n?n:[]),["-bol","-linewrap"]);(null!==(u=t.target.getAttribute(t.attributeName))&&void 0!==u?u:"").split(" ").filter((function(t){return!s.includes(t)})).join(" ")!==(null!==(a=t.oldValue)&&void 0!==a?a:"").split(" ").filter((function(t){return!s.includes(t)})).join(" ")&&o(t.target)}else if("attributes"===t.type&&"class"===t.attributeName){var d,c,v,f,g=e(null!==(d=null==i||null===(c=i.ignore)||void 0===c?void 0:c.className)&&void 0!==d?d:[]);(null!==(v=t.target.getAttribute(t.attributeName))&&void 0!==v?v:"").split(" ").filter((function(t){return!g.includes(t)})).join(" ")!==(null!==(f=t.oldValue)&&void 0!==f?f:"").split(" ").filter((function(t){return!g.includes(t)})).join(" ")&&o(t.target)}else"attributes"===t.type&&"style"===t.attributeName&&o(t.target)};for(l.s();!(r=l.n()).done;)u()}catch(t){l.e(t)}finally{l.f()}})),s=new IntersectionObserver((function(t,e){t.forEach((function(t){var n=t.target;t.isIntersecting&&(e.unobserve(n),l.observe(n),a.observe(n,u))}))}),{rootMargin:"100px 0px"});s.observe(t)},exports.fluidFontSizeResizeObserver=function(t){var e=0;new ResizeObserver((function(t){var i,o=n(t);try{for(o.s();!(i=o.n()).done;){var l,u=i.value,a=null===(l=u.borderBoxSize)||void 0===l?void 0:l[0].inlineSize;a!==e&&(r(u.target),e=a)}}catch(t){o.e(t)}finally{o.f()}})).observe(t)},exports.setDividerLinewrap=o,exports.setStairsStep=l,exports.stairsResizeObserver=function(t){var e=0;new ResizeObserver((function(t){var i,r=n(t);try{for(r.s();!(i=r.n()).done;){var o,u=i.value,a=null===(o=u.borderBoxSize)||void 0===o?void 0:o[0].inlineSize;a!==e&&(l(u.target),e=a)}}catch(t){r.e(t)}finally{r.f()}})).observe(t)},exports.verticalsResizeObserver=function(t){var e=0;t.setAttribute("data-unitone-layout","".concat(t.getAttribute("data-unitone-layout")," -initialized"));var i=new ResizeObserver((function(r,o){var l,a=n(r);try{var s=function(){var n,r=l.value,a=null===(n=r.contentRect)||void 0===n?void 0:n.width;parseInt(a)!==parseInt(e)&&(e=a,i.unobserve(t),o.unobserve(r.target),r.target.parentNode.style.height="",u(r.target),setTimeout((function(){o.observe(r.target)}),500))};for(a.s();!(l=a.n()).done;)s()}catch(t){a.e(t)}finally{a.f()}}));i.observe(t);var r,o={attributes:!0,attributeFilter:["style"],childList:!0,subtree:!0};new MutationObserver((function(e,n){if(clearTimeout(r),0<e.length){var l,a,s=e[0],d=null===(l=s.addedNodes)||void 0===l?void 0:l[0],c=null===(a=s.removedNodes)||void 0===a?void 0:a[0];if((null==d?void 0:d.nodeType)===Node.ELEMENT_NODE&&"vertical-writing__thresholder"===d.getAttribute("data-unitone-layout")||(null==c?void 0:c.nodeType)===Node.ELEMENT_NODE&&"vertical-writing__thresholder"===c.getAttribute("data-unitone-layout"))return;n.disconnect(),i.unobserve(t),r=setTimeout((function(){u(t),setTimeout((function(){n.observe(t,o),i.observe(t)}),500)}),500)}})).observe(t,o)};
