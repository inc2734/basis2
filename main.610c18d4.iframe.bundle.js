(self.webpackChunkbasis2=self.webpackChunkbasis2||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"),__webpack_require__("./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"),__webpack_require__("./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)stories\\/(?%21\\.)(?=.)[^/]*?\\.(js|jsx|ts|tsx))$")],module,!1)},"./src/components/box/stories/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["padding","backgroundColor","color","borderColor","borderWidth"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Box=function Box(_ref){var padding=_ref.padding,backgroundColor=_ref.backgroundColor,color=_ref.color,borderColor=_ref.borderColor,borderWidth=_ref.borderWidth,props=_objectWithoutProperties(_ref,_excluded),style={"--box--background-color":backgroundColor,"--box--color":color,"--box--border-color":borderColor,"--box--border-width":borderWidth};return(0,jsx_runtime.jsx)("div",{"data-layout":["box",padding?"box--padding:"+padding:void 0].join(" ").trim(),style,children:props.children})};Box.displayName="Box",Box.propTypes={padding:prop_types_default().number,backgroundColor:prop_types_default().string,color:prop_types_default().string,borderColor:prop_types_default().string,borderWidth:prop_types_default().string},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{padding:{type:{name:"number"},required:!1,description:""},backgroundColor:{type:{name:"string"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},borderColor:{type:{name:"string"},required:!1,description:""},borderWidth:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/box/Box.jsx"]={name:"Box",docgenInfo:Box.__docgenInfo,path:"src/components/box/Box.jsx"});const stories={title:"Components/Box",component:Box,argTypes:{padding:{options:[-1,0,1,2,3,4,5,6,7,8],control:{type:"select"}}},args:{padding:0,borderWidth:"0"}};var Template=function Template(args){return(0,jsx_runtime.jsx)(Box,Object.assign({},args,{children:(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"})}))};Template.displayName="Template";var Default=Template.bind({})},"./src/components/cluster/stories/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["gap","justify","align"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Cluster=function Cluster(_ref){var gap=_ref.gap,justify=_ref.justify,align=_ref.align,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)("div",{"data-layout":["cluster",gap?"cluster--gap:"+gap:void 0,justify?"cluster--justify:"+justify:void 0,align?"cluster--align:"+align:void 0].join(" ").trim(),children:props.children})};Cluster.displayName="Cluster",Cluster.propTypes={gap:prop_types_default().number,justify:prop_types_default().string,align:prop_types_default().string},Cluster.__docgenInfo={description:"",methods:[],displayName:"Cluster",props:{gap:{type:{name:"number"},required:!1,description:""},justify:{type:{name:"string"},required:!1,description:""},align:{type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cluster/Cluster.jsx"]={name:"Cluster",docgenInfo:Cluster.__docgenInfo,path:"src/components/cluster/Cluster.jsx"});const stories={title:"Components/Cluster",component:Cluster,argTypes:{gap:{options:[-1,0,1,2,3,4,5,6,7,8],control:{type:"select"}},justify:{options:["start","center","end"],control:{type:"select"}},align:{options:["start","center","end"],control:{type:"select"}}},args:{gap:0,justify:"start",align:"start"}};var Template=function Template(args){return(0,jsx_runtime.jsxs)(Cluster,Object.assign({},args,{children:[(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum"}),(0,jsx_runtime.jsx)("p",{children:"dolor sit"}),(0,jsx_runtime.jsx)("p",{children:"amet consectetur"}),(0,jsx_runtime.jsx)("p",{children:"adipisicing elit"}),(0,jsx_runtime.jsx)("p",{children:"sed do"})]}))};Template.displayName="Template";var Default=Template.bind({})},"./src/components/container/stories/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["maxWidth"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Container=function Container(_ref){var maxWidth=_ref.maxWidth,props=_objectWithoutProperties(_ref,_excluded),style={"--container--max-width":maxWidth||void 0};return(0,jsx_runtime.jsx)("div",{"data-layout":"container",style,children:props.children})};Container.displayName="Container",Container.__docgenInfo={description:"",methods:[],displayName:"Container"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.jsx"]={name:"Container",docgenInfo:Container.__docgenInfo,path:"src/components/container/Container.jsx"});const stories={title:"Components/Container",component:Container};var Template=function Template(args){return(0,jsx_runtime.jsx)(Container,Object.assign({},args,{children:(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"})}))};Template.displayName="Template";var Default=Template.bind({});Default.args={padding:"0"}},"./src/components/stack/stories/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Center:()=>Center,Default:()=>Default,default:()=>stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["gap","center"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Stack=function Stack(_ref){var gap=_ref.gap,center=_ref.center,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)("div",{"data-layout":["stack",gap?"stack--gap:"+gap:void 0,!0===center?"stack--center":void 0].join(" ").trim(),children:props.children})};Stack.displayName="Stack",Stack.propTypes={gap:prop_types_default().number,center:prop_types_default().bool},Stack.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{gap:{type:{name:"number"},required:!1,description:""},center:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stack/Stack.jsx"]={name:"Stack",docgenInfo:Stack.__docgenInfo,path:"src/components/stack/Stack.jsx"});const stories={title:"Components/Stack",component:Stack,argTypes:{gap:{options:[-1,0,1,2,3,4,5,6,7,8],control:{type:"select"}}}};var Template=function Template(args){return(0,jsx_runtime.jsxs)(Stack,Object.assign({},args,{children:[(0,jsx_runtime.jsx)("p",{style:{"--font-size":-2},children:"Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}),(0,jsx_runtime.jsx)("p",{style:{"--font-size":-1},children:"Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}),(0,jsx_runtime.jsx)("p",{style:{"--font-size":1},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}),(0,jsx_runtime.jsx)("p",{style:{"--font-size":2},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}),(0,jsx_runtime.jsx)("p",{style:{"--font-size":3},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}),(0,jsx_runtime.jsx)("p",{style:{"--font-size":4},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}),(0,jsx_runtime.jsx)("p",{style:{"--font-size":5},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}),(0,jsx_runtime.jsx)("p",{style:{"--font-size":6},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"}),(0,jsx_runtime.jsx)("p",{style:{"--font-size":7},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill"})]}))};Template.displayName="Template";var Default=Template.bind({});Default.args={center:!1,gap:0};var Center=Template.bind({});Center.args={center:!0,gap:0}},"./src/components/text/stories/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Ja:()=>Ja,default:()=>stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Text=function Text(_ref){var props=_extends({},_ref);return(0,jsx_runtime.jsx)("div",{"data-layout":"text",children:props.children})};Text.displayName="Text",Text.__docgenInfo={description:"",methods:[],displayName:"Text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.jsx"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"src/components/text/Text.jsx"});const stories={title:"Components/Text",component:Text,argTypes:{lang:{table:{disable:!0}}}};var Template=function Template(args){var headingText="ja"===args.lang?"あともゴーシュ子たり何に向いていまし":"Lorem ipsum dolor sit amet, consectetur adipisicing elit",bodyText="ja"===args.lang?"あともゴーシュ子たり何に向いていまし。夜中は次がしばらくと落ちて狸から舞台のようで来でおかげをしからちょろちょろゴーシュを合わせていです。どうかまげて子をこどもに出でしです。それりんに狸がこってボック":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",style={};return"ja"===args.lang&&(style["--half-leading"]="0.4"),(0,jsx_runtime.jsx)("div",{style,children:(0,jsx_runtime.jsxs)(Text,Object.assign({},args,{style,children:[(0,jsx_runtime.jsx)("h1",{children:headingText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("p",{style:{"--font-size":2},children:bodyText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:bodyText}),(0,jsx_runtime.jsx)("li",{children:bodyText})]}),(0,jsx_runtime.jsx)("h2",{children:headingText}),(0,jsx_runtime.jsx)("h3",{children:headingText}),(0,jsx_runtime.jsx)("h4",{children:headingText}),(0,jsx_runtime.jsx)("h5",{children:headingText}),(0,jsx_runtime.jsx)("h6",{children:headingText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("h2",{children:headingText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("h3",{children:headingText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("h4",{children:headingText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("h5",{children:headingText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("h6",{children:headingText}),(0,jsx_runtime.jsx)("p",{children:bodyText}),(0,jsx_runtime.jsx)("p",{children:bodyText})]}))})};Template.displayName="Template";var Default=Template.bind({}),Ja=Template.bind({});Ja.args={lang:"ja"}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$",module.exports=webpackEmptyContext},"./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)stories\\/(?%21\\.)(?=.)[^/]*?\\.(js|jsx|ts|tsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./box/stories/index.jsx":"./src/components/box/stories/index.jsx","./cluster/stories/index.jsx":"./src/components/cluster/stories/index.jsx","./container/stories/index.jsx":"./src/components/container/stories/index.jsx","./stack/stories/index.jsx":"./src/components/stack/stories/index.jsx","./text/stories/index.jsx":"./src/components/text/stories/index.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)stories\\/(?%21\\.)(?=.)[^/]*?\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$",module.exports=webpackEmptyContext},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?%21(?:^|\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[80],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js"))));__webpack_require__.O()}]);