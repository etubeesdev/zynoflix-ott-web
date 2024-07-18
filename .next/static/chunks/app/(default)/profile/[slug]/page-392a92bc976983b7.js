(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5428],{6647:function(){},9943:function(e,t,r){Promise.resolve().then(r.bind(r,4598))},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var l=r(2265);/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,l.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:u="",children:c,iconNode:d,...f}=e;return(0,l.createElement)("svg",{ref:t,...s,width:n,height:n,stroke:r,strokeWidth:i?24*Number(a)/Number(n):a,className:o("lucide",u),...f},[...d.map(e=>{let[t,r]=e;return(0,l.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),i=(e,t)=>{let r=(0,l.forwardRef)((r,s)=>{let{className:i,...u}=r;return(0,l.createElement)(a,{ref:s,iconNode:t,className:o("lucide-".concat(n(e)),i),...u})});return r.displayName="".concat(e),r}},8954:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,r(8030).Z)("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]])},7818:function(e,t,r){"use strict";r.d(t,{default:function(){return n.a}});var l=r(551),n=r.n(l)},551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let l=r(9920);r(7437),r(2265);let n=l._(r(148));function o(e,t){var r;let l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let o={...l,...t};return(0,n.default)({...o,modules:null==(r=o.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let l=r(5592);function n(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return r}},148:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let l=r(7437),n=r(2265),o=r(912),s=r(1481);function a(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},r=(0,n.lazy)(()=>t.loader().then(a)),u=t.loading;function c(e){let a=u?(0,l.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(s.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(r,{...e})]}):(0,l.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(r,{...e})});return(0,l.jsx)(n.Suspense,{fallback:a,children:i})}return c.displayName="LoadableComponent",c}},1481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return o}});let l=r(7437),n=r(8512);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,n.getExpectedRequestStore)("next/dynamic css"),o=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));o.push(...t)}}return 0===o.length?null:(0,l.jsx)(l.Fragment,{children:o.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},4598:function(e,t,r){"use strict";r.r(t);var l=r(7437),n=r(6942),o=r(8378),s=r(3711),a=r(8954),i=r(7818);r(2265);var u=r(9555);let c=(0,i.default)(()=>Promise.all([r.e(7776),r.e(6648),r.e(231),r.e(7309)]).then(r.bind(r,7309)),{loadableGenerated:{webpack:()=>[7309]}}),d=(0,i.default)(()=>Promise.all([r.e(7776),r.e(6648),r.e(231),r.e(9553),r.e(3236),r.e(596),r.e(365),r.e(3354)]).then(r.bind(r,365)),{loadableGenerated:{webpack:()=>[365]}});t.default=()=>{let{data:e,isLoading:t,error:r,refetch:i}=(0,u.useQuery)("user",async()=>(await o.Z.get("/auth/user/".concat(s.xS))).data.user),{data:f,isLoading:m,error:x}=(0,u.useQuery)("video",async()=>(await o.Z.get("/profile/video")).data.video),{data:h,isLoading:g,refetch:p}=(0,u.useQuery)(["follower",s.xS],async()=>(await o.Z.get("/followers")).data);return t?(0,l.jsx)(n.Z,{className:"h-screen flex items-center justify-center"}):(0,l.jsx)("main",{children:"production"===s.yv?(0,l.jsx)("div",{className:"",children:(0,l.jsx)(d,{})}):(0,l.jsx)("section",{className:"w-full overflow-hidden dark:bg-gray-900",children:(0,l.jsxs)("div",{className:"w-full mx-auto",children:[(0,l.jsx)("img",{src:null==e?void 0:e.backgroundPic,alt:"User Cover",className:"w-full xl:h-[20rem] object-cover lg:h-[22rem] md:h-[16rem] sm:h-[13rem] xs:h-[9.5rem]"}),(0,l.jsx)("div",{className:"w-full flex  justify-start pl-12",children:(0,l.jsx)("div",{className:"relative",children:(0,l.jsx)("img",{src:e.profilePic,alt:"User Profile",className:"rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]"})})}),(0,l.jsxs)("div",{className:"xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("div",{className:"text-3xl text-gray-100 dark:text-gray-400",children:[(null==h?void 0:h.count)||0," Followers"]})}),(0,l.jsx)("h1",{className:"text-center text-white font-bold text-4xl",children:e.full_name}),(0,l.jsx)("p",{className:"w-full text-gray-400 text-md text-pretty sm:text-center xs:text-justify",children:e.description||"No description provided"})]}),(0,l.jsxs)("div",{className:"py-8 px-12",children:[(0,l.jsxs)("button",{className:"flex items-center bg-green-500 rounded-xl px-6 py-3 gap-3",children:[(0,l.jsx)(a.Z,{className:"w-6 h-6"}),"my Video"]}),(null==f?void 0:f.length)===0&&(0,l.jsx)("div",{className:"flex items-center justify-center text-white text-2xl font-bold mt-8",children:"No Videos Uploaded"}),(0,l.jsx)("div",{className:"grid pt-8 gap-6 grid-cols-5",children:(null==f?void 0:f.length)>0&&(null==f?void 0:f.map((e,t)=>(0,l.jsx)(c,{index:t,video:e},t)))})]})]})})})}},6942:function(e,t,r){"use strict";var l=r(7437),n=r(9354);r(2265),t.Z=e=>{let{className:t}=e;return(0,l.jsxs)("div",{role:"status",className:(0,n.cn)(t,""),children:[(0,l.jsxs)("svg",{"aria-hidden":"true",className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,l.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,l.jsx)("span",{className:"sr-only",children:"Loading..."})]})}},8378:function(e,t,r){"use strict";var l=r(8472),n=r(9930),o=r.n(n),s=r(3711);o().config(),console.log("http://localhost:8080","api");let a=l.Z.create({baseURL:"".concat("https://api.zynoflixott.com","/api"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.To)}});t.Z=a},3711:function(e,t,r){"use strict";r.d(t,{To:function(){return n},bg:function(){return s},g4:function(){return a},xS:function(){return l},yv:function(){return o}});let l=localStorage.getItem("userId"),n=localStorage.getItem("accessToken");localStorage.getItem("transactionId");let o=localStorage.getItem("userRole"),s=!localStorage.getItem("isLogin"),a=localStorage.getItem("userId")},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var l=r(4839),n=r(6164);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,l.W)(t))}r(8378),r(3711)}},function(e){e.O(0,[8218,8472,744,1135,9555,4868,2971,7023,1744],function(){return e(e.s=9943)}),_N_E=e.O()}]);