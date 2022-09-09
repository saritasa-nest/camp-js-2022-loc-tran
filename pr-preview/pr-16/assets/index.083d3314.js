import{g as ae,a as Z,s as B,_ as p,r as l,u as le,b as U,L as fe,c as ie,j as n,d as T,e as he,f as wt,i as At,h as Lt,k as v,l as je,B as We,m as it,n as Ce,o as ct,p as Be,q as dt,t as Le,v as Tt,T as kt,S as Nt,M as xe,w as qe,A as $t,x as ze,y as Je,P as ve,F as ye,D as Te,z as ut,C as Ee,N as Mt,E as Rt,G as Bt,H as Et,I as pt,J as Pt,K as Ft,O as Wt,Q as zt}from"./index.2dc4344e.js";import{F as Se,T as Dt,I as Pe,M as Fe,C as Ot}from"./TextField.a620a0ea.js";import{s as Ht,u as Vt,F as Qe,a as Ut,b as Gt,G as ke}from"./useAppNavigate.079e1e35.js";import{g as Ze,S as pe}from"./utils.c6eb80e9.js";import{B as et}from"./Button.99f37d8a.js";let se;function ft(){if(se)return se;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),se="reverse",e.scrollLeft>0?se="default":(e.scrollLeft=1,e.scrollLeft===0&&(se="negative")),document.body.removeChild(e),se}function tt(e,t){const o=e.scrollLeft;if(t!=="rtl")return o;switch(ft()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function Xt(e){return ae("MuiListItem",e)}const Yt=Z("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var re=Yt;const Kt=Z("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);var jt=Kt;function qt(e){return ae("MuiListItemSecondaryAction",e)}Z("MuiListItemSecondaryAction",["root","disableGutters"]);const Jt=["className"],Qt=e=>{const{disableGutters:t,classes:o}=e;return ie({root:["root",t&&"disableGutters"]},qt,o)},Zt=B("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})(({ownerState:e})=>p({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),mt=l.exports.forwardRef(function(t,o){const s=le({props:t,name:"MuiListItemSecondaryAction"}),{className:r}=s,i=U(s,Jt),b=l.exports.useContext(fe),u=p({},s,{disableGutters:b.disableGutters}),d=Qt(u);return n(Zt,p({className:T(d.root,r),ownerState:u,ref:o},i))});mt.muiName="ListItemSecondaryAction";var eo=mt;const to=["className"],oo=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],no=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]},so=e=>{const{alignItems:t,button:o,classes:s,dense:r,disabled:i,disableGutters:b,disablePadding:u,divider:d,hasSecondaryAction:g,selected:_}=e;return ie({root:["root",r&&"dense",!b&&"gutters",!u&&"padding",d&&"divider",i&&"disabled",o&&"button",t==="flex-start"&&"alignItemsFlexStart",g&&"secondaryAction",_&&"selected"],container:["container"]},Xt,s)},ro=B("div",{name:"MuiListItem",slot:"Root",overridesResolver:no})(({theme:e,ownerState:t})=>p({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&p({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${jt.root}`]:{paddingRight:48}},{[`&.${re.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${re.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:he(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${re.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:he(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${re.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${re.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:he(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:he(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),ao=B("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),lo=l.exports.forwardRef(function(t,o){const s=le({props:t,name:"MuiListItem"}),{alignItems:r="center",autoFocus:i=!1,button:b=!1,children:u,className:d,component:g,components:_={},componentsProps:f={},ContainerComponent:x="li",ContainerProps:{className:E}={},dense:ee=!1,disabled:P=!1,disableGutters:A=!1,disablePadding:te=!1,divider:W=!1,focusVisibleClassName:ce,secondaryAction:H,selected:z=!1}=s,G=U(s.ContainerProps,to),D=U(s,oo),X=l.exports.useContext(fe),O={dense:ee||X.dense||!1,alignItems:r,disableGutters:A},k=l.exports.useRef(null);wt(()=>{i&&k.current&&k.current.focus()},[i]);const I=l.exports.Children.toArray(u),w=I.length&&At(I[I.length-1],["ListItemSecondaryAction"]),N=p({},s,{alignItems:r,autoFocus:i,button:b,dense:O.dense,disabled:P,disableGutters:A,disablePadding:te,divider:W,hasSecondaryAction:w,selected:z}),Y=so(N),K=Lt(k,o),V=_.Root||ro,$=f.root||{},L=p({className:T(Y.root,$.className,d),disabled:P},D);let y=g||"li";return b&&(L.component=g||"div",L.focusVisibleClassName=T(re.focusVisible,ce),y=We),w?(y=!L.component&&!g?"div":y,x==="li"&&(y==="li"?y="div":L.component==="li"&&(L.component="div")),n(fe.Provider,{value:O,children:v(ao,p({as:x,className:T(Y.container,E),ref:K,ownerState:N},G,{children:[n(V,p({},$,!je(V)&&{as:y,ownerState:p({},N,$.ownerState)},L,{children:I})),I.pop()]}))})):n(fe.Provider,{value:O,children:v(V,p({},$,{as:y,ref:K,ownerState:N},!je(V)&&{ownerState:p({},N,$.ownerState)},L,{children:[I,H&&n(eo,{children:H})]}))})});var io=lo;function co(e){return ae("MuiListItemAvatar",e)}Z("MuiListItemAvatar",["root","alignItemsFlexStart"]);const uo=["className"],po=e=>{const{alignItems:t,classes:o}=e;return ie({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},co,o)},fo=B("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({ownerState:e})=>p({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),mo=l.exports.forwardRef(function(t,o){const s=le({props:t,name:"MuiListItemAvatar"}),{className:r}=s,i=U(s,uo),b=l.exports.useContext(fe),u=p({},s,{alignItems:b.alignItems}),d=po(u);return n(fo,p({className:T(d.root,r),ownerState:u,ref:o},i))});var bo=mo;function ho(e){return ae("MuiTab",e)}const vo=Z("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);var J=vo;const _o=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],go=e=>{const{classes:t,textColor:o,fullWidth:s,wrapped:r,icon:i,label:b,selected:u,disabled:d}=e,g={root:["root",i&&b&&"labelIcon",`textColor${it(o)}`,s&&"fullWidth",r&&"wrapped",u&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return ie(g,ho,t)},xo=B(We,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${it(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>p({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${J.iconWrapper}`]:p({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${J.selected}`]:{opacity:1},[`&.${J.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${J.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${J.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${J.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${J.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),yo=l.exports.forwardRef(function(t,o){const s=le({props:t,name:"MuiTab"}),{className:r,disabled:i=!1,disableFocusRipple:b=!1,fullWidth:u,icon:d,iconPosition:g="top",indicator:_,label:f,onChange:x,onClick:E,onFocus:ee,selected:P,selectionFollowsFocus:A,textColor:te="inherit",value:W,wrapped:ce=!1}=s,H=U(s,_o),z=p({},s,{disabled:i,disableFocusRipple:b,selected:P,icon:!!d,iconPosition:g,label:!!f,fullWidth:u,textColor:te,wrapped:ce}),G=go(z),D=d&&f&&l.exports.isValidElement(d)?l.exports.cloneElement(d,{className:T(G.iconWrapper,d.props.className)}):d,X=k=>{!P&&x&&x(k,W),E&&E(k)},O=k=>{A&&!P&&x&&x(k,W),ee&&ee(k)};return v(xo,p({focusRipple:!b,className:T(G.root,r),ref:o,role:"tab","aria-selected":P,disabled:i,onClick:X,onFocus:O,ownerState:z,tabIndex:P?0:-1},H,{children:[g==="top"||g==="start"?v(l.exports.Fragment,{children:[D,f]}):v(l.exports.Fragment,{children:[f,D]}),_]}))});var Ne=yo,So=Ce(n("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),Co=Ce(n("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Io(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function wo(e,t,o,s={},r=()=>{}){const{ease:i=Io,duration:b=300}=s;let u=null;const d=t[e];let g=!1;const _=()=>{g=!0},f=x=>{if(g){r(new Error("Animation cancelled"));return}u===null&&(u=x);const E=Math.min(1,(x-u)/b);if(t[e]=i(E)*(o-d)+d,E>=1){requestAnimationFrame(()=>{r(null)});return}requestAnimationFrame(f)};return d===o?(r(new Error("Element already at target position")),_):(requestAnimationFrame(f),_)}const Ao=["onChange"],Lo={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function To(e){const{onChange:t}=e,o=U(e,Ao),s=l.exports.useRef(),r=l.exports.useRef(null),i=()=>{s.current=r.current.offsetHeight-r.current.clientHeight};return l.exports.useEffect(()=>{const b=Be(()=>{const d=s.current;i(),d!==s.current&&t(s.current)}),u=ct(r.current);return u.addEventListener("resize",b),()=>{b.clear(),u.removeEventListener("resize",b)}},[t]),l.exports.useEffect(()=>{i(),t(s.current)},[t]),n("div",p({style:Lo,ref:r},o))}function ko(e){return ae("MuiTabScrollButton",e)}const No=Z("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);var $o=No,ot,nt;const Mo=["className","direction","orientation","disabled"],Ro=e=>{const{classes:t,orientation:o,disabled:s}=e;return ie({root:["root",o,s&&"disabled"]},ko,t)},Bo=B(We,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})(({ownerState:e})=>p({width:40,flexShrink:0,opacity:.8,[`&.${$o.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Eo=l.exports.forwardRef(function(t,o){const s=le({props:t,name:"MuiTabScrollButton"}),{className:r,direction:i}=s,b=U(s,Mo),d=dt().direction==="rtl",g=p({isRtl:d},s),_=Ro(g);return n(Bo,p({component:"div",className:T(_.root,r),ref:o,role:null,ownerState:g,tabIndex:null},b,{children:i==="left"?ot||(ot=n(So,{fontSize:"small"})):nt||(nt=n(Co,{fontSize:"small"}))}))});var Po=Eo;function Fo(e){return ae("MuiTabs",e)}const Wo=Z("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var $e=Wo;const zo=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],st=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,rt=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,_e=(e,t,o)=>{let s=!1,r=o(e,t);for(;r;){if(r===e.firstChild){if(s)return;s=!0}const i=r.disabled||r.getAttribute("aria-disabled")==="true";if(!r.hasAttribute("tabindex")||i)r=o(e,r);else{r.focus();return}}},Do=e=>{const{vertical:t,fixed:o,hideScrollbar:s,scrollableX:r,scrollableY:i,centered:b,scrollButtonsHideMobile:u,classes:d}=e;return ie({root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",s&&"hideScrollbar",r&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",b&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",u&&"scrollButtonsHideMobile"],scrollableX:[r&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},Fo,d)},Oo=B("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${$e.scrollButtons}`]:t.scrollButtons},{[`& .${$e.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>p({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${$e.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),Ho=B("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})(({ownerState:e})=>p({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Vo=B("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})(({ownerState:e})=>p({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),Uo=B("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>p({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),Go=B(To,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),at={},Xo=l.exports.forwardRef(function(t,o){const s=le({props:t,name:"MuiTabs"}),r=dt(),i=r.direction==="rtl",{"aria-label":b,"aria-labelledby":u,action:d,centered:g=!1,children:_,className:f,component:x="div",allowScrollButtonsMobile:E=!1,indicatorColor:ee="primary",onChange:P,orientation:A="horizontal",ScrollButtonComponent:te=Po,scrollButtons:W="auto",selectionFollowsFocus:ce,TabIndicatorProps:H={},TabScrollButtonProps:z={},textColor:G="primary",value:D,variant:X="standard",visibleScrollbar:O=!1}=s,k=U(s,zo),I=X==="scrollable",w=A==="vertical",N=w?"scrollTop":"scrollLeft",Y=w?"top":"left",K=w?"bottom":"right",V=w?"clientHeight":"clientWidth",$=w?"height":"width",L=p({},s,{component:x,allowScrollButtonsMobile:E,indicatorColor:ee,orientation:A,vertical:w,scrollButtons:W,textColor:G,variant:X,visibleScrollbar:O,fixed:!I,hideScrollbar:I&&!O,scrollableX:I&&!w,scrollableY:I&&w,centered:g&&!I,scrollButtonsHideMobile:!E}),y=Do(L),[De,ht]=l.exports.useState(!1),[j,Oe]=l.exports.useState(at),[oe,vt]=l.exports.useState({start:!1,end:!1}),[He,_t]=l.exports.useState({overflow:"hidden",scrollbarWidth:0}),Ve=new Map,F=l.exports.useRef(null),de=l.exports.useRef(null),Ue=()=>{const a=F.current;let c;if(a){const h=a.getBoundingClientRect();c={clientWidth:a.clientWidth,scrollLeft:a.scrollLeft,scrollTop:a.scrollTop,scrollLeftNormalized:tt(a,r.direction),scrollWidth:a.scrollWidth,top:h.top,bottom:h.bottom,left:h.left,right:h.right}}let m;if(a&&D!==!1){const h=de.current.children;if(h.length>0){const S=h[Ve.get(D)];m=S?S.getBoundingClientRect():null}}return{tabsMeta:c,tabMeta:m}},ue=Le(()=>{const{tabsMeta:a,tabMeta:c}=Ue();let m=0,h;if(w)h="top",c&&a&&(m=c.top-a.top+a.scrollTop);else if(h=i?"right":"left",c&&a){const M=i?a.scrollLeftNormalized+a.clientWidth-a.scrollWidth:a.scrollLeft;m=(i?-1:1)*(c[h]-a[h]+M)}const S={[h]:m,[$]:c?c[$]:0};if(isNaN(j[h])||isNaN(j[$]))Oe(S);else{const M=Math.abs(j[h]-S[h]),ne=Math.abs(j[$]-S[$]);(M>=1||ne>=1)&&Oe(S)}}),Ie=(a,{animation:c=!0}={})=>{c?wo(N,F.current,a,{duration:r.transitions.duration.standard}):F.current[N]=a},Ge=a=>{let c=F.current[N];w?c+=a:(c+=a*(i?-1:1),c*=i&&ft()==="reverse"?-1:1),Ie(c)},Xe=()=>{const a=F.current[V];let c=0;const m=Array.from(de.current.children);for(let h=0;h<m.length;h+=1){const S=m[h];if(c+S[V]>a){h===0&&(c=a);break}c+=S[V]}return c},gt=()=>{Ge(-1*Xe())},xt=()=>{Ge(Xe())},yt=l.exports.useCallback(a=>{_t({overflow:null,scrollbarWidth:a})},[]),St=()=>{const a={};a.scrollbarSizeListener=I?n(Go,{onChange:yt,className:T(y.scrollableX,y.hideScrollbar)}):null;const c=oe.start||oe.end,m=I&&(W==="auto"&&c||W===!0);return a.scrollButtonStart=m?n(te,p({orientation:A,direction:i?"right":"left",onClick:gt,disabled:!oe.start},z,{className:T(y.scrollButtons,z.className)})):null,a.scrollButtonEnd=m?n(te,p({orientation:A,direction:i?"left":"right",onClick:xt,disabled:!oe.end},z,{className:T(y.scrollButtons,z.className)})):null,a},Ye=Le(a=>{const{tabsMeta:c,tabMeta:m}=Ue();if(!(!m||!c)){if(m[Y]<c[Y]){const h=c[N]+(m[Y]-c[Y]);Ie(h,{animation:a})}else if(m[K]>c[K]){const h=c[N]+(m[K]-c[K]);Ie(h,{animation:a})}}}),q=Le(()=>{if(I&&W!==!1){const{scrollTop:a,scrollHeight:c,clientHeight:m,scrollWidth:h,clientWidth:S}=F.current;let M,ne;if(w)M=a>1,ne=a<c-m-1;else{const be=tt(F.current,r.direction);M=i?be<h-S-1:be>1,ne=i?be>1:be<h-S-1}(M!==oe.start||ne!==oe.end)&&vt({start:M,end:ne})}});l.exports.useEffect(()=>{const a=Be(()=>{F.current&&(ue(),q())}),c=ct(F.current);c.addEventListener("resize",a);let m;return typeof ResizeObserver<"u"&&(m=new ResizeObserver(a),Array.from(de.current.children).forEach(h=>{m.observe(h)})),()=>{a.clear(),c.removeEventListener("resize",a),m&&m.disconnect()}},[ue,q]);const we=l.exports.useMemo(()=>Be(()=>{q()}),[q]);l.exports.useEffect(()=>()=>{we.clear()},[we]),l.exports.useEffect(()=>{ht(!0)},[]),l.exports.useEffect(()=>{ue(),q()}),l.exports.useEffect(()=>{Ye(at!==j)},[Ye,j]),l.exports.useImperativeHandle(d,()=>({updateIndicator:ue,updateScrollButtons:q}),[ue,q]);const Ke=n(Uo,p({},H,{className:T(y.indicator,H.className),ownerState:L,style:p({},j,H.style)}));let me=0;const Ct=l.exports.Children.map(_,a=>{if(!l.exports.isValidElement(a))return null;const c=a.props.value===void 0?me:a.props.value;Ve.set(c,me);const m=c===D;return me+=1,l.exports.cloneElement(a,p({fullWidth:X==="fullWidth",indicator:m&&!De&&Ke,selected:m,selectionFollowsFocus:ce,onChange:P,textColor:G,value:c},me===1&&D===!1&&!a.props.tabIndex?{tabIndex:0}:{}))}),It=a=>{const c=de.current,m=Tt(c).activeElement;if(m.getAttribute("role")!=="tab")return;let S=A==="horizontal"?"ArrowLeft":"ArrowUp",M=A==="horizontal"?"ArrowRight":"ArrowDown";switch(A==="horizontal"&&i&&(S="ArrowRight",M="ArrowLeft"),a.key){case S:a.preventDefault(),_e(c,m,rt);break;case M:a.preventDefault(),_e(c,m,st);break;case"Home":a.preventDefault(),_e(c,null,st);break;case"End":a.preventDefault(),_e(c,null,rt);break}},Ae=St();return v(Oo,p({className:T(y.root,f),ownerState:L,ref:o,as:x},k,{children:[Ae.scrollButtonStart,Ae.scrollbarSizeListener,v(Ho,{className:y.scroller,ownerState:L,style:{overflow:He.overflow,[w?`margin${i?"Left":"Right"}`:"marginBottom"]:O?void 0:-He.scrollbarWidth},ref:F,onScroll:we,children:[n(Vo,{"aria-label":b,"aria-labelledby":u,"aria-orientation":A==="vertical"?"vertical":null,className:y.flexContainer,ownerState:L,onKeyDown:It,ref:de,role:"tablist",children:Ct}),De&&Ke]}),Ae.scrollButtonEnd]}))});var Yo=Xo;const Ko=e=>{const{children:t,value:o,index:s,...r}=e;return n("div",{role:"tabpanel",hidden:o!==s,id:`tabpanel-${s}`,"aria-labelledby":`tab-${s}`,...r,children:o===s&&n(kt,{component:"span",children:t})})},Me=l.exports.memo(Ko),jo=({queryParams:e,onChange:t})=>n(Se,{fullWidth:!0,children:n(Dt,{id:"",label:"Search: ",placeholder:"E.g. Conan, Dragon, ...",value:e?.search??"",onChange:t})}),qo=l.exports.memo(jo),Jo="_sort_1t0ke_1";var Qo={sort:Jo};const Zo=({queryParams:e,onFieldChange:t})=>v("div",{className:Qo.sort,children:[v(Se,{fullWidth:!0,children:[n(Pe,{id:"sorting-label",children:"Sort by: "}),n(Fe,{labelId:"sorting-label",value:e?.sorting,label:"Sort by: ",onChange:t("sorting"),children:Object.entries(Nt).map(([o,s])=>n(xe,{value:s,children:o},o))})]}),v(Se,{fullWidth:!0,children:[n(Pe,{id:"ordering-label",children:"Direction: "}),v(Fe,{labelId:"ordering-label",value:e?.ordering,label:"Order by: ",onChange:t("ordering"),children:[n(xe,{value:qe.Ascending,children:"Ascending"}),n(xe,{value:qe.Descending,children:"Descending"})]})]})]}),en=l.exports.memo(Zo),bt=",",tn=({queryParams:e,handleTypeChange:t})=>v(Se,{fullWidth:!0,children:[n(Pe,{id:"type-label",children:"Type: "}),n(Fe,{labelId:"type-label",multiple:!0,value:e?.type?.split(bt)??[],label:"Type: ",onChange:t,children:Object.entries($t).map(([o,s])=>n(xe,{value:s,children:o},s))})]}),on=l.exports.memo(tn),nn=300,Re=e=>({id:`tab-${e}`,"aria-controls":`tabpanel-${e}`}),sn=()=>{const[e,t]=ze(),[o,s]=l.exports.useState(0),[r,i]=l.exports.useState(Je(e));l.exports.useEffect(()=>{i(_=>new ve({..._,...Je(e)}))},[e]),l.exports.useEffect(()=>{const _=setTimeout(()=>{if(r===void 0)return;const f={};for(const x of Object.keys(r))f[x]=r[x].toString();t(new URLSearchParams({...e,...f}))},nn);return()=>clearTimeout(_)},[r]);const b=_=>f=>i(x=>new ve({...x??Te,[_]:f.target.value.toString()??""})),u=_=>{const{value:f}=_.target;i(x=>new ve({...x??Te,type:typeof f=="string"?f:f.join(bt)}))},d=_=>i(f=>new ve({...f??Te,search:_.target.value}));return v(ye,{children:[v(Yo,{value:o,onChange:(_,f)=>s(f),children:[n(Ne,{label:"Search",...Re(0)}),n(Ne,{label:"Field",...Re(1)}),n(Ne,{label:"Type",...Re(2)})]}),n(Me,{value:o,index:0,children:n(qo,{queryParams:r,onChange:d})}),n(Me,{value:o,index:1,children:n(en,{queryParams:r,onFieldChange:b})}),n(Me,{value:o,index:2,children:n(on,{queryParams:r,handleTypeChange:u})})]})},rn=l.exports.memo(sn),an=e=>{const[t,o]=l.exports.useState(null),s=l.exports.useRef(new IntersectionObserver(r=>{r[0].isIntersecting&&e()}));return l.exports.useEffect(()=>{const r=t,i=s.current;return r&&i.observe(r),()=>{r&&i.unobserve(r)}},[t]),{setLastElement:o}};var ln=Ce(n("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),cn=Ce(n("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");const dn="_info_h6dhf_1",un="_info__list_h6dhf_13",pn="_info__avatar_h6dhf_17",fn="_info__data_h6dhf_23",mn="_info__modal_h6dhf_38",bn="_info__popup_h6dhf_44",hn="_info__button_h6dhf_52",vn="_info__action_h6dhf_56",_n="_info__warning_h6dhf_62";var C={info:dn,"info--active":"_info--active_h6dhf_9",info__list:un,info__avatar:pn,info__data:fn,"info__data--primary":"_info__data--primary_h6dhf_29","info__data--secondary":"_info__data--secondary_h6dhf_33",info__modal:mn,info__popup:bn,info__button:hn,info__action:vn,info__warning:_n};const gn=({anime:e})=>{const[t]=ze(),o=ut(),s=Ee(Ht),[r,i]=l.exports.useState(!1),{navigateWithSearchParams:b}=Vt(),u=f=>{f.stopPropagation(),f.preventDefault(),i(!0)},d=()=>i(!1),g=()=>{i(!1),o(Pt(e.id))},_=f=>{f.stopPropagation(),f.preventDefault(),b(`edit/${e.id}/`)};return v(ye,{children:[n(Mt,{to:`${e.id}?${t.toString()}`,className:({isActive:f})=>`${f?C["info--active"]:""} ${C.info}`,children:n(Rt,{className:C.info__list,children:v(io,{children:[n(bo,{children:n(Bt,{className:C.info__avatar,variant:"rounded",alt:"",src:e.image})}),v("div",{className:C.info__data,children:[v("span",{className:C["info__data--primary"],children:["Title English: ",Ze(e.titleEnglish)]}),v("span",{className:C["info__data--primary"],children:["Title Japanese: ",Ze(e.titleJapanese)]}),v("span",{className:C["info__data--secondary"],children:["Type: ",e.type]}),v("span",{className:C["info__data--secondary"],children:["Status: ",e.status]})]}),v("div",{className:C.info__action,children:[n(Qe,{size:"small",color:"primary",onClick:_,children:n(cn,{})}),n(Qe,{size:"small",color:"error",onClick:u,children:n(ln,{})})]})]})})}),n(Et,{className:C.info__modal,open:r,onClose:d,children:v(pt,{className:C.info__popup,children:[n("h1",{children:"Delete anime"}),n("div",{className:C.info__warning,children:"Are you sure? You cannot undo this action."}),v("div",{className:C.info__action,children:[n(et,{className:C.info__button,color:"secondary",onClick:d,children:"Cancel"}),n(et,{className:C.info__button,variant:"contained",color:"error",onClick:g,children:s?n(Ot,{}):"Ok"})]})]})})]})},lt=l.exports.memo(gn),xn="_skeleton_5189y_1",yn="_skeleton__avatar_5189y_7",Sn="_skeleton__info_5189y_13",Cn="_skeleton__text_5189y_20";var R={skeleton:xn,skeleton__avatar:yn,skeleton__info:Sn,skeleton__text:Cn,"skeleton__text--primary":"_skeleton__text--primary_5189y_24","skeleton__text--secondary":"_skeleton__text--secondary_5189y_28"};const In=()=>v(pt,{className:R.skeleton,children:[n(pe,{className:R.skeleton__avatar,variant:"rectangular"}),v("div",{className:R.skeleton__info,children:[n(pe,{className:`${R.skeleton__text} ${R["skeleton__text--primary"]}`,variant:"text"}),n(pe,{className:`${R.skeleton__text} ${R["skeleton__text--primary"]}`,variant:"text"}),n(pe,{className:`${R.skeleton__text} ${R["skeleton__text--secondary"]}`,variant:"text"}),n(pe,{className:`${R.skeleton__text} ${R["skeleton__text--secondary"]}`,variant:"text"})]})]}),Q=l.exports.memo(In),wn=()=>{const[e]=ze(),t=ut(),o=Ee(Ut),s=Ee(Gt),{setLastElement:r}=an(()=>t(Wt()));l.exports.useEffect(()=>{t(Ft(e))},[t,e]);const i=o.map((u,d)=>d===o.length-1?n("div",{ref:r,children:n(lt,{anime:u})},u.id):n(lt,{anime:u},u.id)),b=v(ye,{children:[n(Q,{}),n(Q,{}),n(Q,{}),n(Q,{}),n(Q,{}),n(Q,{})]});return v(ye,{children:[i.length>0?i:b,s&&n(Q,{})]})},An=l.exports.memo(wn),Ln="_anime__list_1gi02_1",Tn="_anime__filter_1gi02_6";var ge={anime__list:Ln,anime__filter:Tn};const kn=()=>v(ke,{container:!0,className:ge.anime,children:[v(ke,{lg:3,sm:5,item:!0,className:ge.anime__list,children:[n("div",{className:ge.anime__filter,children:n(rn,{})}),n(An,{})]}),n(ke,{lg:9,sm:7,item:!0,className:ge.anime__detail,children:n(zt,{})})]}),En=l.exports.memo(kn);export{En as AnimePage};
