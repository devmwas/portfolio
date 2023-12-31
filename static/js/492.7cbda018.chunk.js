"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[492],{6492:(e,s,a)=>{a.r(s),a.d(s,{default:()=>v});var t=a(3955),l=a(9891),i=a(4294),n=a(2791),o=a(4164),r=a(9823),m=a(7530),d=a(3240),c=a(2736),u=a(184);const h=function(e){let{children:s,isMessageOpen:a}=e;const t=(0,n.useRef)(null),l=(0,d._)();return(0,n.useEffect)((()=>{a&&l.start("middle")}),[a]),(0,u.jsx)(c.E.div,{ref:t,initial:"down",animate:l,exit:"up",variants:{down:{y:"100vh"},middle:{y:"20px"},up:{y:"-100vh"}},transition:{duration:.5},children:s})};const v=function(e){let{isMessageOpen:s,setIsMessageOpen:a,setSent:d}=e;const[c,v]=(0,n.useState)({name:void 0,email:void 0,subject:void 0,message:void 0}),[g,j]=(0,n.useState)(!1),[x,b]=(0,n.useState)(!1),[p,f]=(0,n.useState)(!1),[C,E]=(0,n.useState)(!1),[P,_]=(0,n.useState)("mt-20"),[M,S]=(0,n.useState)(!1),[A,Z]=(0,n.useState)("Send Message"),T=["Job","Project","Contract","Partnership/Collaboration","Interview","Consultation","Meeting","Internship","Other"];(0,n.useEffect)((()=>{void 0!==c.name&&(""===c.name.trim()?j(!0):j(!1))}),[c.name]),(0,n.useEffect)((()=>{void 0!==c.email&&(z(c.email.trim())?b(!1):b(!0))}),[c.email]),(0,n.useEffect)((()=>{void 0!==c.subject&&(""===c.subject.trim()?f(!0):f(!1))}),[c.subject]),(0,n.useEffect)((()=>{void 0!==c.message&&(""===c.message.trim()?E(!0):E(!1))}),[c.message]);const I=e=>{v((s=>({...s,[e.target.name]:e.target.value})))},w=()=>{console.log("Message TextField is in Focus"),_("mt-0px")},z=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),R=()=>!!g||(!!x||(!!p||!!C)),N=()=>{if(!R()){Z("Sending...");const e={name:c.name.trim(),email:c.email.trim(),subject:c.subject.trim(),message:c.message.trim()},{REACT_APP_SERVICE_ID:s,REACT_APP_TEMPLATE_ID:t,REACT_APP_API_KEY:l}={REACT_APP_API_KEY:"7eCZNeRns-eBVEZAe",REACT_APP_SERVICE_ID:"service_rhaf2b9",REACT_APP_TEMPLATE_ID:"template_693sejm"};m.ZP.send(s,t,e,l).then((e=>{200==e.status?d(!0):d(!1),Z("Send Message"),a(!1)}),(e=>{d(!1),Z("Send Message"),a(!1)}))}};return s?(0,o.createPortal)((0,u.jsx)("div",{className:"fixed top-0 left-0 right-0 bottom-0 opacity-100 z-50",children:(0,u.jsx)(h,{isMessageOpen:s,setIsMessageOpen:a,children:(0,u.jsxs)("div",{className:"bg-white ".concat(P," md:mt-20 opacity-100 space-y-4 p-2 sm:p-4 m-2 sm:mx-auto"),style:{maxWidth:"500px",borderRadius:"2%",backgroundImage:"linear-gradient(to bottom right, white, #eee, white)"},children:[(0,u.jsxs)("div",{className:"flex justify-between",children:[(0,u.jsx)("div",{className:"text-blue-400 font-bold",children:"Send Me a Message"}),M?(0,u.jsx)("div",{className:"bg cursor-pointer",onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:(0,u.jsx)(r.Z,{sx:{color:"red"},onClick:()=>{a(!1),S(!1)}})}):(0,u.jsx)("div",{className:"cursor-pointer",onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:(0,u.jsx)(r.Z,{onClick:()=>{a(!1),S(!1)}})})]}),(0,u.jsx)("div",{children:g?(0,u.jsx)(t.Z,{label:"Your Name",fullWidth:!0,size:"small",name:"name",error:!0,helperText:"Please provide a valid name.",value:c.name,onChange:I}):(0,u.jsx)(t.Z,{label:"Name",fullWidth:!0,size:"small",name:"name",value:c.name,onChange:I})}),(0,u.jsx)("div",{children:x?(0,u.jsx)(t.Z,{label:"Email",fullWidth:!0,size:"small",name:"email",error:!0,helperText:"Please provide a valid email.",value:c.email,onChange:I}):(0,u.jsx)(t.Z,{label:"Email",fullWidth:!0,size:"small",name:"email",value:c.email,onChange:I})}),(0,u.jsx)("div",{children:p?(0,u.jsx)(t.Z,{label:"Subject",select:!0,size:"small",fullWidth:!0,name:"subject",error:!0,helperText:"Please provide a valid subject.",onChange:I,value:c.subject,children:T.map(((e,s)=>(0,u.jsx)(l.Z,{value:e,children:e},s)))}):(0,u.jsx)(t.Z,{label:"Subject",select:!0,size:"small",fullWidth:!0,name:"subject",onChange:I,value:c.subject,children:T.map(((e,s)=>(0,u.jsx)(l.Z,{value:e,children:e},s)))})}),(0,u.jsx)("div",{children:C?(0,u.jsx)(t.Z,{label:"Message",multiline:!0,name:"message",error:!0,helperText:"Please provide a valid message.",onFocus:w,value:c.message,onChange:I,rows:4,fullWidth:!0,size:"small"}):(0,u.jsx)(t.Z,{label:"Message",multiline:!0,name:"message",onFocus:w,value:c.message,onChange:I,rows:4,fullWidth:!0,size:"small"})}),(0,u.jsx)("div",{className:"text-center",children:R()||void 0===c.name||void 0===c.email||void 0===c.subject||void 0===c.message?(0,u.jsx)(i.Z,{variant:"contained",disabled:!0,onClick:N,children:A}):(0,u.jsx)(i.Z,{variant:"contained",onClick:N,children:A})})]})})}),document.querySelector("#messagePortal")):null}}}]);
//# sourceMappingURL=492.7cbda018.chunk.js.map