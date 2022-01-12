"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86072],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91898:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"Result cache"},l=void 0,u={unversionedId:"caching",id:"caching",title:"Result cache",description:"MikroORM has simple result caching mechanism. It works with those methods of",source:"@site/docs/caching.md",sourceDirName:".",slug:"/caching",permalink:"/docs/next/caching",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/caching.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1642010568,formattedLastUpdatedAt:"1/12/2022",frontMatter:{title:"Result cache"},sidebar:"docs",previous:{title:"Using Query Builder",permalink:"/docs/next/query-builder"},next:{title:"Logging",permalink:"/docs/next/debugging"}},p=[],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"MikroORM has simple result caching mechanism. It works with those methods of\n",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"find()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"findOne()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"findAndCount()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"findOneOrFail()"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"count()"),", as well as with ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," result methods (including ",(0,o.kt)("inlineCode",{parentName:"p"},"execute"),")."),(0,o.kt)("p",null,"By default, in memory cache is used, that is shared for the whole ",(0,o.kt)("inlineCode",{parentName:"p"},"MikroORM"),"\ninstance. Default expiration is 1 second."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const res = await em.find(Book, { author: { name: 'Jon Snow' } }, {\n  populate: ['author', 'tags'],\n  cache: 50, // set expiration to 50ms\n  // cache: ['cache-id', 50], // set custom cache id and expiration\n  // cache: true, // use default cache id and expiration\n});\n")),(0,o.kt)("p",null,"Or with query builder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const res = await em.createQueryBuilder(Book)\n  .where({ author: { name: 'Jon Snow' } })\n  .cache()\n  .getResultList();\n")),(0,o.kt)("p",null,"We can change the default expiration as well as provide custom cache adapter in\nthe ORM configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const orm = await MikroORM.init({\n  resultCache: {\n    adapter: MemoryCacheAdapter,\n    expiration: 1000, // 1s\n    options: {},\n  },\n  // ...\n});\n")),(0,o.kt)("p",null,"Custom cache adapters need to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheAdapter")," interface."))}d.isMDXComponent=!0}}]);