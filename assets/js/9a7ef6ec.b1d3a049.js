"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},f),{},{components:n})):r.createElement(d,s({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={id:"config",title:"TestConfig"},s=void 0,a={unversionedId:"reference/test/environment/config",id:"reference/test/environment/config",title:"TestConfig",description:"The TestConfig service provides access to default configuration settings used by ZIO Test:",source:"@site/docs/reference/test/environment/test-config.md",sourceDirName:"reference/test/environment",slug:"/reference/test/environment/config",permalink:"/reference/test/environment/config",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/environment/test-config.md",tags:[],version:"current",frontMatter:{id:"config",title:"TestConfig"},sidebar:"reference-sidebar",previous:{title:"Live",permalink:"/reference/test/environment/live"},next:{title:"Sized",permalink:"/reference/test/environment/sized"}},c={},l=[],f={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TestConfig")," service provides access to default configuration settings used by ZIO Test:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Repeats \u2014 The number of times to repeat tests to ensure they are stable."),(0,i.kt)("li",{parentName:"ol"},"Retries \u2014 The number of times to retry flaky tests."),(0,i.kt)("li",{parentName:"ol"},"Samples \u2014 The number of sufficient samples to check for a random variable."),(0,i.kt)("li",{parentName:"ol"},"Shrinks \u2014 The maximum number of ",(0,i.kt)("a",{parentName:"li",href:"/reference/test/gen#shrinking"},"shrinkings")," to minimize large failures.")),(0,i.kt)("p",null,"Currently, the live version of ",(0,i.kt)("inlineCode",{parentName:"p"},"TestEnvironment")," contains the live version of this service with the following configs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"TestConfig.live(\n  repeats0 = 100,\n  retries0 = 100,\n  samples0 = 200,\n  shrinks0 = 1000\n)\n")),(0,i.kt)("p",null,"So by default, the ZIO Test runner will run tests with this config. Regular users do not need access to this service unless they need to change or access configurations from the ZIO Test environment."))}p.isMDXComponent=!0}}]);