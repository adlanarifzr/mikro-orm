"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3767],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=m(t),u=i,c=k["".concat(l,".").concat(u)]||k[u]||s[u]||a;return t?r.createElement(c,o(o({ref:n},d),{},{components:t})):r.createElement(c,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=k;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var m=2;m<a;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},42109:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=["components"],p={id:"knex.knex-1.mssqlconnectionconfig",title:"Interface: MsSqlConnectionConfig",sidebar_label:"MsSqlConnectionConfig",custom_edit_url:null,hide_title:!0},l="Interface: MsSqlConnectionConfig",m={unversionedId:"api/interfaces/knex.knex-1.mssqlconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.mssqlconnectionconfig",title:"Interface: MsSqlConnectionConfig",description:"knex.Knex.MsSqlConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.mssqlconnectionconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.mssqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.mssqlconnectionconfig",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1642010568,formattedLastUpdatedAt:"1/12/2022",frontMatter:{id:"knex.knex-1.mssqlconnectionconfig",title:"Interface: MsSqlConnectionConfig",sidebar_label:"MsSqlConnectionConfig",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MigratorConfig",permalink:"/docs/api/interfaces/knex.knex-1.migratorconfig"},next:{title:"MultikeyForeignConstraintBuilder",permalink:"/docs/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder"}},d=[{value:"Properties",id:"properties",children:[{value:"connectionTimeout",id:"connectiontimeout",children:[],level:3},{value:"database",id:"database",children:[],level:3},{value:"domain",id:"domain",children:[],level:3},{value:"driver",id:"driver",children:[],level:3},{value:"options",id:"options",children:[],level:3},{value:"parseJSON",id:"parsejson",children:[],level:3},{value:"password",id:"password",children:[],level:3},{value:"pool",id:"pool",children:[],level:3},{value:"port",id:"port",children:[],level:3},{value:"requestTimeout",id:"requesttimeout",children:[],level:3},{value:"server",id:"server",children:[],level:3},{value:"stream",id:"stream",children:[],level:3},{value:"user",id:"user",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[],level:3}],level:2}],s={toc:d};function k(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-mssqlconnectionconfig"},"Interface: MsSqlConnectionConfig"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MsSqlConnectionConfig"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"connectiontimeout"},"connectionTimeout"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"connectionTimeout"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1913"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"database"},"database"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"database"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1912"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"domain"},"domain"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"domain"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1911"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"driver"},"driver"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"driver"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1906"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"options"},"options"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"options"),": ",(0,a.kt)("em",{parentName:"p"},"Readonly"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"abortTransactionOnError?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"appName?"),": ",(0,a.kt)("em",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"enableArithAbort?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"encrypt?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"instanceName?"),": ",(0,a.kt)("em",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"isolationLevel?"),": ",(0,a.kt)("em",{parentName:"p"},"READ_UNCOMMITTED")," ","|"," ",(0,a.kt)("em",{parentName:"p"},"READ_COMMITTED")," ","|"," ",(0,a.kt)("em",{parentName:"p"},"REPEATABLE_READ")," ","|"," ",(0,a.kt)("em",{parentName:"p"},"SERIALIZABLE")," ","|"," ",(0,a.kt)("em",{parentName:"p"},"SNAPSHOT")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"maxRetriesOnTransientErrors?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"multiSubnetFailover?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"packetSize?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"tdsVersion?"),": ",(0,a.kt)("em",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"trustedConnection?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"useUTC?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean"),"  }",">"),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1918"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"parsejson"},"parseJSON"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"parseJSON"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1916"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"password"},"password"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"password"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1908"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pool"},"pool"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"pool"),": ",(0,a.kt)("em",{parentName:"p"},"Readonly"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise?"),": ",(0,a.kt)("em",{parentName:"p"},"any")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"acquireTimeoutMillis?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"autostart?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"evictionRunIntervalMillis?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"fifo?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"idleTimeoutMillis?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"max?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"maxWaitingClients?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"min?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"numTestsPerRun?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"priorityRange?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"softIdleTimeoutMillis?"),": ",(0,a.kt)("em",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"testOnBorrow?"),": ",(0,a.kt)("em",{parentName:"p"},"boolean"),"  }",">"),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1932"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"port"},"port"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"port"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1910"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requesttimeout"},"requestTimeout"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"requestTimeout"),": ",(0,a.kt)("em",{parentName:"p"},"number")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1914"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"server"},"server"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"server"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1909"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stream"},"stream"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stream"),": ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1915"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"user"},"user"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"user"),": ",(0,a.kt)("em",{parentName:"p"},"string")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1907"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"expirationchecker"},"expirationChecker"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional"),(0,a.kt)("strong",{parentName:"p"},"expirationChecker"),"(): ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("em",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1917"))}k.isMDXComponent=!0}}]);