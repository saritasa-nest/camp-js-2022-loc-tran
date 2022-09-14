import{g as re,a as Q,s as B,_ as u,r as i,u as ae,b as V,L as pe,c as le,j as r,d as T,e as be,f as It,i as wt,h as At,k as h,l as Ke,B as Pe,m as lt,n as xe,o as it,p as $e,q as ct,t as Ie,v as Lt,T as Tt,S as Nt,M as Me,w as kt,A as $t,x as Fe,y as je,P as he,F as We,D as we,z as dt,C as Re,N as Mt,E as Rt,G as Bt,H as Et,I as ut,J as Pt,K as Ft,O as Wt,Q as zt}from"./index.74b9e046.js";import{F as ge,T as Dt,I as Be,M as Ee,C as Ot}from"./TextField.f0130e68.js";import{s as Ht,u as Ut,F as qe,a as Vt,b as Gt,G as Ae}from"./useAppNavigate.c18f065d.js";import{g as Je,S as ue}from"./utils.6a90e120.js";import{B as Qe}from"./Button.453738bc.js";let ne;function pt(){if(ne)return ne;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),ne="reverse",e.scrollLeft>0?ne="default":(e.scrollLeft=1,e.scrollLeft===0&&(ne="negative")),document.body.removeChild(e),ne}function Ze(e,t){const o=e.scrollLeft;if(t!=="rtl")return o;switch(pt()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function Xt(e){return re("MuiListItem",e)}const Yt=Q("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var se=Yt;const Kt=Q("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);var jt=Kt;function qt(e){return re("MuiListItemSecondaryAction",e)}Q("MuiListItemSecondaryAction",["root","disableGutters"]);const Jt=["className"],Qt=e=>{const{disableGutters:t,classes:o}=e;return le({root:["root",t&&"disableGutters"]},qt,o)},Zt=B("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})(({ownerState:e})=>u({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),ft=i.exports.forwardRef(function(t,o){const s=ae({props:t,name:"MuiListItemSecondaryAction"}),{className:n}=s,a=V(s,Jt),p=i.exports.useContext(pe),f=u({},s,{disableGutters:p.disableGutters}),d=Qt(f);return r(Zt,u({className:T(d.root,n),ownerState:f,ref:o},a))});ft.muiName="ListItemSecondaryAction";var eo=ft;const to=["className"],oo=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],no=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]},so=e=>{const{alignItems:t,button:o,classes:s,dense:n,disabled:a,disableGutters:p,disablePadding:f,divider:d,hasSecondaryAction:v,selected:g}=e;return le({root:["root",n&&"dense",!p&&"gutters",!f&&"padding",d&&"divider",a&&"disabled",o&&"button",t==="flex-start"&&"alignItemsFlexStart",v&&"secondaryAction",g&&"selected"],container:["container"]},Xt,s)},ro=B("div",{name:"MuiListItem",slot:"Root",overridesResolver:no})(({theme:e,ownerState:t})=>u({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&u({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${jt.root}`]:{paddingRight:48}},{[`&.${se.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${se.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:be(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${se.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:be(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${se.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${se.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:be(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:be(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),ao=B("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),lo=i.exports.forwardRef(function(t,o){const s=ae({props:t,name:"MuiListItem"}),{alignItems:n="center",autoFocus:a=!1,button:p=!1,children:f,className:d,component:v,components:g={},componentsProps:x={},ContainerComponent:_="li",ContainerProps:{className:E}={},dense:Z=!1,disabled:P=!1,disableGutters:A=!1,disablePadding:ee=!1,divider:W=!1,focusVisibleClassName:ie,secondaryAction:H,selected:z=!1}=s,G=V(s.ContainerProps,to),D=V(s,oo),X=i.exports.useContext(pe),O={dense:Z||X.dense||!1,alignItems:n,disableGutters:A},N=i.exports.useRef(null);It(()=>{a&&N.current&&N.current.focus()},[a]);const I=i.exports.Children.toArray(f),w=I.length&&wt(I[I.length-1],["ListItemSecondaryAction"]),k=u({},s,{alignItems:n,autoFocus:a,button:p,dense:O.dense,disabled:P,disableGutters:A,disablePadding:ee,divider:W,hasSecondaryAction:w,selected:z}),Y=so(k),K=At(N,o),U=g.Root||ro,$=x.root||{},L=u({className:T(Y.root,$.className,d),disabled:P},D);let y=v||"li";return p&&(L.component=v||"div",L.focusVisibleClassName=T(se.focusVisible,ie),y=Pe),w?(y=!L.component&&!v?"div":y,_==="li"&&(y==="li"?y="div":L.component==="li"&&(L.component="div")),r(pe.Provider,{value:O,children:h(ao,u({as:_,className:T(Y.container,E),ref:K,ownerState:k},G,{children:[r(U,u({},$,!Ke(U)&&{as:y,ownerState:u({},k,$.ownerState)},L,{children:I})),I.pop()]}))})):r(pe.Provider,{value:O,children:h(U,u({},$,{as:y,ref:K,ownerState:k},!Ke(U)&&{ownerState:u({},k,$.ownerState)},L,{children:[I,H&&r(eo,{children:H})]}))})});var io=lo;function co(e){return re("MuiListItemAvatar",e)}Q("MuiListItemAvatar",["root","alignItemsFlexStart"]);const uo=["className"],po=e=>{const{alignItems:t,classes:o}=e;return le({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},co,o)},fo=B("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({ownerState:e})=>u({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),mo=i.exports.forwardRef(function(t,o){const s=ae({props:t,name:"MuiListItemAvatar"}),{className:n}=s,a=V(s,uo),p=i.exports.useContext(pe),f=u({},s,{alignItems:p.alignItems}),d=po(f);return r(fo,u({className:T(d.root,n),ownerState:f,ref:o},a))});var bo=mo;function ho(e){return re("MuiTab",e)}const vo=Q("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);var J=vo;const _o=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],go=e=>{const{classes:t,textColor:o,fullWidth:s,wrapped:n,icon:a,label:p,selected:f,disabled:d}=e,v={root:["root",a&&p&&"labelIcon",`textColor${lt(o)}`,s&&"fullWidth",n&&"wrapped",f&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return le(v,ho,t)},xo=B(Pe,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${lt(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>u({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${J.iconWrapper}`]:u({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${J.selected}`]:{opacity:1},[`&.${J.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${J.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${J.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${J.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${J.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),yo=i.exports.forwardRef(function(t,o){const s=ae({props:t,name:"MuiTab"}),{className:n,disabled:a=!1,disableFocusRipple:p=!1,fullWidth:f,icon:d,iconPosition:v="top",indicator:g,label:x,onChange:_,onClick:E,onFocus:Z,selected:P,selectionFollowsFocus:A,textColor:ee="inherit",value:W,wrapped:ie=!1}=s,H=V(s,_o),z=u({},s,{disabled:a,disableFocusRipple:p,selected:P,icon:!!d,iconPosition:v,label:!!x,fullWidth:f,textColor:ee,wrapped:ie}),G=go(z),D=d&&x&&i.exports.isValidElement(d)?i.exports.cloneElement(d,{className:T(G.iconWrapper,d.props.className)}):d,X=N=>{!P&&_&&_(N,W),E&&E(N)},O=N=>{A&&!P&&_&&_(N,W),Z&&Z(N)};return h(xo,u({focusRipple:!p,className:T(G.root,n),ref:o,role:"tab","aria-selected":P,disabled:a,onClick:X,onFocus:O,ownerState:z,tabIndex:P?0:-1},H,{children:[v==="top"||v==="start"?h(i.exports.Fragment,{children:[D,x]}):h(i.exports.Fragment,{children:[x,D]}),g]}))});var Le=yo,Co=xe(r("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),So=xe(r("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Io(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function wo(e,t,o,s={},n=()=>{}){const{ease:a=Io,duration:p=300}=s;let f=null;const d=t[e];let v=!1;const g=()=>{v=!0},x=_=>{if(v){n(new Error("Animation cancelled"));return}f===null&&(f=_);const E=Math.min(1,(_-f)/p);if(t[e]=a(E)*(o-d)+d,E>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(x)};return d===o?(n(new Error("Element already at target position")),g):(requestAnimationFrame(x),g)}const Ao=["onChange"],Lo={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function To(e){const{onChange:t}=e,o=V(e,Ao),s=i.exports.useRef(),n=i.exports.useRef(null),a=()=>{s.current=n.current.offsetHeight-n.current.clientHeight};return i.exports.useEffect(()=>{const p=$e(()=>{const d=s.current;a(),d!==s.current&&t(s.current)}),f=it(n.current);return f.addEventListener("resize",p),()=>{p.clear(),f.removeEventListener("resize",p)}},[t]),i.exports.useEffect(()=>{a(),t(s.current)},[t]),r("div",u({style:Lo,ref:n},o))}function No(e){return re("MuiTabScrollButton",e)}const ko=Q("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);var $o=ko,et,tt;const Mo=["className","direction","orientation","disabled"],Ro=e=>{const{classes:t,orientation:o,disabled:s}=e;return le({root:["root",o,s&&"disabled"]},No,t)},Bo=B(Pe,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})(({ownerState:e})=>u({width:40,flexShrink:0,opacity:.8,[`&.${$o.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Eo=i.exports.forwardRef(function(t,o){const s=ae({props:t,name:"MuiTabScrollButton"}),{className:n,direction:a}=s,p=V(s,Mo),d=ct().direction==="rtl",v=u({isRtl:d},s),g=Ro(v);return r(Bo,u({component:"div",className:T(g.root,n),ref:o,role:null,ownerState:v,tabIndex:null},p,{children:a==="left"?et||(et=r(Co,{fontSize:"small"})):tt||(tt=r(So,{fontSize:"small"}))}))});var Po=Eo;function Fo(e){return re("MuiTabs",e)}const Wo=Q("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var Te=Wo;const zo=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],ot=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,nt=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,ve=(e,t,o)=>{let s=!1,n=o(e,t);for(;n;){if(n===e.firstChild){if(s)return;s=!0}const a=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||a)n=o(e,n);else{n.focus();return}}},Do=e=>{const{vertical:t,fixed:o,hideScrollbar:s,scrollableX:n,scrollableY:a,centered:p,scrollButtonsHideMobile:f,classes:d}=e;return le({root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",s&&"hideScrollbar",n&&"scrollableX",a&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",p&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},Fo,d)},Oo=B("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${Te.scrollButtons}`]:t.scrollButtons},{[`& .${Te.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>u({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${Te.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),Ho=B("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})(({ownerState:e})=>u({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Uo=B("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})(({ownerState:e})=>u({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),Vo=B("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>u({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),Go=B(To,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),st={},Xo=i.exports.forwardRef(function(t,o){const s=ae({props:t,name:"MuiTabs"}),n=ct(),a=n.direction==="rtl",{"aria-label":p,"aria-labelledby":f,action:d,centered:v=!1,children:g,className:x,component:_="div",allowScrollButtonsMobile:E=!1,indicatorColor:Z="primary",onChange:P,orientation:A="horizontal",ScrollButtonComponent:ee=Po,scrollButtons:W="auto",selectionFollowsFocus:ie,TabIndicatorProps:H={},TabScrollButtonProps:z={},textColor:G="primary",value:D,variant:X="standard",visibleScrollbar:O=!1}=s,N=V(s,zo),I=X==="scrollable",w=A==="vertical",k=w?"scrollTop":"scrollLeft",Y=w?"top":"left",K=w?"bottom":"right",U=w?"clientHeight":"clientWidth",$=w?"height":"width",L=u({},s,{component:_,allowScrollButtonsMobile:E,indicatorColor:Z,orientation:A,vertical:w,scrollButtons:W,textColor:G,variant:X,visibleScrollbar:O,fixed:!I,hideScrollbar:I&&!O,scrollableX:I&&!w,scrollableY:I&&w,centered:v&&!I,scrollButtonsHideMobile:!E}),y=Do(L),[ze,bt]=i.exports.useState(!1),[j,De]=i.exports.useState(st),[te,ht]=i.exports.useState({start:!1,end:!1}),[Oe,vt]=i.exports.useState({overflow:"hidden",scrollbarWidth:0}),He=new Map,F=i.exports.useRef(null),ce=i.exports.useRef(null),Ue=()=>{const l=F.current;let c;if(l){const b=l.getBoundingClientRect();c={clientWidth:l.clientWidth,scrollLeft:l.scrollLeft,scrollTop:l.scrollTop,scrollLeftNormalized:Ze(l,n.direction),scrollWidth:l.scrollWidth,top:b.top,bottom:b.bottom,left:b.left,right:b.right}}let m;if(l&&D!==!1){const b=ce.current.children;if(b.length>0){const C=b[He.get(D)];m=C?C.getBoundingClientRect():null}}return{tabsMeta:c,tabMeta:m}},de=Ie(()=>{const{tabsMeta:l,tabMeta:c}=Ue();let m=0,b;if(w)b="top",c&&l&&(m=c.top-l.top+l.scrollTop);else if(b=a?"right":"left",c&&l){const M=a?l.scrollLeftNormalized+l.clientWidth-l.scrollWidth:l.scrollLeft;m=(a?-1:1)*(c[b]-l[b]+M)}const C={[b]:m,[$]:c?c[$]:0};if(isNaN(j[b])||isNaN(j[$]))De(C);else{const M=Math.abs(j[b]-C[b]),oe=Math.abs(j[$]-C[$]);(M>=1||oe>=1)&&De(C)}}),ye=(l,{animation:c=!0}={})=>{c?wo(k,F.current,l,{duration:n.transitions.duration.standard}):F.current[k]=l},Ve=l=>{let c=F.current[k];w?c+=l:(c+=l*(a?-1:1),c*=a&&pt()==="reverse"?-1:1),ye(c)},Ge=()=>{const l=F.current[U];let c=0;const m=Array.from(ce.current.children);for(let b=0;b<m.length;b+=1){const C=m[b];if(c+C[U]>l){b===0&&(c=l);break}c+=C[U]}return c},_t=()=>{Ve(-1*Ge())},gt=()=>{Ve(Ge())},xt=i.exports.useCallback(l=>{vt({overflow:null,scrollbarWidth:l})},[]),yt=()=>{const l={};l.scrollbarSizeListener=I?r(Go,{onChange:xt,className:T(y.scrollableX,y.hideScrollbar)}):null;const c=te.start||te.end,m=I&&(W==="auto"&&c||W===!0);return l.scrollButtonStart=m?r(ee,u({orientation:A,direction:a?"right":"left",onClick:_t,disabled:!te.start},z,{className:T(y.scrollButtons,z.className)})):null,l.scrollButtonEnd=m?r(ee,u({orientation:A,direction:a?"left":"right",onClick:gt,disabled:!te.end},z,{className:T(y.scrollButtons,z.className)})):null,l},Xe=Ie(l=>{const{tabsMeta:c,tabMeta:m}=Ue();if(!(!m||!c)){if(m[Y]<c[Y]){const b=c[k]+(m[Y]-c[Y]);ye(b,{animation:l})}else if(m[K]>c[K]){const b=c[k]+(m[K]-c[K]);ye(b,{animation:l})}}}),q=Ie(()=>{if(I&&W!==!1){const{scrollTop:l,scrollHeight:c,clientHeight:m,scrollWidth:b,clientWidth:C}=F.current;let M,oe;if(w)M=l>1,oe=l<c-m-1;else{const me=Ze(F.current,n.direction);M=a?me<b-C-1:me>1,oe=a?me>1:me<b-C-1}(M!==te.start||oe!==te.end)&&ht({start:M,end:oe})}});i.exports.useEffect(()=>{const l=$e(()=>{F.current&&(de(),q())}),c=it(F.current);c.addEventListener("resize",l);let m;return typeof ResizeObserver<"u"&&(m=new ResizeObserver(l),Array.from(ce.current.children).forEach(b=>{m.observe(b)})),()=>{l.clear(),c.removeEventListener("resize",l),m&&m.disconnect()}},[de,q]);const Ce=i.exports.useMemo(()=>$e(()=>{q()}),[q]);i.exports.useEffect(()=>()=>{Ce.clear()},[Ce]),i.exports.useEffect(()=>{bt(!0)},[]),i.exports.useEffect(()=>{de(),q()}),i.exports.useEffect(()=>{Xe(st!==j)},[Xe,j]),i.exports.useImperativeHandle(d,()=>({updateIndicator:de,updateScrollButtons:q}),[de,q]);const Ye=r(Vo,u({},H,{className:T(y.indicator,H.className),ownerState:L,style:u({},j,H.style)}));let fe=0;const Ct=i.exports.Children.map(g,l=>{if(!i.exports.isValidElement(l))return null;const c=l.props.value===void 0?fe:l.props.value;He.set(c,fe);const m=c===D;return fe+=1,i.exports.cloneElement(l,u({fullWidth:X==="fullWidth",indicator:m&&!ze&&Ye,selected:m,selectionFollowsFocus:ie,onChange:P,textColor:G,value:c},fe===1&&D===!1&&!l.props.tabIndex?{tabIndex:0}:{}))}),St=l=>{const c=ce.current,m=Lt(c).activeElement;if(m.getAttribute("role")!=="tab")return;let C=A==="horizontal"?"ArrowLeft":"ArrowUp",M=A==="horizontal"?"ArrowRight":"ArrowDown";switch(A==="horizontal"&&a&&(C="ArrowRight",M="ArrowLeft"),l.key){case C:l.preventDefault(),ve(c,m,nt);break;case M:l.preventDefault(),ve(c,m,ot);break;case"Home":l.preventDefault(),ve(c,null,ot);break;case"End":l.preventDefault(),ve(c,null,nt);break}},Se=yt();return h(Oo,u({className:T(y.root,x),ownerState:L,ref:o,as:_},N,{children:[Se.scrollButtonStart,Se.scrollbarSizeListener,h(Ho,{className:y.scroller,ownerState:L,style:{overflow:Oe.overflow,[w?`margin${a?"Left":"Right"}`:"marginBottom"]:O?void 0:-Oe.scrollbarWidth},ref:F,onScroll:Ce,children:[r(Uo,{"aria-label":p,"aria-labelledby":f,"aria-orientation":A==="vertical"?"vertical":null,className:y.flexContainer,ownerState:L,onKeyDown:St,ref:ce,role:"tablist",children:Ct}),ze&&Ye]}),Se.scrollButtonEnd]}))});var Yo=Xo;const Ko=e=>{const{children:t,value:o,index:s,...n}=e;return r("div",{...n,role:"tabpanel",hidden:o!==s,id:`tabpanel-${s}`,"aria-labelledby":`tab-${s}`,children:o===s&&r(Tt,{component:"span",children:t})})},Ne=i.exports.memo(Ko),jo=({search:e,onChange:t})=>r(ge,{fullWidth:!0,children:r(Dt,{label:"Search: ",placeholder:"E.g. Conan, Dragon, ...",value:e,onChange:s=>{t(s.target.value)}})}),qo=i.exports.memo(jo),Jo="_sort_1t0ke_1";var Qo={sort:Jo};const Zo=({sorting:e,ordering:t,onFieldChange:o})=>{const s=n=>a=>{o(n)(a.target.value)};return h("div",{className:Qo.sort,children:[h(ge,{fullWidth:!0,children:[r(Be,{id:"sorting-label",children:"Sort by: "}),r(Ee,{labelId:"sorting-label",value:e,label:"Sort by: ",onChange:s("sorting"),children:Object.entries(Nt).map(([n,a])=>r(Me,{value:a,children:n},n))})]}),h(ge,{fullWidth:!0,children:[r(Be,{id:"ordering-label",children:"Direction: "}),r(Ee,{labelId:"ordering-label",value:t,label:"Order by: ",onChange:s("ordering"),children:Object.entries(kt).map(([n,a])=>r(Me,{value:a,children:n},n))})]})]})},en=i.exports.memo(Zo),mt=",",tn=({type:e,handleTypeChange:t})=>{const o=s=>{const{value:n}=s.target;t(typeof n=="string"?[n]:n)};return h(ge,{fullWidth:!0,children:[r(Be,{id:"type-label",children:"Type: "}),r(Ee,{labelId:"type-label",multiple:!0,value:e.split(mt)??[],label:"Type: ",onChange:o,children:Object.entries($t).map(([s,n])=>r(Me,{value:n,children:s},n))})]})},on=i.exports.memo(tn),nn=300,ke=e=>({id:`tab-${e}`,"aria-controls":`tabpanel-${e}`}),sn=()=>{const[e,t]=Fe(),[o,s]=i.exports.useState(0),[n,a]=i.exports.useState(je(e));i.exports.useEffect(()=>{a(g=>new he({...g,...je(e)}))},[e]),i.exports.useEffect(()=>{const g=setTimeout(()=>{if(n===void 0)return;const x={};for(const _ of Object.keys(n))x[_]=n[_].toString();t(new URLSearchParams({...e,...x}))},nn);return()=>clearTimeout(g)},[n]);const p=g=>x=>a(_=>new he({..._??we,[g]:x})),f=g=>{a(x=>new he({...x??we,type:g.join(mt)}))},d=g=>a(x=>new he({...x??we,search:g}));return h(We,{children:[h(Yo,{value:o,onChange:(g,x)=>s(x),children:[r(Le,{label:"Search",...ke(0)}),r(Le,{label:"Field",...ke(1)}),r(Le,{label:"Type",...ke(2)})]}),r(Ne,{value:o,index:0,children:r(qo,{search:n.search,onChange:d})}),r(Ne,{value:o,index:1,children:r(en,{sorting:n.sorting,ordering:n.ordering,onFieldChange:p})}),r(Ne,{value:o,index:2,children:r(on,{type:n.type,handleTypeChange:f})})]})},rn=i.exports.memo(sn),an=e=>{const[t,o]=i.exports.useState(null),s=i.exports.useRef(new IntersectionObserver(n=>{n[0].isIntersecting&&e()}));return i.exports.useEffect(()=>{const n=t,a=s.current;return n&&a.observe(n),()=>{n&&a.unobserve(n)}},[t]),{setLastElement:o}};var ln=xe(r("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),cn=xe(r("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");const dn="_info_h6dhf_1",un="_info__list_h6dhf_13",pn="_info__avatar_h6dhf_17",fn="_info__data_h6dhf_23",mn="_info__modal_h6dhf_38",bn="_info__popup_h6dhf_44",hn="_info__button_h6dhf_52",vn="_info__action_h6dhf_56",_n="_info__warning_h6dhf_62";var S={info:dn,"info--active":"_info--active_h6dhf_9",info__list:un,info__avatar:pn,info__data:fn,"info__data--primary":"_info__data--primary_h6dhf_29","info__data--secondary":"_info__data--secondary_h6dhf_33",info__modal:mn,info__popup:bn,info__button:hn,info__action:vn,info__warning:_n};const gn=({anime:e})=>{const[t]=Fe(),o=dt(),s=Re(Ht),[n,a]=i.exports.useState(!1),{navigateWithSearchParams:p}=Ut(),f=_=>{_.stopPropagation(),_.preventDefault(),a(!0)},d=()=>a(!1),v=()=>{a(!1),o(Pt(e.id))},g=_=>{_.stopPropagation(),_.preventDefault(),p(`edit/${e.id}/`)},x=`${e.id}?${t.toString()}`;return h(We,{children:[r(Mt,{to:x,className:({isActive:_})=>`${_?S["info--active"]:""} ${S.info}`,children:r(Rt,{className:S.info__list,children:h(io,{children:[r(bo,{children:r(Bt,{className:S.info__avatar,variant:"rounded",alt:"",src:e.image})}),h("div",{className:S.info__data,children:[h("span",{className:S["info__data--primary"],children:["Title English: ",Je(e.titleEnglish)]}),h("span",{className:S["info__data--primary"],children:["Title Japanese: ",Je(e.titleJapanese)]}),h("span",{className:S["info__data--secondary"],children:["Type: ",e.type]}),h("span",{className:S["info__data--secondary"],children:["Status: ",e.status]})]}),h("div",{className:S.info__action,children:[r(qe,{size:"small",color:"primary",onClick:g,children:r(cn,{})}),r(qe,{size:"small",color:"error",onClick:f,children:r(ln,{})})]})]})})}),r(Et,{className:S.info__modal,open:n,onClose:d,children:h(ut,{className:S.info__popup,children:[r("h1",{children:"Delete anime"}),r("div",{className:S.info__warning,children:"Are you sure? You cannot undo this action."}),h("div",{className:S.info__action,children:[r(Qe,{className:S.info__button,color:"secondary",onClick:d,children:"Cancel"}),r(Qe,{className:S.info__button,variant:"contained",color:"error",onClick:v,children:s?r(Ot,{}):"Ok"})]})]})})]})},rt=i.exports.memo(gn),xn="_skeleton_5189y_1",yn="_skeleton__avatar_5189y_7",Cn="_skeleton__info_5189y_13",Sn="_skeleton__text_5189y_20";var R={skeleton:xn,skeleton__avatar:yn,skeleton__info:Cn,skeleton__text:Sn,"skeleton__text--primary":"_skeleton__text--primary_5189y_24","skeleton__text--secondary":"_skeleton__text--secondary_5189y_28"};const In=()=>h(ut,{className:R.skeleton,children:[r(ue,{className:R.skeleton__avatar,variant:"rectangular"}),h("div",{className:R.skeleton__info,children:[r(ue,{className:`${R.skeleton__text} ${R["skeleton__text--primary"]}`,variant:"text"}),r(ue,{className:`${R.skeleton__text} ${R["skeleton__text--primary"]}`,variant:"text"}),r(ue,{className:`${R.skeleton__text} ${R["skeleton__text--secondary"]}`,variant:"text"}),r(ue,{className:`${R.skeleton__text} ${R["skeleton__text--secondary"]}`,variant:"text"})]})]}),at=i.exports.memo(In),wn=10,An=()=>{const[e]=Fe(),t=dt(),o=Re(Vt),s=Re(Gt),{setLastElement:n}=an(()=>t(Wt()));i.exports.useEffect(()=>{t(Ft(e))},[t,e]);const a=o.map((d,v)=>v===o.length-1?r("div",{ref:n,children:r(rt,{anime:d})},d.id):r(rt,{anime:d},d.id)),p=Array.from(new Array(wn)).map((d,v)=>r(at,{},v));let f;return o.length===0&&(f=s?p:"No anime found!"),h(We,{children:[f,a,s&&r(at,{})]})},Ln=i.exports.memo(An),Tn="_anime__list_1gi02_1",Nn="_anime__filter_1gi02_6";var _e={anime__list:Tn,anime__filter:Nn};const kn=()=>h(Ae,{container:!0,className:_e.anime,children:[h(Ae,{lg:3,sm:5,item:!0,className:_e.anime__list,children:[r("div",{className:_e.anime__filter,children:r(rn,{})}),r(Ln,{})]}),r(Ae,{lg:9,sm:7,item:!0,className:_e.anime__detail,children:r(zt,{})})]}),Pn=i.exports.memo(kn);export{Pn as AnimePage};