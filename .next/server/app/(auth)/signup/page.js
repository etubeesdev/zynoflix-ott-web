(()=>{var e={};e.id=129,e.ids=[129],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},69313:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),t(72067),t(35866),t(32029);var r=t(23191),a=t(88716),o=t(37922),n=t.n(o),i=t(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(s,l);let c=["",{children:["(auth)",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,72067)),"/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(auth)/signup/page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,32029)),"/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(auth)/signup/page.tsx"],u="/(auth)/signup/page",m={require:t,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},92714:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,79404,23)),Promise.resolve().then(t.bind(t,89554))},35047:(e,s,t)=>{"use strict";var r=t(77389);t.o(r,"useRouter")&&t.d(s,{useRouter:function(){return r.useRouter}}),t.o(r,"useSearchParams")&&t.d(s,{useSearchParams:function(){return r.useSearchParams}})},89554:(e,s,t)=>{"use strict";t.d(s,{default:()=>l});var r=t(10326),a=t(72018),o=t(35047),n=t(17577),i=t(85999);let l=({mode:e})=>{(0,o.useRouter)();let s={full_name:"signup"===e?"":void 0,email:"",password:"",confirmPassword:"signup"===e?"":void 0,contact:"signup"===e?"":void 0},[t,l]=(0,n.useState)(s),[c,d]=(0,n.useState)({full_name:"",email:"",password:"",confirmPassword:"",contact:""}),[u,m]=(0,n.useState)(!1);(0,n.useEffect)(()=>{l(s)},[e]);let x=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)?"":"Invalid email address",p=e=>e.length>=6?"":"Password must be at least 6 characters",f=(e,s)=>e===s?"":"Passwords do not match",h=e=>e&&/^\d{10}$/.test(e)?"":"Invalid phone number",g=e=>{let{name:s,value:r}=e.target;l({...t,[s]:r})},w=async s=>{s.preventDefault();let r=x(t.email),o=p(t.password),n="signup"===e?f(t.password,t.confirmPassword):"",l="signup"===e?h(t.contact):"";if(r||o||n||l){d({full_name:"",email:r,password:o,confirmPassword:n,contact:l});return}d({email:"",password:"",confirmPassword:"",contact:"",full_name:""}),m(!0);try{let s=await a.Z.post(`/auth/${e}`,t);if(console.log(s.data),401===s.data.code){i.Am.error("Invalid password provided for login");return}if("User already exists"===s.data.error){i.Am.error("User already exists with the provided email so please login instead");return}if(console.log(s.data.errro),"User not found"===s.data.error){i.Am.error("User not found or invalid password provided for login");return}try{localStorage.setItem("accessToken",s.data.accessToken),localStorage.setItem("userId",s.data.user._id),localStorage.setItem("userRole",s.data.isProduction?"production":"user"),localStorage.setItem("isLogin","true")}catch(e){i.Am.error("Failed to save access token to local storage")}i.Am.success(`${"login"===e?"Login":"Signup"} form submitted`),window.location.href="/"}catch(e){console.error("Submission error",e),i.Am.error("Failed to submit form please try again")}finally{m(!1)}};return r.jsx("div",{className:"w-full text-white max-w-md mx-auto",children:(0,r.jsxs)("form",{onSubmit:w,noValidate:!0,children:["signup"===e&&(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("input",{className:`w-full px-8 py-4 rounded-lg font-medium  border-2 bg-transparent ${c.full_name?"border-red-500":"border-gray-200"} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`,type:"text",name:"full_name",value:t.full_name,onChange:g,placeholder:"Full Name"}),c.full_name&&r.jsx("p",{className:"text-red-500 text-xs mt-2",children:c.full_name})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("input",{className:`w-full px-8 py-4 rounded-lg font-medium  bg-transparent  border-2 ${c.email?"border-red-500":"border-gray-200"} text-sm focus:outline-none `,type:"email",name:"email",value:t.email,onChange:g,placeholder:"Email"}),c.email&&r.jsx("p",{className:"text-red-500 text-xs mt-2",children:c.email})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("input",{className:`w-full px-8 py-4 rounded-lg font-medium bg-transparent  border-2 ${c.password?"border-red-500":"border-gray-200"}  text-sm focus:outline-none  mt-5`,type:"password",name:"password",value:t.password,onChange:g,placeholder:"Password"}),c.password&&r.jsx("p",{className:"text-red-500 text-xs mt-2",children:c.password})]}),"signup"===e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("input",{className:`w-full px-8 py-4 rounded-lg font-medium  border-2 bg-transparent ${c.confirmPassword?"border-red-500":"border-gray-200"}  text-sm focus:outline-none  mt-5`,type:"password",name:"confirmPassword",value:t.confirmPassword,onChange:g,placeholder:"Confirm Password"}),c.confirmPassword&&r.jsx("p",{className:"text-red-500 text-xs mt-2",children:c.confirmPassword})]}),(0,r.jsxs)("div",{className:"mb-4",children:[r.jsx("input",{className:`w-full px-8 py-4 rounded-lg font-medium  border-2 bg-transparent ${c.contact?"border-red-500":"border-gray-200"}  text-sm focus:outline-none  mt-5`,type:"tel",name:"contact",value:t.contact,onChange:g,placeholder:"Phone Number"}),c.contact&&r.jsx("p",{className:"text-red-500 text-xs mt-2",children:c.contact})]})]}),r.jsx("button",{className:"mt-5 tracking-wide font-semibold bg-green-500 text-black w-full py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none",type:"submit",disabled:u,children:u?(0,r.jsxs)("svg",{className:"w-6 h-6 animate-spin",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0l4 4-4 4V5a7 7 0 100 14v-3l4 4-4 4v-2a8 8 0 01-8-8z"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{className:"w-6 h-6 -ml-2",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),r.jsx("circle",{cx:"8.5",cy:7,r:4}),r.jsx("path",{d:"M20 8v6M23 11h-6"})]}),r.jsx("span",{className:"ml-3",children:"login"===e?"Login":"Sign Up"})]})})]})})}},670:(e,s,t)=>{"use strict";let{createProxy:r}=t(68570);e.exports=r("/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/node_modules/next/dist/client/link.js")},72067:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});var r=t(19510),a=t(39185),o=t(670),n=t.n(o);t(71159);let i=()=>r.jsx("div",{className:"",children:(0,r.jsxs)("div",{className:"min-h-screen bg-black text-gray-900 flex justify-center relative",children:[r.jsx("div",{className:"hero-bg-gradient "}),r.jsx("div",{className:"max-w-screen-xl z-50 m-0 sm:m-10 rounded-3xl flex justify-center flex-1 ",children:r.jsx("div",{className:"lg:w-1/2 xl:w-5/12 p-6  rounded-3xl  sm:p-12",children:(0,r.jsxs)("div",{className:"mt-12 flex flex-col items-center",children:[r.jsx("h1",{className:"text-2xl xl:text-3xl text-white font-extrabold",children:"Sign up"}),(0,r.jsxs)("div",{className:"w-full flex-1 mt-8",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("button",{className:"w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline",children:[r.jsx("div",{className:" p-2 rounded-full",children:(0,r.jsxs)("svg",{className:"w-4",viewBox:"0 0 533.5 544.3",children:[r.jsx("path",{d:"M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z",fill:"#4285f4"}),r.jsx("path",{d:"M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z",fill:"#34a853"}),r.jsx("path",{d:"M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z",fill:"#fbbc04"}),r.jsx("path",{d:"M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z",fill:"#ea4335"})]})}),r.jsx("span",{className:"ml-4",children:"Sign Up with Google"})]}),r.jsx(n(),{href:"/signup/production",className:"w-full mt-4 max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline",children:r.jsx("span",{className:"ml-4",children:"Production Company Signup"})})]}),r.jsx("div",{className:"my-12 text-gray-100 text-center",children:r.jsx("div",{className:"leading-none px-2 inline-block text-sm text-gray-100 tracking-wide font-medium  transform translate-y-1/2",children:"Or sign up with e-mail"})}),(0,r.jsxs)("div",{className:"mx-auto max-w-xs",children:[r.jsx(a.ZP,{mode:"signup"}),(0,r.jsxs)("p",{className:"mt-6 text-xs text-gray-100 text-center",children:["I agree to abide by templatanas",r.jsx("a",{href:"#",className:"border-b border-gray-500 border-dotted",children:"Terms of Service"}),"and its",r.jsx("a",{href:"#",className:"border-b border-gray-500 border-dotted",children:"Privacy Policy"})]})]}),(0,r.jsxs)("div",{className:"flex mt-3 text-sm justify-center text-gray-100 text-center items-center",children:[r.jsx("span",{children:"already Have an account ? "}),r.jsx("a",{href:"/login",className:"text-indigo-400 ml-2",children:"Login"})]})]})]})})})]})})},39185:(e,s,t)=>{"use strict";t.d(s,{ZP:()=>i});var r=t(68570);let a=(0,r.createProxy)(String.raw`/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/components/form/signup-form.tsx`),{__esModule:o,$$typeof:n}=a;a.default;let i=(0,r.createProxy)(String.raw`/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/components/form/signup-form.tsx#default`)},73881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[948,635,621,789],()=>t(69313));module.exports=r})();