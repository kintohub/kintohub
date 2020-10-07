(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return i}));var r=n(2),a=n(9),l=(n(0),n(197)),o={id:"express-example",title:"Express"},p={id:"examples/express/express-example",isDocsHomePage:!1,title:"Express",description:"A sample Express app for KintoHub",source:"@site/docs/examples/express/README.md",permalink:"/examples/express/express-example",sidebar:"someSidebar",previous:{title:"NextJS",permalink:"/examples/nextjs/nextjs-example"},next:{title:"Hapi",permalink:"/examples/hapi/hapi-example"}},c=[{value:"\ud83d\ude80 Deploying on KintoHub",id:"-deploying-on-kintohub",children:[]},{value:"\ud83d\udd28 Running locally",id:"-running-locally",children:[]},{value:"\u26a1 API Call",id:"-api-call",children:[]},{value:"\ud83d\ude91 Support",id:"-support",children:[]}],b={rightToc:c};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A sample Express app for ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://kintohub.com"}),"KintoHub")),Object(l.b)("h2",{id:"-deploying-on-kintohub"},"\ud83d\ude80 Deploying on KintoHub"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Service Type:")," Backend API"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Repo:")," ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kintohub/kintohub"}),"https://github.com/kintohub/kintohub")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Branch:")," master"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Language:")," NodeJS"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Language version:")," 12"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Build Command:")," ",Object(l.b)("inlineCode",{parentName:"li"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Start Command:")," ",Object(l.b)("inlineCode",{parentName:"li"},"npm start")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Subfolder Path:")," ",Object(l.b)("inlineCode",{parentName:"li"},"./docs/examples/express")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Port:")," 80")),Object(l.b)("h2",{id:"-running-locally"},"\ud83d\udd28 Running locally"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Pre-requisites:")," NodeJS v12+"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Clone the repository to a folder of choice.")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"$ git clone https://github.com/kintohub/kintohub\n\n$ cd kintohub/docs/examples/express\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Install the dependencies")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm install\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"To start the app ")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm start\n")),Object(l.b)("h2",{id:"-api-call"},"\u26a1 API Call"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Local:")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"curl -X GET http://localhost/hello/world\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"On KintoHub:")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"curl -X GET http://<KintohubHostURL>/hello/world\n")),Object(l.b)("h4",{id:"response"},"Response"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "Hello world"\n}\n')),Object(l.b)("h2",{id:"-support"},"\ud83d\ude91 Support"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Contact us:")," ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.kintohub.com/contact-us"}),"https://www.kintohub.com/contact-us")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Discord:")," ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://discordapp.com/invite/E2CMjKP"}),"https://discordapp.com/invite/E2CMjKP")))}i.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,O=u["".concat(o,".").concat(m)]||u[m]||s[m]||l;return n?a.a.createElement(O,p(p({ref:t},b),{},{components:n})):a.a.createElement(O,p({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);