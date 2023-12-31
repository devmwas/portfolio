"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[662],{2662:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var a=o(2791),n=o(9823),r=o(4164),i=o(4294),l=o(2251),c=o(3240),s=o(2736),d=o(184);const p=function(e){let{children:t,showExpandedMenu:o}=e;const n=(0,a.useRef)(null),r=(0,c._)();return(0,a.useEffect)((()=>{o&&r.start("show")}),[o]),(0,d.jsx)(s.E.div,{ref:n,initial:"hide",animate:r,variants:{show:{y:"0vh"},hide:{y:"-100vh"}},exit:"hide",transition:{duration:.5},children:t})};const u=function(e){let{setShowExpandedMenu:t,showExpandedMenu:o}=e;return o?(0,r.createPortal)((0,d.jsx)("div",{className:"flex flex-col justify-center",style:{position:"fixed",top:0,left:0,bottom:0,right:0,zIndex:100,opacity:1,backgroundColor:"black"},children:(0,d.jsx)("div",{children:(0,d.jsxs)(p,{setShowExpandedMenu:t,showExpandedMenu:o,children:[(0,d.jsx)("div",{className:"cursor-pointer text-center",onClick:()=>{t(!1)},children:(0,d.jsx)(n.Z,{fontSize:"large",color:"primary"})}),(0,d.jsxs)("div",{className:"text-center text-sky-400",children:[(0,d.jsx)("div",{className:"cursor-pointer",children:(0,d.jsx)("a",{href:"#home",onClick:()=>t(!1),children:"Home"})}),(0,d.jsx)("div",{className:"cursor-pointer",children:(0,d.jsx)("a",{href:"#about",onClick:()=>t(!1),children:"About"})}),(0,d.jsx)("div",{className:"cursor-pointer",children:(0,d.jsx)("a",{href:"#projects",onClick:()=>t(!1),children:"Projects"})}),(0,d.jsx)("div",{className:"cursor-pointer",children:(0,d.jsx)("a",{href:"#education",onClick:()=>t(!1),children:"Education"})}),(0,d.jsx)("div",{className:"cursor-pointer mt-2",style:{},children:(0,d.jsx)("a",{href:l,target:"blank",onClick:()=>t(!1),children:(0,d.jsx)(i.Z,{variant:"outlined",size:"small",children:"Resume"})})})]})]})})}),document.querySelector("#expandedMenuPortal")):null}},9823:(e,t,o)=>{var a=o(4836);t.Z=void 0;var n=a(o(5649)),r=o(184),i=(0,n.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=i},4294:(e,t,o)=>{o.d(t,{Z:()=>k});var a=o(3366),n=o(7462),r=o(2791),i=o(3733),l=o(5735),c=o(4419),s=o(2065),d=o(7630),p=o(1046),u=o(7119),h=o(4036),v=o(5878),x=o(1217);function m(e){return(0,x.Z)("MuiButton",e)}const b=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const g=r.createContext({});const f=r.createContext(void 0);var S=o(184);const z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),w=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,h.Z)(o.color))],t["size".concat((0,h.Z)(o.size))],t["".concat(o.variant,"Size").concat((0,h.Z)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((e=>{let{theme:t,ownerState:o}=e;var a,r;const i="light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[800],l="light"===t.palette.mode?t.palette.grey.A100:t.palette.grey[700];return(0,n.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:t.vars?"rgba(".concat(t.vars.palette.text.primaryChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat((t.vars||t).palette[o.color].main),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}),"&:active":(0,n.Z)({},"contained"===o.variant&&{boxShadow:(t.vars||t).shadows[8]}),["&.".concat(b.focusVisible)]:(0,n.Z)({},"contained"===o.variant&&{boxShadow:(t.vars||t).shadows[6]}),["&.".concat(b.disabled)]:(0,n.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat((t.vars||t).palette.action.disabledBackground)},"contained"===o.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:(t.vars||t).palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===o.variant&&"inherit"!==o.color&&{color:(t.vars||t).palette[o.color].main,border:t.vars?"1px solid rgba(".concat(t.vars.palette[o.color].mainChannel," / 0.5)"):"1px solid ".concat((0,s.Fq)(t.palette[o.color].main,.5))},"contained"===o.variant&&{color:t.vars?t.vars.palette.text.primary:null==(a=(r=t.palette).getContrastText)?void 0:a.call(r,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(b.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(b.disabled)]:{boxShadow:"none"}}})),C=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},y(t))})),Z=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},y(t))})),k=r.forwardRef((function(e,t){const o=r.useContext(g),s=r.useContext(f),d=(0,l.Z)(o,e),u=(0,p.Z)({props:d,name:"MuiButton"}),{children:v,color:x="primary",component:b="button",className:y,disabled:k=!1,disableElevation:I=!1,disableFocusRipple:j=!1,endIcon:R,focusVisibleClassName:E,fullWidth:M=!1,size:N="medium",startIcon:W,type:B,variant:F="text"}=u,P=(0,a.Z)(u,z),L=(0,n.Z)({},u,{color:x,component:b,disabled:k,disableElevation:I,disableFocusRipple:j,fullWidth:M,size:N,type:B,variant:F}),T=(e=>{const{color:t,disableElevation:o,fullWidth:a,size:r,variant:i,classes:l}=e,s={root:["root",i,"".concat(i).concat((0,h.Z)(t)),"size".concat((0,h.Z)(r)),"".concat(i,"Size").concat((0,h.Z)(r)),"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(r))],endIcon:["endIcon","iconSize".concat((0,h.Z)(r))]},d=(0,c.Z)(s,m,l);return(0,n.Z)({},l,d)})(L),O=W&&(0,S.jsx)(C,{className:T.startIcon,ownerState:L,children:W}),V=R&&(0,S.jsx)(Z,{className:T.endIcon,ownerState:L,children:R}),q=s||"";return(0,S.jsxs)(w,(0,n.Z)({ownerState:L,className:(0,i.Z)(o.className,T.root,y,q),component:b,disabled:k,focusRipple:!j,focusVisibleClassName:(0,i.Z)(T.focusVisible,E),ref:t,type:B},P,{classes:T,children:[O,v,V]}))}))},2251:(e,t,o)=>{e.exports=o.p+"static/media/MwangisFrontendResume.da71e0bc3ac9731d6843.pdf"}}]);
//# sourceMappingURL=662.f3a7487a.chunk.js.map