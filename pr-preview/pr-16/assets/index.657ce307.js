import{r as m,z as n,k as r,F as p,j as e,aO as d,ai as c,aP as A}from"./index.6dfe4708.js";import{u as l}from"./useAppNavigate.8d611167.js";import{M as h}from"./ManagementForm.17ce9e0c.js";import"./selectors.d31cee7a.js";import"./object.6a8e3184.js";import"./TextField.2e304f5a.js";import"./selectors.da4ecf15.js";import"./Button.a3fb5f08.js";const g="_title_18woe_1";var f={title:g};const u=()=>{const i=n(),{navigateWithSearchParams:a}=l(),o=s=>{i(d(s)).then(t=>{t.payload instanceof c?a(`/anime/${t.payload.id}`):a(A)})};return r(p,{children:[e("h1",{className:f.title,children:"Add new Anime"}),e(h,{onSubmit:o})]})},S=m.exports.memo(u);export{S as AnimeAddPage};