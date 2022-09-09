import{r as n,j as e,F as y,k as l,ab as D,z as $,C as h,ac as A,H as N}from"./index.2dc4344e.js";import{C as x,s as S,a as C}from"./selectors.6b382056.js";import{g as v,S as _}from"./utils.c6eb80e9.js";import{B as I}from"./Button.99f37d8a.js";const j="_detail_fcuo5_1",k="_detail__media_fcuo5_6",w="_detail__poster_fcuo5_11",P="_detail__image_fcuo5_23",E="_detail__trailer_fcuo5_28",L="_detail__modal_fcuo5_32",O="_detail__popup_fcuo5_38",T="_detail__video_fcuo5_42",Y="_detail__note_fcuo5_47";var s={detail:j,detail__media:k,detail__poster:w,detail__image:P,detail__trailer:E,detail__modal:L,detail__popup:O,detail__video:T,detail__note:Y};const B="_detail__info_jx3bf_1",F="_detail__label_jx3bf_9",J="_detail__title_jx3bf_13";var a={detail__info:B,detail__label:F,detail__title:J};const z=({detail:i})=>e(y,{children:l("div",{className:a.detail__info,children:[l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"English title: "}),e("span",{className:a.detail__text,children:v(i?.titleEnglish)})]}),l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Japanese title: "}),e("span",{className:a.detail__text,children:v(i?.titleJapanese)})]}),l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Type: "}),e("span",{className:a.detail__text,children:i?.type})]}),l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Status: "}),e("span",{className:a.detail__text,children:i?.status})]}),l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Airing: "}),e("span",{className:a.detail__text,children:i?.airing?"Yes":"No"})]}),l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Aired start date: "}),e("span",{className:a.detail__text,children:i?.aired?.start.toLocaleString()})]}),l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Aired end date: "}),e("span",{className:a.detail__text,children:i?.aired?.end.toLocaleString()})]}),l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Synopsis: "}),e("span",{className:a.detail__text,children:i?.synopsis})]}),l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Genres: "}),e("span",{className:a.detail__text,children:i?.genresData.map(d=>e(x,{color:"primary",label:d.name},d.id))})]}),l("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Studios: "}),e("span",{className:a.detail__text,children:i?.studiosData.map(d=>e(x,{color:"primary",label:d.name},d.id))})]})]})}),G=n.exports.memo(z),H="_detail_1hyx1_4",M="_detail__media_1hyx1_1",W="_detail__poster_1hyx1_1",q="_detail__image_1hyx1_4",K="_detail__trailer_1hyx1_1",Q="_detail__modal_1hyx1_1",R="_detail__popup_1hyx1_1",U="_detail__video_1hyx1_1",V="_detail__note_1hyx1_1",X="_detail__info_1hyx1_1",Z="_detail__label_1hyx1_1",ee="_detail__title_1hyx1_1",ae="_detail__text_1hyx1_8";var t={detail:H,detail__media:M,detail__poster:W,detail__image:q,detail__trailer:K,detail__modal:Q,detail__popup:R,detail__video:U,detail__note:V,detail__info:X,detail__label:Z,detail__title:ee,detail__text:ae};const te=()=>l("div",{className:t.detail,children:[l("div",{className:t.detail__media,children:[e("div",{className:t.detail__poster,children:e(_,{className:t.detail__image,variant:"rectangular"})}),e(_,{className:t.detail__trailer,variant:"rectangular"})]}),e("div",{className:t.detail__info,children:l("div",{className:t.detail__label,children:[e(_,{variant:"text",className:t.detail__text}),e(_,{variant:"text",className:t.detail__text}),e(_,{variant:"text",className:t.detail__text}),e(_,{variant:"text",className:t.detail__text}),e(_,{variant:"text",className:t.detail__text}),e(_,{variant:"text",className:t.detail__text}),e(_,{variant:"text",className:t.detail__text}),e(_,{variant:"text",className:t.detail__text}),e(_,{variant:"text",className:t.detail__text})]})})]}),le=n.exports.memo(te),ie=()=>{const d=D().animeId;if(d===void 0||isNaN(Number.parseInt(d,10)))throw new Error("Invalid anime id!");const o=Number.parseInt(d,10),[u,r]=n.exports.useState(!1),[f,m]=n.exports.useState(!1),p=$(),c=h(g=>S(g,o)),b=h(C);return n.exports.useEffect(()=>{p(A(o))},[p,o]),b?e(le,{}):c===void 0?e("h1",{children:"No anime with given id"}):l("div",{className:s.detail,children:[l("div",{className:s.detail__media,children:[e("div",{className:s.detail__poster,children:e("img",{onClick:()=>r(!0),role:"button",className:s.detail__image,alt:"Anime poster",src:c?.image})}),e(I,{onClick:()=>m(!0),className:s.detail__trailer,type:"button",variant:"contained",color:"info",children:"Watch trailer!"})]}),e(G,{detail:c}),e(N,{className:s.detail__modal,open:u,onClose:()=>r(!1),children:e("img",{className:s.detail__popup,alt:"Anime poster",src:c?.image})}),e(N,{className:s.detail__modal,open:f,onClose:()=>m(!1),children:c?.trailerYoutube?e("iframe",{className:s.detail__video,src:`https://www.youtube.com/embed/${c?.trailerYoutube}`}):e("div",{className:s.detail__note,children:"Trailer not found!"})})]})},_e=n.exports.memo(ie),se=()=>e(_e,{}),re=n.exports.memo(se);export{re as AnimeDetailPage};
