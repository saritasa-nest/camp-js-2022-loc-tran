import{o as t,r as n,h as r,j as s,d as i,u as c,p,q as h}from"./index.2e9af81e.js";const l=t(e=>e.genres.genres,e=>e),m=t(e=>e.genres.isLoading,e=>e),g="_card_1rf1o_1";var G={card:g};const f=({genre:e})=>r("div",{className:G.card,children:[s("h2",{children:e.name}),r("span",{children:["Id - ",e.id]})]}),u=n.exports.memo(f),x=()=>{const e=i(),o=c(l),d=c(m);return n.exports.useEffect(()=>{e(p())},[e]),d?s("div",{children:"Loading"}):r(h,{children:[s("h1",{children:"Genres"}),o.map(a=>s(u,{genre:a},a.id))]})},L=n.exports.memo(x);export{L as GenresPage};
