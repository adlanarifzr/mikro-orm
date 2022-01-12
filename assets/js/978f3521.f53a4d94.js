"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77421],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Identity Map and Request Context"},s=void 0,u={unversionedId:"identity-map",id:"version-4.2/identity-map",title:"Identity Map and Request Context",description:"MikroORM uses identity map in background so you will always get the same instance of",source:"@site/versioned_docs/version-4.2/identity-map.md",sourceDirName:".",slug:"/identity-map",permalink:"/docs/4.2/identity-map",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/identity-map.md",tags:[],version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1642010568,formattedLastUpdatedAt:"1/12/2022",frontMatter:{title:"Identity Map and Request Context"},sidebar:"version-4.2/docs",previous:{title:"Unit of Work",permalink:"/docs/4.2/unit-of-work"},next:{title:"Entity References and Reference<T> Wrapper",permalink:"/docs/4.2/entity-references"}},p=[{value:"Forking Entity Manager",id:"forking-entity-manager",children:[],level:2},{value:'<a name="request-context"></a> RequestContext helper for DI containers',id:"-requestcontext-helper-for-di-containers",children:[],level:2},{value:"Why is Request Context needed?",id:"why-is-request-context-needed",children:[{value:"Problem 1 - growing memory footprint",id:"problem-1---growing-memory-footprint",children:[],level:3},{value:"Problem 2 - unstable response of API endpoints",id:"problem-2---unstable-response-of-api-endpoints",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," uses identity map in background so you will always get the same instance of\none entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne({ name: 'Jon Snow' }, ['books']);\nconst authors = await authorRepository.findAll(['books']);\n\n// identity map in action\nconsole.log(jon === authors[0]); // true\n")),(0,i.kt)("p",null,"If you want to clear this identity map cache, you can do so via ",(0,i.kt)("inlineCode",{parentName:"p"},"em.clear()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"orm.em.clear();\n")),(0,i.kt)("p",null,"You should always keep unique identity map per each request. This basically means that you need\nto clone entity manager and use the clone in request context. There are two ways to achieve this:"),(0,i.kt)("h2",{id:"forking-entity-manager"},"Forking Entity Manager"),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"fork()")," method you can simply get clean entity manager with its own context and identity map:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const em = orm.em.fork();\n")),(0,i.kt)("h2",{id:"-requestcontext-helper-for-di-containers"},(0,i.kt)("a",{name:"request-context"})," RequestContext helper for DI containers"),(0,i.kt)("p",null,"If you use dependency injection container like ",(0,i.kt)("inlineCode",{parentName:"p"},"inversify")," or the one in ",(0,i.kt)("inlineCode",{parentName:"p"},"nestjs")," framework, it\ncan be hard to achieve this, because you usually want to access your repositories via DI container,\nbut it will always provide you with the same instance, rather than new one for each request. "),(0,i.kt)("p",null,"To solve this, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper, that will use ",(0,i.kt)("inlineCode",{parentName:"p"},"node"),"'s Domain API in the\nbackground to isolate the request context. MikroORM will always use request specific (forked)\nentity manager if available, so all you need to do is to create new request context preferably\nas a middleware:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"app.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),(0,i.kt)("p",null,"You should register this middleware as the last one just before request handlers and before\nany of your custom middleware that is using the ORM. There might be issues when you register\nit before request processing middleware like ",(0,i.kt)("inlineCode",{parentName:"p"},"queryParser")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bodyParser"),", so definitely\nregister the context after them. "),(0,i.kt)("p",null,"Later on you can then access the request scoped ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," via ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContext.getEntityManager()"),".\nThis method is used under the hood automatically, so you should not need it. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"RequestContext.getEntityManager()")," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"undefinded")," if the context was\nnot started yet.")),(0,i.kt)("h2",{id:"why-is-request-context-needed"},"Why is Request Context needed?"),(0,i.kt)("p",null,"Imagine you will use single Identity Map throughout your application. It will be shared across\nall request handlers, that can possibly run in parallel. "),(0,i.kt)("h3",{id:"problem-1---growing-memory-footprint"},"Problem 1 - growing memory footprint"),(0,i.kt)("p",null,"As there would be only one shared Identity Map, you can't just clear it after your request ends.\nThere can be another request working with it so clearing the Identity Map from one request could\nbreak other requests running in parallel. This will result in growing memory footprint, as every\nentity that became managed at some point in time would be kept in the Identity Map. "),(0,i.kt)("h3",{id:"problem-2---unstable-response-of-api-endpoints"},"Problem 2 - unstable response of API endpoints"),(0,i.kt)("p",null,"Every entity has ",(0,i.kt)("inlineCode",{parentName:"p"},"toJSON()")," method, that automatically converts it to serialized form. If you\nhave only one shared Identity Map, following situation may occur:"),(0,i.kt)("p",null,"Let's say there are 2 endpoints"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /book/:id")," that returns just the book, without populating anything"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /book-with-author/:id")," that returns the book and its author populated")),(0,i.kt)("p",null,"Now when someone requests the same book via both of those endpoints, you could end up with both\nreturning the same output:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"Book")," without populating its property ",(0,i.kt)("inlineCode",{parentName:"li"},"author")," property"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /book-with-author/1")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"Book"),", this time with ",(0,i.kt)("inlineCode",{parentName:"li"},"author")," populated"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /book/1")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"Book"),", but this time also with ",(0,i.kt)("inlineCode",{parentName:"li"},"author")," populated")),(0,i.kt)("p",null,"This happens because the information about entity association being populated is stored in\nthe Identity Map."))}c.isMDXComponent=!0}}]);