(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),r=(n(0),n(197)),o={id:"environment-variables",title:"Environment Variables"},l={id:"anatomy/environment-variables",isDocsHomePage:!1,title:"Environment Variables",description:"Environment Variables are used as both Run Time and Build Time lifecycle of your app.",source:"@site/docs/anatomy/anatomy-environment-variables.md",permalink:"/anatomy/environment-variables",sidebar:"someSidebar",previous:{title:"Build Settings",permalink:"/anatomy/build-settings"},next:{title:"Advanced Settings",permalink:"/anatomy/advanced"}},b=[{value:"New Service Environment Variables",id:"new-service-environment-variables",children:[]},{value:"Edit Service Environment Variables",id:"edit-service-environment-variables",children:[]},{value:"View Historic Environment Variables",id:"view-historic-environment-variables",children:[]},{value:"Paste Environment Variables from <code>.env</code> file",id:"paste-environment-variables-from-env-file",children:[]},{value:"Copy Environment Variables from KintoHub",id:"copy-environment-variables-from-kintohub",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Environment Variables are used as both ",Object(r.b)("strong",{parentName:"p"},"Run Time")," and ",Object(r.b)("strong",{parentName:"p"},"Build Time")," lifecycle of your app.\nDuring the ",Object(r.b)("strong",{parentName:"p"},"Build")," stage of your ",Object(r.b)("strong",{parentName:"p"},"Deploy")," action, your app's code gets pulled and compiled and may access environment variables similar to how you would use a local ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file or operating system specific variables for compiling your app.\nIn addition to building time, when your app starts, the same Environment Variables are available for usage."),Object(r.b)("p",null,"Environment Variables allow you to make configuration easier for your app. By specifying specific ",Object(r.b)("em",{parentName:"p"},"API KEYS")," or ",Object(r.b)("inlineCode",{parentName:"p"},"dev")," versus ",Object(r.b)("inlineCode",{parentName:"p"},"prod")," configurations such as ",Object(r.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," can be driven by Environment Variables."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Environment Variables are not available for Catalog services."))),Object(r.b)("h2",{id:"new-service-environment-variables"},"New Service Environment Variables"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to KintoHub"),Object(r.b)("li",{parentName:"ol"},"Choose your environment you are interested in deploying into at the top left."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Create Service")," at the top right."),Object(r.b)("li",{parentName:"ol"},"Enter in your repository information."),Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Environment Variables")," tab available within the panel.")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/anatomy/env-var-tab.png",alt:"Environment Variables"}))),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"After adding your environment variables, then click ",Object(r.b)("strong",{parentName:"li"},"Deploy")," button at the top right.")),Object(r.b)("h2",{id:"edit-service-environment-variables"},"Edit Service Environment Variables"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to KintoHub"),Object(r.b)("li",{parentName:"ol"},"Choose your environment you are interested in deploying into at the top left."),Object(r.b)("li",{parentName:"ol"},"Choose the service from the services list you are interested in editing."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Edit Service")," at the top right."),Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Environment Variables")," tab available within the panel."),Object(r.b)("li",{parentName:"ol"},"After making the modifications you wish to make, then click ",Object(r.b)("strong",{parentName:"li"},"Deploy")," button at the top right.")),Object(r.b)("h2",{id:"view-historic-environment-variables"},"View Historic Environment Variables"),Object(r.b)("p",null,"If you wish to see what environment variables you used in the past, you may look at the configuration of previous releases."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login to KintoHub"),Object(r.b)("li",{parentName:"ol"},"Choose your environment you are interested in deploying into at the top left."),Object(r.b)("li",{parentName:"ol"},"Choose the service from the services list you are interested in editing."),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Releases")," tab near the top left of the screen."),Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"...")," on the right of the row to the specific release you are interested in viewing."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Edit Release")," option"),Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Environment Variables")," tab available within the slide-out panel.")),Object(r.b)("h2",{id:"paste-environment-variables-from-env-file"},"Paste Environment Variables from ",Object(r.b)("inlineCode",{parentName:"h2"},".env")," file"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},".env")," files have been growing in popularity and you can paste this format into KintoHub."),Object(r.b)("p",null,"An example file below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-.env"}),"TEST=ME\nDATABASE_HOST=vegeta.com\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to an Environment Variables tab following the instructions from above."),Object(r.b)("li",{parentName:"ol"},"Copy your entire ",Object(r.b)("inlineCode",{parentName:"li"},".env")," file into your clipboard.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Command+C")," or ",Object(r.b)("inlineCode",{parentName:"li"},"CTRL+C")," depending on your operating system"))),Object(r.b)("li",{parentName:"ol"},"Right-click the ",Object(r.b)("strong",{parentName:"li"},"Key")," input field and click ",Object(r.b)("inlineCode",{parentName:"li"},"Paste"))),Object(r.b)("h2",{id:"copy-environment-variables-from-kintohub"},"Copy Environment Variables from KintoHub"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to an Environment Variables tab following the instructions from above."),Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("inlineCode",{parentName:"li"},"Copy to Clipboard")," button which will copy the values in ",Object(r.b)("inlineCode",{parentName:"li"},".env")," file format")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/anatomy/copy-env-vars.png",alt:"Copy Variables"}))))}p.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return v}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,v=s["".concat(o,".").concat(u)]||s[u]||m[u]||r;return n?i.a.createElement(v,l(l({ref:t},c),{},{components:n})):i.a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);