(()=>{var e={};e.id=303,e.ids=[303],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},80779:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>u,routeModule:()=>p,tree:()=>c}),t(87543),t(35866),t(32029);var s=t(23191),a=t(88716),o=t(37922),n=t.n(o),l=t(95231),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);t.d(r,i);let c=["",{children:["(auth)",{children:["signup",{children:["production",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,87543)),"/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(auth)/signup/production/page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,32029)),"/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/app/(auth)/signup/production/page.tsx"],d="/(auth)/signup/production/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/signup/production/page",pathname:"/signup/production",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},19672:(e,r,t)=>{Promise.resolve().then(t.bind(t,68696))},35047:(e,r,t)=>{"use strict";var s=t(77389);t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}}),t.o(s,"useSearchParams")&&t.d(r,{useSearchParams:function(){return s.useSearchParams}})},68696:(e,r,t)=>{"use strict";t.d(r,{default:()=>i});var s=t(10326),a=t(72018),o=t(35047),n=t(17577),l=t(85999);let i=()=>{let e=(0,o.useRouter)(),[r,t]=(0,n.useState)({name:"",founderName:"",about:"",email:"",contactNumber:"",password:"",logo:void 0}),[i,c]=(0,n.useState)({}),[u,d]=(0,n.useState)(!1),m=e=>{let{name:s,value:a,type:o,checked:n}=e.target;t({...r,[s]:"checkbox"===o?n:a})},p=()=>{let e={};return r.name||(e.name="Name is required"),r.email||(e.email="Email is required"),r.logo||(e.logo="Logo is required"),e},x=async s=>{s.preventDefault();let o=p();if(Object.keys(o).length>0){c(o);return}d(!0);let n=new FormData;Object.keys(r).forEach(e=>{r[e]&&n.append(e,r[e])});try{let r=await a.Z.post("/auth/production/signup",n,{headers:{"Content-Type":"multipart/form-data"}});console.log(r.status,"Network"),201===r.status?(localStorage.setItem("accessToken",r.data.accessToken),localStorage.setItem("userId",r.data.userId),l.Am.success("Company created successfully"),e.push("/")):l.Am.error("Error creating company"),t({name:"",founderName:"",about:"",email:"",contactNumber:"",password:"",logo:void 0}),c({})}catch(e){console.error("Error creating company:",e)}};return(0,s.jsxs)("form",{onSubmit:x,className:"max-w-3xl mx-auto",children:[(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"name",className:"block mb-2 font-bold",children:"Name of Company:"}),s.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Enter Company Name",value:r.name,onChange:m,className:"w-full px-3 py-2 border border-gray-300  bg-transparent rounded-xl focus:outline-none focus:border-blue-500"}),i.name&&s.jsx("p",{className:"text-red-500",children:i.name})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"founderName",className:"block mb-2 font-bold",children:"Founder Name:"}),s.jsx("input",{type:"text",id:"founderName",placeholder:"Enter Founder Name",name:"founderName",value:r.founderName,onChange:m,className:"w-full px-3 py-2 border border-gray-300 rounded-xl  bg-transparent  focus:outline-none focus:border-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"about",className:"block mb-2 font-bold",children:"Few Words About Your Company:"}),s.jsx("textarea",{placeholder:"Enter a few words about your company",rows:6,id:"about",name:"about",value:r.about,onChange:m,className:"w-full px-3 py-2 border border-gray-300 rounded-xl  bg-transparent  focus:outline-none focus:border-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"email",className:"block mb-2 font-bold",children:"Email ID:"}),s.jsx("input",{type:"email",placeholder:"Enter Email ID",id:"email",name:"email",value:r.email,onChange:m,className:"w-full px-3 py-2 border border-gray-300 rounded-xl  bg-transparent  focus:outline-none focus:border-blue-500"}),i.email&&s.jsx("p",{className:"text-red-500",children:i.email})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"contactNumber",className:"block mb-2 font-bold",children:"Contact Number:"}),s.jsx("input",{type:"tel",id:"contactNumber",name:"contactNumber",value:r.contactNumber,placeholder:"Enter Contact Number",onChange:m,className:"w-full px-3 py-2 border border-gray-300 rounded-xl  bg-transparent  focus:outline-none focus:border-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"password",className:"block mb-2 font-bold",children:"Password:"}),s.jsx("input",{placeholder:"Enter Password",type:"password",id:"password",name:"password",value:r.password,onChange:m,className:"w-full px-3 py-2 border border-gray-300 rounded-xl  bg-transparent  focus:outline-none focus:border-blue-500"})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{htmlFor:"logo",className:"block mb-2 font-bold",children:"Logo:"}),s.jsx("input",{type:"file",placeholder:"Upload Logo",id:"logo",name:"logo",onChange:e=>{e.target.files&&t({...r,logo:e.target.files[0]})},className:"w-full px-3 py-2 border border-gray-300 rounded-xl   bg-transparent  focus:outline-none focus:border-blue-500"}),r.logo&&s.jsx("div",{className:"flex items-center justify-center",children:s.jsx("img",{src:r.logo?URL.createObjectURL(r.logo):"",className:"w-44 h-44 object-cover border rounded-2xl mt-2"})}),i.logo&&s.jsx("p",{className:"text-red-500",children:i.logo})]}),s.jsx("button",{type:"submit",disabled:u,className:"w-full py-2 px-4 bg-green-500 text-black font-bold rounded-xl hover:bg-green-500",children:"Submit"})]})}},87543:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(19510),a=t(68570);let o=(0,a.createProxy)(String.raw`/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/components/form/production-form.tsx`),{__esModule:n,$$typeof:l}=o;o.default;let i=(0,a.createProxy)(String.raw`/Users/gokulakrishnanr/Documents/zynoflix_ott/ott-web/src/components/form/production-form.tsx#default`);t(71159);let c=()=>s.jsx("div",{children:(0,s.jsxs)("div",{className:"min-h-screen bg-black relative text-gray-900 flex justify-center",children:[s.jsx("div",{className:"hero-bg-gradient "}),s.jsx("div",{className:"max-w-screen-xl z-50  m-0 sm:m-10 flex justify-center flex-1",children:s.jsx("div",{className:"lg:w-1/2 xl:w-5/12 text-white rounded-3xl p-6 sm:p-12",children:(0,s.jsxs)("div",{className:"mt-12 flex flex-col items-center",children:[s.jsx("h1",{className:"text-2xl xl:text-3xl font-extrabold text-white",children:"Sign up"}),s.jsx("div",{className:"w-full mt-8",children:(0,s.jsxs)("div",{className:"mx-auto max-w-xl",children:[s.jsx(i,{}),(0,s.jsxs)("p",{className:"mt-6 text-xs text-gray-600 text-center",children:["I agree to abide by templatana",s.jsx("a",{href:"#",className:"border-b border-gray-500 border-dotted",children:"Terms of Service"}),"and its",s.jsx("a",{href:"#",className:"border-b border-gray-500 border-dotted",children:"Privacy Policy"})]}),(0,s.jsxs)("div",{className:"flex mt-3 text-sm justify-center text-gray-600 text-center items-center",children:[s.jsx("span",{children:"Already have an account?"}),s.jsx("a",{href:"/login",children:s.jsx("span",{className:"ml-2 text-blue-500",children:"Login"})})]})]})})]})})})]})})},73881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,395,621,789],()=>t(80779));module.exports=s})();