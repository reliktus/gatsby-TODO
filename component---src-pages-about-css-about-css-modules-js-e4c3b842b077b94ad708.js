(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"2vHB":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n=r(a("q1tI")),u=r(a("JHR5")),l=r(a("LCnF")),c=a("m81S"),s=function(e){return n.default.useContext(c.OptionsContext).useAutoGen?n.default.createElement(u.default,e):n.default.createElement(l.default,e)};t.default=s},"8Req":function(e,t,a){"use strict";a.r(t);a("pIFo");var r=a("q1tI"),n=a.n(r),u=a("OQUR"),l=a.n(u);function c(e){var t=e.children;return n.a.createElement("div",{className:l.a.container},t)}var s=a("Bl7J"),i=a("XSID"),o=a.n(i);t.default=function(e){var t=e.pageContext,a=e.location,r=(e.data,function(e){return n.a.createElement("div",{className:o.a.user},n.a.createElement("img",{src:e.avatar,className:o.a.avatar,alt:""}),n.a.createElement("div",{className:o.a.description},n.a.createElement("h2",{className:o.a.username},e.username),n.a.createElement("p",{className:o.a.excerpt},e.excerpt)))}),u=function(e,t,a){return{username:e,avatar:t,excerpt:a}},l=[new u("Jane Doe","https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg","I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."),new u("Jane Doe","https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg","I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit.")],i=t.breadcrumb.crumbs,m=a.pathname.toLowerCase().replace("-"," ");return n.a.createElement(s.a,{crumbs:i,crumbLabel:m},n.a.createElement(c,null,n.a.createElement("h1",null,"About CSS Modules"),n.a.createElement("p",null,"CSS Modules are cool"),l.map((function(e,t){return n.a.createElement(r,{key:t,username:e.username,avatar:e.avatar,excerpt:e.excerpt})}))))}},Bl7J:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("ZyPH"),n=a("Wbzz"),u=a("bSK8"),l=a("q1tI"),c=a.n(l),s=function(e){return c.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},c.a.createElement(n.Link,{to:e.to},e.children))};function i(e){var t=e.crumbs,a=e.customCrumbLabel,l=e.children,i=r.data;return c.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},c.a.createElement("header",{style:{marginBottom:"1.5rem"}},c.a.createElement(n.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},c.a.createElement("h3",{style:{display:"inline"}},i.site.siteMetadata.title)),c.a.createElement("ul",{style:{listStyle:"none",float:"right"}},c.a.createElement(s,{to:"/"},"Home"),c.a.createElement(s,{to:"/about/"},"About"),c.a.createElement(s,{to:"/aboutCss/about-css-modules/"},"about-css-modules"),c.a.createElement(s,{to:"/contact/"},"Contact")),c.a.createElement(u.Breadcrumb,{crumbs:t,crumbSeparator:" > ",crumbLabel:a})),l,c.a.createElement("footer",null,c.a.createElement("ul",{style:{listStyle:"none",float:"right"}},c.a.createElement(s,{to:"/"},"Home"),c.a.createElement(s,{to:"/about/"},"About"),c.a.createElement(s,{to:"/aboutCss/about-css-modules/"},"about-css-modules"),c.a.createElement(s,{to:"/contact/"},"Contact"))))}},JHR5:function(e,t,a){"use strict";a("Z2Ku"),a("L9s1");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n=r(a("pVnL")),u=r(a("8OQS")),l=r(a("q1tI")),c=r(a("17x9")),s=a("Wbzz"),i=function(e){var t=e.title,a=e.crumbs,r=e.crumbLabel,c=e.crumbSeparator,i=e.disableLinks,o=e.hiddenCrumbs,m=(0,u.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return o.includes(e.pathname)?null:l.default.createElement(l.default.Fragment,{key:t+"-"+e.pathname},!i.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(s.Link,(0,n.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},m),r&&t===a.length-1?r:e.crumbLabel)),i.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,n.default)({className:"breadcrumb__link__disabled"},m),r&&t===a.length-1?r:e.crumbLabel)),t===a.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},c))})))))};i.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},i.propTypes={title:c.default.string,crumbSeparator:c.default.string,crumbs:c.default.arrayOf(c.default.shape({location:c.default.shape(),pathname:c.default.string.isRequired})).isRequired,crumbLabel:c.default.string,disableLinks:c.default.arrayOf(c.default.string),hiddenCrumbs:c.default.arrayOf(c.default.string)};var o=i;t.default=o},LCnF:function(e,t,a){"use strict";a("Oyvg"),a("pIFo");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n=r(a("pVnL")),u=r(a("8OQS")),l=r(a("q1tI")),c=r(a("17x9")),s=a("Wbzz"),i=a("m81S"),o=r(a("q/3z")),m=function(e){var t=e.title,a=e.location,r=e.crumbLabel,c=e.crumbSeparator,m=(0,u.default)(e,["title","location","crumbLabel","crumbSeparator"]),d=l.default.useContext(i.OptionsContext).usePathPrefix,f=(0,o.default)({location:(0,n.default)((0,n.default)({},a),{},{pathname:d?a.pathname.replace(new RegExp("^"+d),""):a.pathname}),crumbLabel:r,crumbSeparator:c}).crumbs,b=void 0===f?[]:f;return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},b.map((function(e,t){return l.default.createElement("li",{className:"breadcrumb__item",key:t},l.default.createElement(s.Link,(0,n.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===b.length-1?"page":null},m),e.crumbLabel),t===b.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};m.defaultProps={title:"",crumbSeparator:" / "},m.propTypes={location:c.default.shape().isRequired,crumbLabel:c.default.string.isRequired,title:c.default.string,crumbSeparator:c.default.string};var d=m;t.default=d},OQUR:function(e,t,a){e.exports={container:"container-module--container--1stMa"}},Oyvg:function(e,t,a){var r=a("dyZX"),n=a("Xbzi"),u=a("hswa").f,l=a("kJMx").f,c=a("quPj"),s=a("C/va"),i=r.RegExp,o=i,m=i.prototype,d=/a/g,f=/a/g,b=new i(d)!==d;if(a("nh4g")&&(!b||a("eeVq")((function(){return f[a("K0xU")("match")]=!1,i(d)!=d||i(f)==f||"/a/i"!=i(d,"i")})))){i=function(e,t){var a=this instanceof i,r=c(e),u=void 0===t;return!a&&r&&e.constructor===i&&u?e:n(b?new o(r&&!u?e.source:e,t):o((r=e instanceof i)?e.source:e,r&&u?s.call(e):t),a?this:m,i)};for(var p=function(e){e in i||u(i,e,{configurable:!0,get:function(){return o[e]},set:function(t){o[e]=t}})},h=l(o),g=0;h.length>g;)p(h[g++]);m.constructor=i,i.prototype=m,a("KroJ")(r,"RegExp",i)}a("elZq")("RegExp")},SsCC:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0;var n=r(a("2vHB"));t.Breadcrumb=n.default;var u=r(a("JHR5"));t.AutoGenCrumb=u.default;var l=a("iHlK");t.BreadcrumbContext=l.BreadcrumbContext,t.BreadcrumbConsumer=l.BreadcrumbConsumer,t.BreadcrumbProvider=l.BreadcrumbProvider;var c=r(a("q/3z"));t.useBreadcrumb=c.default},Wbzz:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",(function(){return b})),a.d(t,"StaticQueryContext",(function(){return o})),a.d(t,"StaticQuery",(function(){return d})),a.d(t,"useStaticQuery",(function(){return f})),a.d(t,"prefetchPathname",(function(){return i}));a("xfY5");var r=a("q1tI"),n=a.n(r),u=a("+ZDr"),l=a.n(u);a.d(t,"Link",(function(){return l.a})),a.d(t,"withAssetPrefix",(function(){return u.withAssetPrefix})),a.d(t,"withPrefix",(function(){return u.withPrefix})),a.d(t,"parsePath",(function(){return u.parsePath})),a.d(t,"navigate",(function(){return u.navigate})),a.d(t,"push",(function(){return u.push})),a.d(t,"replace",(function(){return u.replace})),a.d(t,"navigateTo",(function(){return u.navigateTo}));var c=a("lw3w"),s=a.n(c);a.d(t,"PageRenderer",(function(){return s.a}));var i=a("emEt").default.enqueue,o=n.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,r=e.query,u=e.render,l=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,l&&u(l),!l&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,r=e.render,u=e.children;return n.a.createElement(o.Consumer,null,(function(e){return n.a.createElement(m,{data:t,query:a,render:r||u,staticQueryData:e})}))},f=function(e){n.a.useContext;var t=n.a.useContext(o);if(isNaN(Number(e)))throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+e+"`);\n");if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},XSID:function(e,t,a){e.exports={user:"about-css-modules-module--user--dGGDF",avatar:"about-css-modules-module--avatar--2x8sn",description:"about-css-modules-module--description--1loe7",username:"about-css-modules-module--username--2RTC8",excerpt:"about-css-modules-module--excerpt--rzusD"}},ZyPH:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Test title from config"}}}}')},bSK8:function(e,t,a){"use strict";t.__esModule=!0;var r=a("SsCC");t.Breadcrumb=r.Breadcrumb,t.BreadcrumbContext=r.BreadcrumbContext,t.BreadcrumbConsumer=r.BreadcrumbConsumer,t.BreadcrumbProvider=r.BreadcrumbProvider,t.useBreadcrumb=r.useBreadcrumb,t.AutoGenCrumb=r.AutoGenCrumb},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},"q/3z":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n=r(a("q1tI")),u=a("iHlK"),l=function(e){var t=e.location,a=e.crumbLabel,r=e.crumbSeparator,l=n.default.useContext(u.BreadcrumbContext),c=l.crumbs,s=l.updateCrumbs;return n.default.useEffect((function(){s({location:t,crumbLabel:a,crumbSeparator:r})}),[t,a,r,s]),{crumbs:c}};t.default=l},qncB:function(e,t,a){var r=a("XKFU"),n=a("vhPU"),u=a("eeVq"),l=a("/e88"),c="["+l+"]",s=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),o=function(e,t,a){var n={},c=u((function(){return!!l[e]()||"​"!="​"[e]()})),s=n[e]=c?t(m):l[e];a&&(n[a]=s),r(r.P+r.F*c,"String",n)},m=o.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(i,"")),e};e.exports=o},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),n=a.n(r),u=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json)):null}},xfY5:function(e,t,a){"use strict";var r=a("dyZX"),n=a("aagx"),u=a("LZWt"),l=a("Xbzi"),c=a("apmT"),s=a("eeVq"),i=a("kJMx").f,o=a("EemH").f,m=a("hswa").f,d=a("qncB").trim,f=r.Number,b=f,p=f.prototype,h="Number"==u(a("Kuth")(p)),g="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var a,r,n,u=(t=g?t.trim():d(t,3)).charCodeAt(0);if(43===u||45===u){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===u){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var l,s=t.slice(2),i=0,o=s.length;i<o;i++)if((l=s.charCodeAt(i))<48||l>n)return NaN;return parseInt(s,r)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof f&&(h?s((function(){p.valueOf.call(a)})):"Number"!=u(a))?l(new b(v(t)),a,f):v(t)};for(var E,y=a("nh4g")?i(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;y.length>_;_++)n(b,E=y[_])&&!n(f,E)&&m(f,E,o(b,E));f.prototype=p,p.constructor=f,a("KroJ")(r,"Number",f)}}}]);
//# sourceMappingURL=component---src-pages-about-css-about-css-modules-js-e4c3b842b077b94ad708.js.map