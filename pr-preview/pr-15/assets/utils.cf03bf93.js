import{g as w,a as x,a5 as b,s as R,_ as o,k as _,a6 as u,r as S,u as $,c as U,d as M,j as A,f as X}from"./index.6d144056.js";function j(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function N(t){return parseFloat(t)}function P(t){return w("MuiSkeleton",t)}x("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=["animation","className","component","height","style","variant","width"];let r=t=>t,p,g,m,f;const F=t=>{const{classes:a,variant:e,animation:i,hasChildren:n,width:l,height:s}=t;return M({root:["root",e,i,n&&"withChildren",n&&!l&&"fitContent",n&&!s&&"heightAuto"]},P,a)},K=b(p||(p=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),T=b(g||(g=r`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),W=R("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=j(t.shape.borderRadius)||"px",i=N(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:_(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&u(m||(m=r`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),K),({ownerState:t,theme:a})=>t.animation==="wave"&&u(f||(f=r`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),T,(a.vars||a).palette.action.hover)),E=S.exports.forwardRef(function(a,e){const i=$({props:a,name:"MuiSkeleton"}),{animation:n="pulse",className:l,component:s="span",height:d,style:v,variant:k="text",width:C}=i,h=U(i,B),c=o({},i,{animation:n,component:s,variant:k,hasChildren:Boolean(h.children)}),y=F(c);return A(W,o({as:s,ref:e,className:X(y.root,l),ownerState:c},h,{style:o({width:C,height:d},v)}))});var O=E;const V=t=>t||"Empty";export{O as S,V as g};
