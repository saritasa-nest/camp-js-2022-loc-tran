import{r as d,u as b,a as _,b as F,s as L,j as e,c as r,B as y,F as E,l as S,d as k,T as v,H as w,L as x}from"./index.d6c0e9f9.js";import{c as C,a as t,u as N,F as P,b as A,s as a,d as l,C as T,M as q,e as c}from"./AuthPage.module.a05c1e55.js";const m="This field is required!",M=C().shape({email:t().email("Invalid email.").required(m),password:t().required(m)}),$=()=>{const{snackbarConfig:s,openSnackbar:n,handleCloseSnackbar:p}=N(),g=b(),u=_(),i=F(L),h=e(P,{initialValues:{email:"",password:""},onSubmit:f=>{u(S(f)).then(o=>{o.payload instanceof k?n(o.payload.detail,"error"):o.payload instanceof v?g(w):n("Unknown Error!","error")})},validationSchema:M,children:r(A,{className:a.form__content,children:[e(l,{label:"Email: ",name:"email",placeholder:"EX: abc@example.com",type:"email",className:a.form__field}),e(l,{label:"Password: ",name:"password",type:"password",placeholder:"Enter your password",className:a.form__field}),e(y,{type:"submit",variant:"contained",color:"success",className:`${a.form__field} ${a["form__field--submit"]}`,disabled:i,children:i?e(T,{size:"20px",color:"inherit"}):"Login"})]})});return r(E,{children:[h,e(q,{open:s.open,onClose:p,message:s.message,severity:s.severity})]})},j=d.exports.memo($),G="/register",I=()=>r("div",{className:c.form,children:[e("h1",{className:c.form__title,children:"Login"}),e(j,{}),e(x,{to:G,children:"Create new account!"})]}),z=d.exports.memo(I);export{z as LoginPage};
