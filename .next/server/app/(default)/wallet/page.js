(()=>{var e={};e.id=315,e.ids=[315],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},74351:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(50198),t(3588),t(69778),t(35866),t(32029);var l=t(23191),r=t(88716),a=t(37922),i=t.n(a),n=t(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(s,o);let c=["",{children:["(default)",{children:["wallet",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,50198)),"/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(default)/wallet/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3588)),"/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(default)/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,69778)),"/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(default)/loading.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,32029)),"/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(default)/wallet/page.tsx"],u="/(default)/wallet/page",x={require:t,loadChunk:()=>Promise.resolve()},m=new l.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(default)/wallet/page",pathname:"/wallet",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},39389:(e,s,t)=>{Promise.resolve().then(t.bind(t,85673))},60199:(e,s,t)=>{Promise.resolve().then(t.bind(t,79208))},35303:()=>{},26670:(e,s)=>{"use strict";function t(){return null}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return t}}),("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},85673:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var l=t(10326),r=t(17577),a=t.n(r),i=t(2994);function n({children:e}){let[s]=a().useState(()=>new i.QueryClient);return l.jsx("div",{className:"bg-body text-white",children:l.jsx(i.QueryClientProvider,{client:s,children:e})})}},79208:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var l=t(10326),r=t(17577),a=t(26670),i=t.n(a),n=t(85999);let o=()=>{let[e,s]=(0,r.useState)(0);return(0,l.jsxs)("div",{className:"min-h-screen h-screen flex items-center justify-center  py-8 px-4",children:[l.jsx(i(),{children:l.jsx("title",{children:"Wallet"})}),(0,l.jsxs)("div",{className:"max-w-md mx-auto bg-gray-800 p-6 rounded-3xl",children:[l.jsx("h1",{className:"text-2xl font-bold mb-4",children:"WALLET"}),(0,l.jsxs)("div",{className:"mb-4 flex items-center gap-4",children:[l.jsx("span",{className:"block text-white text-xl font-semibold",children:"EARNINGS:"}),(0,l.jsxs)("span",{className:"block text-gray-100 text-xl font-semibold",children:[e.toFixed(2)," USD"]})]}),l.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",onClick:()=>{n.Am.success("Withdrawal request sent successfully, please wait for approval")},children:"WITHDRAW"}),(0,l.jsxs)("div",{className:"",children:[l.jsx("span",{}),l.jsx("p",{className:"mt-4 text-gray-100",children:"1000 views = 1 USD"})]}),l.jsx("p",{className:"mt-2 text-gray-100",children:"Upload 10 short films on Zynoflix OTT and get an opportunity for the big screen."}),l.jsx(c,{})]})]})},c=()=>(0,l.jsxs)("div",{className:"container mx-auto",children:[l.jsx("div",{className:"mb-6",children:(0,l.jsxs)("div",{className:"row gy-5",children:[l.jsx("div",{className:"col-lg-7",children:(0,l.jsxs)("div",{className:"section-title mb-0",children:[l.jsx("h2",{className:"text-2xl font-bold",children:"Why You Choose IKO is worth buying today?"}),(0,l.jsxs)("p",{className:"text-gray-600",children:["Use the window for the planned investment and calculate the estimated ",l.jsx("br",{})," Iko price and your monthly dividends at a fixed time"]})]})}),l.jsx("div",{className:"col-lg-5 text-center",children:l.jsx("img",{alt:"img",loading:"lazy",width:"256",height:"256",className:"mx-auto",src:"/_next/static/media/why_1-1.0b2942d6.png"})})]})}),(0,l.jsxs)("div",{className:"row gy-5 justify-between",children:[(0,l.jsxs)("div",{className:"col-lg-5",children:[(0,l.jsxs)("div",{className:"wcu-amount-quantity mb-6",children:[(0,l.jsxs)("div",{className:"amount mb-4",children:[l.jsx("h5",{className:"font-semibold",children:"Amount invested"}),l.jsx("p",{className:"text-xl",children:"$50,000"})]}),(0,l.jsxs)("div",{className:"quantity",children:[l.jsx("h5",{className:"font-semibold",children:"Quantity Iko"}),l.jsx("p",{className:"text-xl",children:"500,000 Iko"})]})]}),(0,l.jsxs)("ul",{className:"space-y-4",children:[(0,l.jsxs)("li",{children:[l.jsx("h6",{className:"font-semibold",children:"Expected FOX price"}),l.jsx("p",{children:"0.36 $"}),l.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5",children:l.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:"70%"}})}),(0,l.jsxs)("div",{className:"flex justify-between text-sm",children:[l.jsx("span",{children:"$100"}),l.jsx("span",{children:"$100,000"})]})]}),(0,l.jsxs)("li",{children:[l.jsx("h6",{className:"font-semibold",children:"Expected FOX price"}),l.jsx("p",{children:"0.36 $"}),l.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5",children:l.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:"80%"}})}),(0,l.jsxs)("div",{className:"flex justify-between text-sm",children:[l.jsx("span",{children:"$100"}),l.jsx("span",{children:"$100,000"})]})]}),(0,l.jsxs)("li",{children:[l.jsx("h6",{className:"font-semibold",children:"Calculation time"}),l.jsx("p",{children:"Q3 2020"}),l.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5",children:l.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:"40%"}})}),(0,l.jsxs)("div",{className:"flex justify-between text-sm",children:[l.jsx("span",{children:"$100"}),l.jsx("span",{children:"$100,000"})]})]})]})]}),l.jsx("div",{className:"col-lg-6",children:(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{className:"feature-card p-4 bg-white shadow-md rounded-lg",children:[(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[l.jsx("img",{alt:"img",loading:"lazy",width:"40",height:"40",className:"mr-4",src:"/_next/static/media/feature-icon1-1.b96f1c37.svg"}),l.jsx("h4",{className:"text-lg font-semibold",children:"The expected value of your investment"})]}),l.jsx("p",{className:"text-xl",children:"$180,000"}),l.jsx("p",{children:"ROI = 360%"})]}),(0,l.jsxs)("div",{className:"feature-card p-4 bg-white shadow-md rounded-lg",children:[(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[l.jsx("img",{alt:"img",loading:"lazy",width:"36",height:"36",className:"mr-4",src:"/_next/static/media/feature-icon1-2.96d30118.svg"}),l.jsx("h4",{className:"text-lg font-semibold",children:"Expected monthly dividend"})]}),l.jsx("p",{className:"text-xl",children:"3600 FOX = $1296"})]}),(0,l.jsxs)("div",{className:"feature-card p-4 bg-white shadow-md rounded-lg",children:[(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[l.jsx("img",{alt:"img",loading:"lazy",width:"40",height:"40",className:"mr-4",src:"/_next/static/media/feature-icon1-3.870c508b.svg"}),l.jsx("h4",{className:"text-lg font-semibold",children:"Masternode bonus"})]}),l.jsx("p",{className:"text-xl",children:"$180,000"}),l.jsx("p",{children:"ROI = 360%"})]})]})})]})]})},3588:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});var l=t(68570);let r=(0,l.createProxy)(String.raw`/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(default)/layout.tsx`),{__esModule:a,$$typeof:i}=r;r.default;let n=(0,l.createProxy)(String.raw`/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(default)/layout.tsx#default`)},69778:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var l=t(19510),r=t(55761),a=t(62386),i=t(29712),n=t(16636);t.n(n)().config(),console.log("http://localhost:8080","api"),i.Z.create({baseURL:"https://api.zynoflixott.com/api",headers:{"Content-Type":"application/json",Authorization:"Bearer null"}}),t(71159);let o=({className:e})=>(0,l.jsxs)("div",{role:"status",className:function(...e){return(0,a.m6)((0,r.W)(e))}(e,""),children:[(0,l.jsxs)("svg",{"aria-hidden":"true",className:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),l.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),l.jsx("span",{className:"sr-only",children:"Loading..."})]}),c=()=>l.jsx("div",{className:"text-white",children:l.jsx(o,{className:"flex items-center justify-center mx-auto h-screen w-full"})})},50198:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});var l=t(68570);let r=(0,l.createProxy)(String.raw`/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(default)/wallet/page.tsx`),{__esModule:a,$$typeof:i}=r;r.default;let n=(0,l.createProxy)(String.raw`/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(default)/wallet/page.tsx#default`)},73881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var l=t(66621);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,l.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),l=s.X(0,[948,395,621,170,789],()=>t(74351));module.exports=l})();