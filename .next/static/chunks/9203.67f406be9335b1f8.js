(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9203],{6647:function(){},291:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return l}});let l=n(9920)._(n(2265)).default.createContext(null)},1135:function(e,t,n){"use strict";n.r(t);var l=n(7437),r=n(8378),s=n(2265),o=n(9555),a=n(1880),c=n(3711),i=n(9354),d=n(6648),u=n(23),f=n(9779);let h=async e=>(await r.Z.get("/message/"+e)).data;t.default=()=>{let[e,t]=s.useState(""),{roomId:n,socket:r,isOpen:x}=(0,a.R)(),{data:m,isLoading:g,isError:p,refetch:v}=(0,o.useQuery)(["message",n],()=>h(n),{refetchInterval:5e3}),w=()=>{let l=c.xS;r.emit("send-message",{content:e,roomId:n,sender:l}),t(""),v(),v()};return g?(0,l.jsx)("div",{children:"Loading..."}):p?(0,l.jsx)("div",{children:"Error fetching messages"}):(0,l.jsxs)("div",{className:(0,i.cn)("flex-1 flex flex-col w-full p-6 relative bg-gray-900 rounded-3xl mx-6"),children:[0===m.length&&(0,l.jsx)("div",{className:"flex items-center justify-center absolute top-[40%] left-[45%]",children:(0,l.jsx)("p",{className:"text-white",children:"No messages yet"})}),(0,l.jsx)(u.x,{className:(0,i.cn)("w-full h-[75vh]  mb-4",x?"hidden":"w-full"),children:(0,l.jsx)("div",{className:"w-full",children:m&&(null==m?void 0:m.map((e,t)=>{var n;return(0,l.jsx)("div",{className:(0,i.cn)("col-end-8 p-3 rounded-lg",e.sender===c.xS?"col-start-6":"col-start-1"),children:(0,l.jsxs)("div",{className:(0,i.cn)("flex items-center gap-3",e.sender===c.xS?"flex-row-reverse":"flex-row"),children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[(0,l.jsx)("div",{className:"flex items-center gap-3",children:(0,l.jsx)(d.default,{className:"flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0",src:null==e?void 0:null===(n=e.userId)||void 0===n?void 0:n.profilePic,alt:"profile-pic",width:"30",height:"30"})}),(0,l.jsx)("div",{className:"relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl",children:(0,l.jsx)("div",{children:e.content})})]}),(0,l.jsx)("div",{className:"text-white",children:(0,l.jsx)("p",{children:(0,f.lE)(e.createdAt)})})]})},t)}))})}),(0,l.jsxs)("div",{className:(0,i.cn)("flex flex-row items-center h-16 rounded-xl bg-white w-full px-4",x?"lg:block hidden":"w-full lg:w-auto"),children:[(0,l.jsx)("div",{className:"flex-grow ml-4",children:(0,l.jsx)("div",{className:"relative w-full",children:(0,l.jsx)("input",{value:e,onKeyDown:e=>{"Enter"===e.key&&w()},onChange:e=>t(e.target.value),type:"text",className:"flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"})})}),(0,l.jsx)("div",{className:"ml-4",children:(0,l.jsxs)("button",{onClick:w,className:"flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0",children:[(0,l.jsx)("span",{children:"Send"}),(0,l.jsx)("span",{className:"ml-2",children:(0,l.jsx)("svg",{className:"w-4 h-4 transform rotate-45 -mt-px",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})})]})]})}},23:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var l=n(7437),r=n(2265),s=n(3663),o=n(9354);let a=r.forwardRef((e,t)=>{let{className:n,children:r,...a}=e;return(0,l.jsxs)(s.fC,{ref:t,className:(0,o.cn)("relative overflow-hidden",n),...a,children:[(0,l.jsx)(s.l_,{className:"h-full w-full rounded-[inherit]",children:r}),(0,l.jsx)(c,{}),(0,l.jsx)(s.Ns,{})]})});a.displayName=s.fC.displayName;let c=r.forwardRef((e,t)=>{let{className:n,orientation:r="vertical",...a}=e;return(0,l.jsx)(s.gb,{ref:t,orientation:r,className:(0,o.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...a,children:(0,l.jsx)(s.q4,{className:"relative flex-1 rounded-full bg-zinc-200 dark:bg-zinc-800"})})});c.displayName=s.gb.displayName},8378:function(e,t,n){"use strict";var l=n(8472),r=n(9930),s=n.n(r),o=n(3711);s().config(),console.log("http://localhost:8080","api");let a=l.Z.create({baseURL:"".concat("https://api.zynoflixott.com","/api"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.To)}});t.Z=a},9779:function(e,t,n){"use strict";function l(e){e instanceof Date||console.log("publishedAt is not a Date object");let t=new Date(e),n=Math.floor((Date.now()-t.getTime())/1e3);return n<60?"".concat(n," sec ago"):n<3600?"".concat(Math.floor(n/60)," min ago"):n<86400?"".concat(Math.floor(n/3600)," hour ago"):n<2592e3?"".concat(Math.floor(n/86400)," day ago"):"".concat(Math.floor(n/2592e3)," month ago")}function r(e,t){if(e<0)throw Error("Negative values are not allowed.");let n=Math.round(60*e),l=Math.floor(n/3600),r=n%3600,s=Math.floor(r/60),o=r%60;if(t)return e<1?"".concat(n," second").concat(1!==n?"s":""):"".concat(Math.round(e)," min").concat(1!==Math.round(e)?"s":"");let a="";return l>0&&(a+="".concat(l," hour").concat(l>1?"s":""),(s>0||o>0)&&(a+=" ")),s>0&&(a+="".concat(s," min").concat(s>1?"s":""),o>0&&(a+=" ")),(o>0||""===a)&&(a+="".concat(o," second").concat(o>1?"s":"")),a}function s(e){let t=new Date(e);isNaN(t.getTime())&&console.log("isMembership",t),console.log("isMembership",t);let n=new Date().getTime()-t.getTime();console.log("isMembership",n);let l=n/864e5;return console.log("isMembership",l),l>=30}n.d(t,{Eb:function(){return s},iB:function(){return r},lE:function(){return l}})},9354:function(e,t,n){"use strict";n.d(t,{cn:function(){return s}});var l=n(4839),r=n(6164);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,l.W)(t))}n(8378),n(3711)}}]);