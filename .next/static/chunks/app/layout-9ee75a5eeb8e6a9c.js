(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{6647:function(){},4650:function(e,t,r){Promise.resolve().then(r.bind(r,9106))},9106:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var a=r(7437),s=r(3711),l=r(6648),n=r(7138),o=r(2265),i=r(6600),c=r(8853),d=r(9354);let h=c.fC,u=c.xz,m=o.forwardRef((e,t)=>{let{className:r,align:s="center",sideOffset:l=4,...n}=e;return(0,a.jsx)(c.h_,{children:(0,a.jsx)(c.VY,{ref:t,align:s,sideOffset:l,className:(0,d.cn)("z-50 w-72 rounded-md border border-zinc-200 bg-white p-4 text-zinc-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",r),...n})})});m.displayName=c.VY.displayName;var x=r(23),f=r(8378),g=r(9779);let p=async()=>{try{let e=await f.Z.get("/notification");return await e.data}catch(e){console.log(e)}};var b=()=>{let[e,t]=(0,o.useState)([]);(0,o.useEffect)(()=>{(async()=>{t(await p())})()},[]);let r=null==e?void 0:e.map(e=>({name:e.title,description:e.message,time:(0,g.lE)(e.createdAt),icon:e.user.profilePic,color:"#00C9A7"}));return(0,a.jsxs)(h,{children:[(0,a.jsx)(u,{children:(0,a.jsx)("button",{children:(0,a.jsx)(i.Z,{size:24})})}),(0,a.jsx)(m,{className:"max-w-full rounded-3xl mr-6 w-[400px]",children:(0,a.jsx)(j,{notifications:r})})]})};let v=e=>{let{name:t,description:r,icon:s,color:n,time:o}=e;return(0,a.jsx)("figure",{className:(0,d.cn)("relative mx-auto mt-4 w-full h-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4","transition-all duration-200 ease-in-out hover:scale-[103%]","bg-white border","transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"),children:(0,a.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[(0,a.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-2xl",style:{backgroundColor:n},children:(0,a.jsx)(l.default,{src:s,width:40,height:40,className:"rounded-full w-10 h-10",alt:"profile"})}),(0,a.jsxs)("div",{className:"flex flex-col overflow-hidden",children:[(0,a.jsxs)("figcaption",{className:"flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ",children:[(0,a.jsx)("span",{className:"text-sm sm:text-lg",children:t}),(0,a.jsx)("span",{className:"mx-1",children:"\xb7"}),(0,a.jsx)("span",{className:"text-xs text-gray-500",children:o})]}),(0,a.jsx)("p",{className:"text-sm font-normal dark:text-white/60",children:r})]})]})})};function j(e){let{notifications:t}=e;return(0,a.jsxs)("div",{className:"relative space-y-3 flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden overflow-y-scroll  bg-background p-2",children:[0===t.length&&(0,a.jsx)("div",{className:"flex items-center justify-center h-full text-lg text-gray-500",children:"No Notifications"}),(0,a.jsx)(x.x,{className:"h-[400px]",children:t.map((e,t)=>(0,o.createElement)(v,{...e,key:t}))})]})}var w=r(6690),y=()=>{let e=(0,o.useRef)(null);(0,o.useEffect)(()=>{function t(t){e.current&&!e.current.contains(t.target)&&i(!1)}return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[e]);let[t,r]=(0,o.useState)(""),[s,i]=(0,o.useState)(!1),[c,d]=(0,o.useState)(""),h=async e=>{r(e.target.value),i(!0);let{data:t}=await f.Z.get("/banner?query=".concat(e.target.value));d(t.video)};return console.log(c,"data"),(0,a.jsxs)("div",{ref:e,className:"py-4 lg:block hidden h-20 w-60 ",children:[(0,a.jsx)("input",{onFocus:()=>{h({target:{value:"all"}})},onChange:h,placeholder:"Search a video",type:"text",className:"border border-gray-600 text-white outline-none  bg-transparent w-full px-4 py-2 rounded-3xl"}),s&&(0,a.jsx)("div",{className:"w-96 mt-3",children:(0,a.jsx)(x.x,{className:"h-96 w-96 bg-body rounded-3xl px-6 py-3 border border-gray-700",children:c&&c.map(e=>(0,a.jsxs)(n.default,{target:"_blank",href:"/video/".concat(null==e?void 0:e._id),className:"py-4 flex items-center gap-8",children:[(0,a.jsx)(l.default,{width:100,height:70,src:(0,w._)(e.processedImages.small.path),alt:"",className:"w-24 h-14 object-cover rounded-lg"}),(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h1",{className:"text-white text-sm font-semibold",children:e.title}),(0,a.jsx)("p",{className:"text-white text-sm font-semibold",children:e.category})]})]},e.id))})})]})};function N(){let[e,t]=(0,o.useState)(!1);return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("button",{onClick:()=>t(!e),children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})}),e&&(0,a.jsx)("div",{className:"fixed bg-body w-[60%] top-0 bottom-0 left-0 duration-500",children:(0,a.jsx)("div",{className:"px-6 flex items-center justify-center py-4",children:(0,a.jsx)("button",{onClick:()=>t(!1),children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})})})]})}var k=()=>{let[e,t]=(0,o.useState)(null);return((0,o.useEffect)(()=>{t(s.bg)},[]),null===e)?(0,a.jsx)("div",{children:"Loading..."}):(0,a.jsxs)("header",{className:"!bg-transparent relative !z-[999] !text-white",children:[(0,a.jsx)("div",{className:"video-overlay-header"}),(0,a.jsx)("nav",{className:"px-4 absolute top-0 left-0 right-0 z-50 bg !bg-transparent lg:px-8 py-2.5",children:(0,a.jsxs)("div",{className:"flex flex-wrap justify-between",children:[(0,a.jsx)(n.default,{href:"/",className:"flex items-center",children:(0,a.jsx)(l.default,{width:134,height:54,src:"/logo/logo.png",className:"mr-3 w-full h-14 lg:h-20",alt:"Flowbite Logo"})}),(0,a.jsxs)("div",{className:"py-4 block lg:hidden ",children:[" ",(0,a.jsx)(N,{})," "]}),!s.bg&&(0,a.jsx)(y,{}),(0,a.jsxs)("div",{className:" items-center lg:flex hidden lg:order-2",children:[e?(0,a.jsx)(n.default,{href:"/login",className:"text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800",children:"Log in"}):(0,a.jsx)(n.default,{href:"/profile",className:"text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",children:"Profile"}),e&&(0,a.jsx)(n.default,{href:"/membership",className:"text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",children:"MemberShip"}),(0,a.jsx)(n.default,{href:"/video-upload",className:"text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",children:"Upload a Video"}),(0,a.jsx)(n.default,{href:"/chat",className:"text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",children:"Chat"}),!s.bg&&(0,a.jsx)(b,{}),(0,a.jsxs)("button",{"data-collapse-toggle":"mobile-menu-2",type:"button",className:"inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"mobile-menu-2","aria-expanded":"false",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,a.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})}),(0,a.jsx)("svg",{className:"hidden w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})]})]})]})})]})};r(3054);var C=r(7776);let M=(0,o.createContext)(void 0),z=e=>{let{children:t}=e,r=!!s.xS;return(0,a.jsx)(M.Provider,{value:{isLogin:r},children:t})},_=[{title:"help",links:[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"FAQ",href:"/faq"}]},{title:"Legal",links:[{label:"Privacy Policy",href:"/privacy-policy"},{label:"Terms & Conditions",href:"/legal-policy"},{label:"refund policy",href:"/refund-policy"},{label:"copy right",href:"/copyrights"}]}];var L=()=>(0,a.jsx)("footer",{className:"bg-gray-900 text-gray-400",children:(0,a.jsxs)("div",{className:"container mx-auto p-4 py-6 lg:py-8",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("img",{src:"/logo/logo.png",className:"h-24 mr-3",alt:"ZynoFlix Logo"})}),(0,a.jsxs)("div",{className:"flex space-x-4",children:[(0,a.jsx)("a",{href:"#",className:"hover:text-white",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"})}),(0,a.jsx)("a",{href:"#",className:"hover:text-white",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"})}),(0,a.jsx)("a",{href:"#",className:"hover:text-white",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"})}),(0,a.jsx)("a",{href:"#",className:"hover:text-white",children:(0,a.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"})})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",children:_.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"mb-6 text-sm font-semibold uppercase text-white",children:e.title}),(0,a.jsx)("ul",{className:"space-y-4",children:e.links.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{target:"_black",href:e.href,className:"hover:underline",children:e.label})},t))})]},t))}),(0,a.jsx)("hr",{className:"my-6 border-gray-700"}),(0,a.jsx)("div",{className:"flex justify-between items-center",children:(0,a.jsxs)("span",{className:"text-sm",children:["\xa9 2024"," ",(0,a.jsx)("a",{href:"/",className:"hover:underline",children:"ZynoFlixott™"}),". All Rights Reserved."]})})]})});function S(e){let{children:t}=e;return(0,a.jsx)("html",{lang:"en",children:(0,a.jsxs)("body",{children:[(0,a.jsx)(k,{}),(0,a.jsx)(z,{children:t}),(0,a.jsx)(C.x7,{richColors:!0}),(0,a.jsx)(L,{})]})})}},23:function(e,t,r){"use strict";r.d(t,{x:function(){return o}});var a=r(7437),s=r(2265),l=r(8200),n=r(9354);let o=s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e;return(0,a.jsxs)(l.fC,{ref:t,className:(0,n.cn)("relative overflow-hidden",r),...o,children:[(0,a.jsx)(l.l_,{className:"h-full w-full rounded-[inherit]",children:s}),(0,a.jsx)(i,{}),(0,a.jsx)(l.Ns,{})]})});o.displayName=l.fC.displayName;let i=s.forwardRef((e,t)=>{let{className:r,orientation:s="vertical",...o}=e;return(0,a.jsx)(l.gb,{ref:t,orientation:s,className:(0,n.cn)("flex touch-none select-none transition-colors","vertical"===s&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===s&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",r),...o,children:(0,a.jsx)(l.q4,{className:"relative flex-1 rounded-full bg-zinc-200 dark:bg-zinc-800"})})});i.displayName=l.gb.displayName},8378:function(e,t,r){"use strict";var a=r(8472),s=r(9930),l=r.n(s),n=r(3711);l().config(),console.log("http://localhost:8080","api");let o=a.Z.create({baseURL:"".concat("https://api.zynoflixott.com","/api"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.To)}});t.Z=o},6690:function(e,t,r){"use strict";function a(e){return"https://etubees.s3.us-east-1.amazonaws.com/thumbnail_ott/compressed/".concat(e)}r.d(t,{_:function(){return a}})},9779:function(e,t,r){"use strict";function a(e){e instanceof Date||console.log("publishedAt is not a Date object");let t=new Date(e),r=Math.floor((Date.now()-t.getTime())/1e3);return r<60?"".concat(r," sec ago"):r<3600?"".concat(Math.floor(r/60)," min ago"):r<86400?"".concat(Math.floor(r/3600)," hour ago"):r<2592e3?"".concat(Math.floor(r/86400)," day ago"):"".concat(Math.floor(r/2592e3)," month ago")}function s(e,t){if(e<0)throw Error("Negative values are not allowed.");let r=Math.round(60*e),a=Math.floor(r/3600),s=r%3600,l=Math.floor(s/60),n=s%60;if(t)return e<1?"".concat(r," second").concat(1!==r?"s":""):"".concat(Math.round(e)," min").concat(1!==Math.round(e)?"s":"");let o="";return a>0&&(o+="".concat(a," hour").concat(a>1?"s":""),(l>0||n>0)&&(o+=" ")),l>0&&(o+="".concat(l," min").concat(l>1?"s":""),n>0&&(o+=" ")),(n>0||""===o)&&(o+="".concat(n," second").concat(n>1?"s":"")),o}function l(e){let t=new Date(e);isNaN(t.getTime())&&console.log("isMembership",t),console.log("isMembership",t);let r=new Date().getTime()-t.getTime();console.log("isMembership",r);let a=r/864e5;return console.log("isMembership",a),a>=30}r.d(t,{Eb:function(){return l},iB:function(){return s},lE:function(){return a}})},3711:function(e,t,r){"use strict";r.d(t,{To:function(){return s},bg:function(){return n},g4:function(){return o},xS:function(){return a},yv:function(){return l}});let a=localStorage.getItem("userId"),s=localStorage.getItem("accessToken");localStorage.getItem("transactionId");let l=localStorage.getItem("userRole"),n=!localStorage.getItem("isLogin"),o=localStorage.getItem("userId")},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var a=r(4839),s=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}r(8378),r(3711)},3054:function(){}},function(e){e.O(0,[9141,8218,8472,744,1135,7776,6648,4868,231,8200,9553,6602,3124,2971,7023,1744],function(){return e(e.s=4650)}),_N_E=e.O()}]);