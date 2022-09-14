import{r as n,j as e,F as y,k as t,ab as D,z as $,C as N,ac as A,H as x}from"./index.74b9e046.js";import{C as v,s as S,a as C}from"./selectors.4ad016f4.js";import{g as r,S as _}from"./utils.6a90e120.js";import{B as I}from"./Button.453738bc.js";const P="_detail_fcuo5_1",j="_detail__media_fcuo5_6",k="_detail__poster_fcuo5_11",w="_detail__image_fcuo5_23",E="_detail__trailer_fcuo5_28",L="_detail__modal_fcuo5_32",O="_detail__popup_fcuo5_38",T="_detail__video_fcuo5_42",Y="_detail__note_fcuo5_47";var s={detail:P,detail__media:j,detail__poster:k,detail__image:w,detail__trailer:E,detail__modal:L,detail__popup:O,detail__video:T,detail__note:Y};const B="_detail__info_jx3bf_1",F="_detail__label_jx3bf_9",J="_detail__title_jx3bf_13";var a={detail__info:B,detail__label:F,detail__title:J};const z=({detail:i})=>e(y,{children:t("div",{className:a.detail__info,children:[t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"English title: "}),e("span",{className:a.detail__text,children:r(i?.titleEnglish)})]}),t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Japanese title: "}),e("span",{className:a.detail__text,children:r(i?.titleJapanese)})]}),t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Type: "}),e("span",{className:a.detail__text,children:i?.type})]}),t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Status: "}),e("span",{className:a.detail__text,children:i?.status})]}),t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Airing: "}),e("span",{className:a.detail__text,children:i?.airing?"Yes":"No"})]}),t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Aired start date: "}),e("span",{className:a.detail__text,children:r(i?.aired?.start?.toLocaleString())})]}),t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Aired end date: "}),t("span",{className:a.detail__text,children:["(getPlaceholder",i?.aired?.end?.toLocaleString()]})]}),t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Synopsis: "}),e("span",{className:a.detail__text,children:i?.synopsis})]}),t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Genres: "}),e("span",{className:a.detail__text,children:i?.genresData.map(d=>e(v,{color:"primary",label:d.name},d.id))})]}),t("div",{className:a.detail__label,children:[e("span",{className:a.detail__title,children:"Studios: "}),e("span",{className:a.detail__text,children:i?.studiosData.map(d=>e(v,{color:"primary",label:d.name},d.id))})]})]})}),G=n.exports.memo(z),H="_detail_1hyx1_4",M="_detail__media_1hyx1_1",W="_detail__poster_1hyx1_1",q="_detail__image_1hyx1_4",K="_detail__trailer_1hyx1_1",Q="_detail__modal_1hyx1_1",R="_detail__popup_1hyx1_1",U="_detail__video_1hyx1_1",V="_detail__note_1hyx1_1",X="_detail__info_1hyx1_1",Z="_detail__label_1hyx1_1",ee="_detail__title_1hyx1_1",ae="_detail__text_1hyx1_8";var l={detail:H,detail__media:M,detail__poster:W,detail__image:q,detail__trailer:K,detail__modal:Q,detail__popup:R,detail__video:U,detail__note:V,detail__info:X,detail__label:Z,detail__title:ee,detail__text:ae};const te=()=>t("div",{className:l.detail,children:[t("div",{className:l.detail__media,children:[e("div",{className:l.detail__poster,children:e(_,{className:l.detail__image,variant:"rectangular"})}),e(_,{className:l.detail__trailer,variant:"rectangular"})]}),e("div",{className:l.detail__info,children:t("div",{className:l.detail__label,children:[e(_,{variant:"text",className:l.detail__text}),e(_,{variant:"text",className:l.detail__text}),e(_,{variant:"text",className:l.detail__text}),e(_,{variant:"text",className:l.detail__text}),e(_,{variant:"text",className:l.detail__text}),e(_,{variant:"text",className:l.detail__text}),e(_,{variant:"text",className:l.detail__text}),e(_,{variant:"text",className:l.detail__text}),e(_,{variant:"text",className:l.detail__text})]})})]}),le=n.exports.memo(te),ie=()=>{const d=D().animeId;if(d===void 0||isNaN(Number.parseInt(d,10)))throw new Error("Invalid anime id!");const o=Number.parseInt(d,10),[u,m]=n.exports.useState(!1),[f,p]=n.exports.useState(!1),h=$(),c=N(g=>S(g,o)),b=N(C);return n.exports.useEffect(()=>{h(A(o))},[h,o]),b?e(le,{}):c===void 0?e("h1",{children:"No anime with given id"}):t("div",{className:s.detail,children:[t("div",{className:s.detail__media,children:[e("div",{className:s.detail__poster,children:e("img",{onClick:()=>m(!0),role:"button",className:s.detail__image,alt:"Anime poster",src:c?.image})}),e(I,{onClick:()=>p(!0),className:s.detail__trailer,type:"button",variant:"contained",color:"info",children:"Watch trailer!"})]}),e(G,{detail:c}),e(x,{className:s.detail__modal,open:u,onClose:()=>m(!1),children:e("img",{className:s.detail__popup,alt:"Anime poster",src:c?.image})}),e(x,{className:s.detail__modal,open:f,onClose:()=>p(!1),children:c?.trailerYoutube?e("iframe",{className:s.detail__video,src:`https://www.youtube.com/embed/${c?.trailerYoutube}`}):e("div",{className:s.detail__note,children:"Trailer not found!"})})]})},_e=n.exports.memo(ie),se=()=>e(_e,{}),re=n.exports.memo(se);export{re as AnimeDetailPage};