(()=>{"use strict";var t={};function e(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){u=!0,a=t},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw a}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r=new ResizeObserver((function(t){var n,r,o,i,a=e(t);try{for(a.s();!(n=a.n()).done;){r=n.value.target,void 0,void 0,o=parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")),i=parseFloat(window.getComputedStyle(r).getPropertyValue("font-size")),r.style.setProperty("--unitone--fluid-font-size-magnification",i/o)}}catch(t){a.e(t)}finally{a.f()}}));document.querySelectorAll('[data-unitone-layout~="-fluid-typography"]').forEach((function(t){r.observe(t)}));var o=function(t){var e,n,r=null===(e=[].slice.call(t.children))||void 0===e?void 0:e[0];r&&[].slice.call(t.children).forEach((function(t){var e,o=r.getBoundingClientRect(),i=null===(e=n)||void 0===e?void 0:e.getBoundingClientRect(),a=t.getBoundingClientRect(),l=(t.getAttribute("data-unitone-layout")||"").split(" ");o.top<a.top?l.includes("-linewrap")||l.push("-linewrap"):l=l.filter((function(t){return"-linewrap"!==t})),r===t||null!=i&&i.top&&i.top<a.top?l.includes("-bol")||l.push("-bol"):l=l.filter((function(t){return"-bol"!==t})),t.setAttribute("data-unitone-layout",l.join(" ")),n=t}))},i=new ResizeObserver((function(t){var n,r=e(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;o(i.target)}}catch(t){r.e(t)}finally{r.f()}}));document.querySelectorAll('[data-unitone-layout*="-divider:"]').forEach((function(t){i.observe(t)}))})();