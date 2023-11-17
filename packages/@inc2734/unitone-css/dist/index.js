"use strict";var t=require("react");function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},e.apply(this,arguments)}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}function n(t,e,r){return(e=o(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=["gap","alignItems","style"];function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}var l=["intrinsic","withText","gutters","maxWidth","style"];function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=["alignItems","divider","gap","justifyContent","tagName","style"],d=["align","gutters","maxWidth","text","style"];function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=["gap","minHeight","justifyContent","padding","noPadding","style"],b=["valign","position","top","right","bottom","left","zIndex","tagName","style"];function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var j=["backgroundColor","borderColor","borderRadius","borderWidth","color","padding","shadow","position","top","right","bottom","left","zIndex","overflow","style"];function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P=["gap","minWidth","minMeasure","position","style"];function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var E=["ratio","switchRatio","style"];function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B=["padding","style"],W=["cover","fill","applyBlur","blur","portrait","gap","minHeight","columns","rows","style"];function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var I=["gap","height","itemWidth","noBar","style"];function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var z=["columnMinWidth","gap","autoRepeat","divider","style"];function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var G=["center","divider","gap","negative","style"];function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}var F=["gap","limit","threshold","style"];function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var L=["center","column","applyGap","gap","gutters","maxWidth","style"];function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var J=["textOrientation","gap","maxHeight","switchWritingMode","style"];function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?K(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var U=["gap","contentMinWidth","revert","sidebar","sidebarWidth","alignItems","style"];function X(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function Y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?X(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}exports.BothSides=function(r){var o=r.gap,l=r.alignItems,u=r.style,p=i(r,c);return u=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},u),t.createElement("div",e({"data-unitone-layout":["both-sides",void 0!==o?"-gap:".concat(o):void 0,void 0!==l?"-align-items:".concat(l):void 0].filter(Boolean).join(" "),style:u},p),p.children)},exports.Center=function(r){r.intrinsic;var o=r.withText,n=r.gutters,c=r.maxWidth,a=r.style,u=i(r,l);return a=p(p({},a),{},{"--unitone--max-width":c||void 0}),t.createElement("div",e({"data-unitone-layout":["center",!0===o?"-with-text":void 0,void 0!==n?"-gutters:".concat(n):void 0].filter(Boolean).join(" "),style:a},u),u.children)},exports.Cluster=function(r){var o=r.alignItems,n=r.divider,c=r.gap,a=r.justifyContent,l=r.tagName,u=void 0===l?"div":l,p=r.style,d=i(r,s),v=u;return t.createElement(v,e({"data-unitone-layout":["cluster",n?"-divider:".concat(n):void 0,void 0!==c?"-gap:".concat(c):void 0,void 0!==o?"-align-items:".concat(o):void 0,void 0!==a?"-justify-content:".concat(a):void 0].filter(Boolean).join(" "),style:p},d),d.children)},exports.Container=function(r){var o=r.align,n=r.gutters,c=r.maxWidth;r.text;var a=r.style,l=i(r,d);return a=y(y({},a),{},{"--unitone--max-width":c||void 0}),t.createElement("div",e({"data-unitone-layout":["container",void 0!==o?"-align:".concat(o):void 0,void 0!==n?"-gutters:".concat(n):void 0].filter(Boolean).join(" "),style:a},l),l.children)},exports.Cover=function(e){var r=e.gap,o=e.minHeight;e.justifyContent;var n=e.padding,c=e.noPadding,a=e.style,l=i(e,O);return a=g(g({},a),{},{"--unitone--min-height":o||void 0}),t.createElement("div",{"data-unitone-layout":["cover",c?"-no-padding":void 0,void 0!==r?"-gap:".concat(r):void 0,void 0!==n?"-padding:".concat(n):void 0].filter(Boolean).join(" "),style:a},l.children)},exports.CoverContent=function(r){var o=r.valign,n=r.position,c=r.top,a=r.right,l=r.bottom,u=r.left,p=r.zIndex,s=r.tagName,d=void 0===s?"div":s,v=r.style,y=i(r,b),O=d;return v=g(g({},v),{},{"--unitone--top":void 0!==c?c:void 0,"--unitone--right":void 0!==a?a:void 0,"--unitone--bottom":void 0!==l?l:void 0,"--unitone--left":void 0!==u?u:void 0,"--unitone--z-index":void 0!==p?p:void 0}),t.createElement(O,e({"data-unitone-layout":["cover__content",void 0!==o?"-valign:".concat(o):void 0,void 0!==n?"-position:".concat(n):void 0].filter(Boolean).join(" "),style:v},y),y.children)},exports.Decorator=function(r){var o=r.backgroundColor,n=r.borderColor,c=r.borderRadius,a=r.borderWidth,l=r.color,u=r.padding,p=r.shadow,s=r.position,d=r.top,v=r.right,y=r.bottom,O=r.left,b=r.zIndex,f=r.overflow,g=r.style,h=i(r,j);return g=m(m({},g),{},{"--unitone--background-color":o,"--unitone--border-color":n,"--unitone--border-radius":c,"--unitone--border-width":a,"--unitone--color":l,"--unitone--top":void 0!==d?d:void 0,"--unitone--right":void 0!==v?v:void 0,"--unitone--bottom":void 0!==y?y:void 0,"--unitone--left":void 0!==O?O:void 0,"--unitone--z-index":void 0!==b?b:void 0}),t.createElement("div",e({"data-unitone-layout":["decorator",void 0!==u?"-padding:".concat(u):void 0,p?"-shadow":void 0,s?"-position:".concat(s):void 0,f?"-overflow:".concat(f):void 0].filter(Boolean).join(" "),style:g},h),h.children)},exports.Float=function(r){var o=r.gap,n=r.minWidth,c=r.minMeasure,a=r.position,l=r.style,u=i(r,P);return l=D(D({},l),{},{"--unitone--min-width":n||void 0,"--unitone--min-measure":c||void 0}),t.createElement("div",e({"data-unitone-layout":["float",a?"-position:".concat(a):void 0,void 0!==o?"-gap:".concat(o):void 0].filter(Boolean).join(" "),style:l},u),u.children)},exports.Frame=function(r){var o=r.ratio,n=r.switchRatio,c=r.style,a=i(r,E);return c=S(S({},c),{},{"--unitone--ratio":o||void 0}),t.createElement("div",e({"data-unitone-layout":["frame",!0===n?"-switch":void 0].filter(Boolean).join(" "),style:c},a),a.children)},exports.Gutters=function(r){var o=r.padding,n=r.style,c=i(r,B);return t.createElement("div",e({"data-unitone-layout":["gutters",void 0!==o?"-padding:".concat(o):void 0].filter(Boolean).join(" "),style:n},c),c.children)},exports.Layers=function(r){var o=r.cover,n=r.fill,c=r.applyBlur,a=r.blur,l=r.portrait,u=r.gap,p=r.minHeight,s=r.columns,d=r.rows,v=r.style,y=i(r,W);return v=C(C({},v),{},{"--unitone--min-height":void 0!==p?p:void 0,"--unitone--columns":void 0!==s?s:void 0,"--unitone--rows":void 0!==d?d:void 0,"--unitone--blur":void 0!==a?a:void 0}),t.createElement("div",e({"data-unitone-layout":["layers",void 0!==u?"-gap:".concat(u):void 0,!0===o?"-cover":void 0,!0===n?"-fill":void 0,!0===c?"-blur":void 0,!0===l?"-portrait":void 0].filter(Boolean).join(" "),style:v},y),y.children)},exports.Reel=function(r){var o=r.gap,n=r.height,c=r.itemWidth,a=r.noBar,l=r.style,u=i(r,I);return l=R(R({},l),{},{"--unitone--height":n||void 0,"--unitone--item-width":c||void 0}),t.createElement("div",e({"data-unitone-layout":["reel",o?"-gap:".concat(o):void 0,!0===a?"-no-bar":void 0].filter(Boolean).join(" "),style:l},u),u.children)},exports.ResponsiveGrid=function(r){var o=r.columnMinWidth,n=r.gap,c=r.autoRepeat,a=r.divider,l=r.style,u=i(r,z);return l=N(N({},l),{},{"--unitone--column-min-width":o||void 0}),t.createElement("div",e({"data-unitone-layout":["responsive-grid",void 0!==n?"-gap:".concat(n):void 0,void 0!==c?"-auto-repeat:".concat(c):void 0,a?"-divider:".concat(a):void 0].filter(Boolean).join(" "),style:l},u),u.children)},exports.Stack=function(r){r.center;var o=r.divider,c=r.gap,a=r.negative,l=r.style,u=i(r,G);return l=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},l),t.createElement("div",e({"data-unitone-layout":["stack",o?"-divider:".concat(o):void 0,void 0!==c?"-gap:".concat(c):void 0,!0===a?"-negative":void 0].filter(Boolean).join(" "),style:l},u),u.children)},exports.Switcher=function(r){var o=r.gap;r.limit;var n=r.threshold,c=r.style,a=i(r,F);return c=q(q({},c),{},{"--unitone--threshold":n||void 0}),t.createElement("div",e({"data-unitone-layout":["switcher",void 0!==o?"-gap:".concat(o):void 0].filter(Boolean).join(" "),style:c},a),a.children)},exports.Text=function(r){var o=r.center,n=r.column,c=r.applyGap,a=r.gap,l=r.gutters,u=r.maxWidth,p=r.style,s=i(r,L);return p=A(A({},p),{},{"--unitone--max-width":u||void 0}),t.createElement("div",e({"data-unitone-layout":["text",!0===o?"-center":void 0,!0===n?"-column":void 0,!0===c?"-gap":void 0,void 0!==a?"-gap:".concat(a):void 0,void 0!==l?"-gutters:".concat(l):void 0].filter(Boolean).join(" "),style:p},s),s.children)},exports.VerticalWriting=function(r){var o=r.textOrientation,n=r.gap,c=r.maxHeight,a=r.switchWritingMode,l=r.style,u=i(r,J);return l=Q(Q({},l),{},{"--unitone--max-height":c||void 0}),t.createElement("div",null,t.createElement("div",e({"data-unitone-layout":["vertical-writing",void 0!==o?"-text-orientation:".concat(o):void 0,void 0!==n?"-gap:".concat(n):void 0,!0===a?"-switch":void 0].filter(Boolean).join(" "),style:l},u),u.children))},exports.WithSidebar=function(r){var o=r.gap,n=r.contentMinWidth,c=r.revert,a=r.sidebar,l=r.sidebarWidth,u=r.alignItems,p=r.style,s=i(r,U);return p=Y(Y({},p),{},{"--unitone--sidebar-width":l||void 0,"--unitone--content-min-width":n||void 0}),t.createElement("div",e({"data-unitone-layout":["with-sidebar",!0===c?"-revert":void 0,void 0!==o?"-gap:".concat(o):void 0,void 0!==a?"-sidebar:".concat(a):void 0,void 0!==u?"-align-items:".concat(u):void 0].filter(Boolean).join(" "),style:p},s),s.children)};
