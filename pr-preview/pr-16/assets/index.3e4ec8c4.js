import{r as n,k as r,j as s,z as d,C as t,aL as i,F as p}from"./index.6dfe4708.js";import{s as m,a as h}from"./selectors.da4ecf15.js";const l="_card_1rf1o_1";var G={card:l};const f=({genre:e})=>r("div",{className:G.card,children:[s("h2",{children:e.name}),r("span",{children:["Id - ",e.id]})]}),x=n.exports.memo(f),g=()=>{const e=d(),c=t(m),o=t(h);return n.exports.useEffect(()=>{e(i())},[e]),o?s("div",{children:"Loading"}):r(p,{children:[s("h1",{children:"Genres"}),c.map(a=>s(x,{genre:a},a.id))]})},L=n.exports.memo(g);export{L as GenresPage};
