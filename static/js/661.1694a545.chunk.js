"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[661],{4661:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(2791);const o=[{title:"Know Thy Weather",description:"Want to know the weather data of virtually any city on earth? I worked with two APIs to enable just that. Forecast data is presented elegantly, something that's not common in many weather apps out there. Have a look! ",screenshot:"weather_screenshot.png",techStack:["React","MUI","Tailwind","Fetch"],githubLink:"https://github.com/devmwas/weather_app",liveLink:"https://devmwas.github.io/weather_app/"},{title:"Calculator App",description:"This application handles the basic arithmetic calculations. A calculator is one of the most interactive applications out there because it's made up of just buttons. I had a great opportunity to learn state management with Redux while building this app.",screenshot:"calculator_screenshot.png",techStack:["React","Redux","MUI","Tailwind"],githubLink:"https://github.com/devmwas/calculator_app",liveLink:"https://devmwas.github.io/calculator_app/"},{title:"Todos App",description:"This application helps you to track your chores or tasks in a neat way. You can add and remove your todos. It was a great experience to learn about the CRUD pattern in React.",screenshot:"todos_screenshot.png",techStack:["React","MUI","Tailwind"],githubLink:"https://github.com/devmwas/todos",liveLink:"https://devmwas.github.io/todos/"},{title:"Personal Portfolio",description:"This is my personal portfolio, which you're currently viewing. I have presented my information elegantly and in a user friendly manner, which you can attest to. You can check out the source code in the GitHub Link below.",screenshot:"portfolio_screenshot.png",techStack:["React","MUI","Tailwind","EmailJS"],githubLink:"https://github.com/devmwas/portfolio",liveLink:"https://devmwas.github.io/portfolio/"}];var a=i(5536),r=i(5758),s=i(9349),l=i(3240),c=i(2736),d=i(184);const h=function(e){let{children:t,letterSpacing:i,lineHeight:o,fontSize:a}=e;const r=(0,n.useRef)(null),h=(0,s.Y)(r,{once:!0}),p=(0,l._)();(0,n.useEffect)((()=>{h&&p.start("normalSpace")}),[h]);const u={spacedOut:{letterSpacing:"24px",width:"300%",marginLeft:"-100%"},normalSpace:{letterSpacing:i,width:"100%",marginLeft:"0%"}};return(0,d.jsx)(c.E.div,{ref:r,style:{lineHeight:o,fontSize:a,position:"absolute",top:0,zIndex:30},initial:"spacedOut",variants:u,animate:p,transition:{duration:1.5},children:t})};const p=function(e){let{children:t,offSet:i,direction:o}=e;const[a,r]=(0,n.useState)(!0),h=(0,l._)(),p=(0,l._)(),u=(0,n.useRef)(null),f=(0,s.Y)(u,{once:!0});(0,n.useEffect)((()=>{f&&(h.start("visible"),p.start("hidden"),setTimeout((()=>{r(!1)}),3e3))}),[f]);const x={visible:{left:"left"===o?"-50%":"0%",width:"150%"},hidden:{left:"left"===o?"-50%":"150%",width:"0%"}};return(0,d.jsx)("div",{ref:u,style:{position:"relative"},children:(0,d.jsxs)(c.E.div,{initial:"hidden",animate:h,variants:{hidden:{y:"20px"},visible:{y:"0px"}},transition:{duration:1,delay:0},children:[t,a?(0,d.jsx)(c.E.div,{style:{position:"absolute",top:0,left:"right"===o?"0%":"-50%",right:"0%",bottom:0,top:"".concat(i),width:"150%",height:"calc(100% - ".concat(i,")"),backgroundColor:"orange",borderRadius:"2%",overflow:"hidden",zIndex:1},initial:"visible",animate:p,variants:x,transition:{duration:1.5,ease:"backIn"}}):null]})})};const u=function(e){let{children:t}=e;const i=(0,n.useRef)(null),o=(0,l._)(),a=(0,s.Y)(i,{once:!0});return(0,n.useEffect)((()=>{a&&o.start("normal")}),[a]),(0,d.jsx)(c.E.div,{ref:i,style:{opacity:.6},initial:"hidden",animate:o,variants:{minimized:{transform:"scale(.5)"},normal:{transform:"scale(1)"}},exit:"squeezed",transition:{duration:3},whileHover:{opacity:1,duration:3},children:t})};const f=function(e){let{project:t,reverse:i}=e,n=i?"flex-row-reverse":"";return(0,d.jsxs)("div",{style:{position:"relative",borderRadius:"2%",overflow:"hidden"},className:"lg:flex ".concat(n," my-2 w-full lg:w-4/5 mx-auto lg:justify-center"),children:[(0,d.jsx)("div",{style:{maxWidth:"500px"},className:"w-full flex justify-center mx-auto overflow-hidden",children:(0,d.jsx)(u,{children:(0,d.jsx)("a",{href:"".concat(t.liveLink),target:"blank",children:(0,d.jsx)("img",{src:"".concat(t.screenshot),alt:"Project Screenshot"})})})}),(0,d.jsx)("div",{className:"flex flex-col relative justify-center bg-slate-300 mx-auto lg:w-1/2",style:{maxWidth:"500px"},children:(0,d.jsxs)("div",{style:{position:"relative"},children:[(0,d.jsx)(h,{letterSpacing:"0px",fontSize:"16px",lineHeight:"27px",children:(0,d.jsx)("div",{className:"hidden lg:flex m-2 justify-center ".concat(i?"lg:justify-start":"lg:justify-end"," font-bold font-mono"),children:t.title})}),(0,d.jsx)(h,{letterSpacing:"0px",fontSize:"16px",lineHeight:"24px",children:(0,d.jsx)("div",{className:"hidden sm:flex m-2 lg:hidden justify-center ".concat(i?"lg:justify-start":"lg:justify-end"," font-bold font-mono"),children:t.title})}),(0,d.jsx)(h,{letterSpacing:"0px",fontSize:"14px",lineHeight:"21px",children:(0,d.jsx)("div",{className:"flex sm:hidden m-2 justify-center ".concat(i?"lg:justify-start":"lg:justify-end"," font-bold font-mono"),children:t.title})}),(0,d.jsx)(p,{offSet:"0px",direction:i?"right":"left",children:(0,d.jsx)("div",{className:"text-center bg-slate-300 ".concat(i?"lg:text-start":"lg:-left-1/2 lg:text-end"," mx-auto p-2 font-mono text-xs md:text-sm hidden lg:block"),style:{position:"relative",borderRadius:"2%",marginTop:"35px",width:"150%"},children:t.description})}),(0,d.jsx)(p,{offSet:"0px",direction:"right",children:(0,d.jsx)("div",{className:"text-center font-mono mx-auto px-2 text-xs lg:hidden",style:{position:"relative",width:"100%",maxWidth:"500px",marginTop:"32px"},children:t.description})}),(0,d.jsx)("div",{className:"flex justify-center text-orange-600 ".concat(i?"lg:justify-start":"lg:justify-end"," space-x-2 m-2 font-mono text-xs"),children:t.techStack.map(((e,i)=>(0,d.jsxs)("div",{children:[e,i!==t.techStack.length-1?",":""," "]},i)))}),(0,d.jsxs)("div",{className:"flex relative justify-center ".concat(i?"lg:justify-start":"lg:justify-end","   space-x-2 mb-4 lg:mx-2"),children:[(0,d.jsx)("div",{children:(0,d.jsx)("a",{href:"".concat(t.liveLink),target:"blank",children:(0,d.jsx)(a.Z,{fontSize:"small"})})}),(0,d.jsx)("div",{children:(0,d.jsx)("a",{href:"".concat(t.githubLink),target:"blank",children:(0,d.jsx)(r.Z,{fontSize:"small"})})})]})]})})]})};var x=i(3928);const g=function(){let e=null;return(0,d.jsxs)("div",{id:"projects",className:"p-2 sm:p-0 flex flex-col text-black space-y-2 lg:w-full mx-auto mt-16",style:{backgroundImage:"linear-gradient(black, darkBlue, black)",position:"relative"},children:[(0,d.jsx)("div",{className:"-mt-16 bg-green-400 opacity-0",style:{position:"absolute"},id:"myprojects",children:"Projects"}),(0,d.jsx)(x.Z,{fontSize:"18px",lineHeight:"27px",letterSpacing:"3px",wordSpacing:"6px",left:"16px",children:(0,d.jsx)("div",{className:"text-sky-400 font-semibold hidden lg:block",children:"My Projects"})}),(0,d.jsx)(x.Z,{fontSize:"16px",lineHeight:"24px",letterSpacing:"2px",wordSpacing:"4px",left:"8px",children:(0,d.jsx)("div",{className:"text-sky-400 font-semibold hidden sm:block lg:hidden",children:"My Projects"})}),(0,d.jsx)(x.Z,{fontSize:"14px",lineHeight:"21px",letterSpacing:"1px",wordSpacing:"2px",left:"8px",children:(0,d.jsx)("div",{className:"text-sky-400 font-semibold sm:hidden",children:"My Projects"})}),(0,d.jsx)("div",{style:{marginTop:"54px"},children:o.map(((t,i)=>(e=i%2!==0,(0,d.jsx)(f,{project:t,reverse:e},i))))})]})}},3928:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(2791),o=i(9349),a=i(3240),r=i(2736),s=i(184);const l=function(e){let{children:t,fontSize:i,lineHeight:l,letterSpacing:c,wordSpacing:d,left:h,top:p}=e;const u=(0,n.useRef)(null),f=(0,o.Y)(u,{once:!0}),x=(0,a._)();(0,n.useEffect)((()=>{f&&x.start("normalSpace")}),[f]);const g={spacedOut:{fontSize:i,lineHeight:l,letterSpacing:"24px",wordSpacing:d,left:"-100px"},normalSpace:{fontSize:i,lineHeight:l,letterSpacing:c,wordSpacing:d,left:h}};return(0,s.jsx)(r.E.div,{ref:u,style:{position:"absolute",overflow:"hidden",top:p},variants:g,initial:"spacedOut",animate:x,transition:{duration:1.5},children:t})}},5758:(e,t,i)=>{var n=i(4836);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=r(t);if(i&&i.has(e))return i.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,i&&i.set(e,n)}(i(2791));var o=n(i(5649)),a=i(184);function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(r=function(e){return e?i:t})(e)}var s=(0,o.default)((0,a.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");t.Z=s},5536:(e,t,i)=>{var n=i(4836);t.Z=void 0;var o=n(i(5649)),a=i(184),r=(0,o.default)((0,a.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");t.Z=r},9349:(e,t,i)=>{i.d(t,{Y:()=>s});var n=i(2791),o=i(5956);const a={some:0,all:1};function r(e,t){let{root:i,margin:n,amount:r="some"}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=function(e,t,i){var n;if("string"===typeof e){let a=document;t&&((0,o.k)(Boolean(t.current),"Scope provided, but no element detected."),a=t.current),i?(null!==(n=i[e])&&void 0!==n||(i[e]=a.querySelectorAll(e)),e=i[e]):e=a.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e),l=new WeakMap,c=new IntersectionObserver((e=>{e.forEach((e=>{const i=l.get(e.target);if(e.isIntersecting!==Boolean(i))if(e.isIntersecting){const i=t(e);"function"===typeof i?l.set(e.target,i):c.unobserve(e.target)}else i&&(i(e),l.delete(e.target))}))}),{root:i,rootMargin:n,threshold:"number"===typeof r?r:a[r]});return s.forEach((e=>c.observe(e))),()=>c.disconnect()}function s(e){let{root:t,margin:i,amount:o,once:a=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const[s,l]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{if(!e.current||a&&s)return;const n={root:t&&t.current||void 0,margin:i,amount:o};return r(e.current,(()=>(l(!0),a?void 0:()=>l(!1))),n)}),[t,e,i,a]),s}}}]);
//# sourceMappingURL=661.1694a545.chunk.js.map