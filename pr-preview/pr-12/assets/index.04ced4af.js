import{r as p,u as w,a as N,b as F,s as k,j as e,c as l,B as R,F as S,a2 as P,d as v,T as E,H as x,L as C}from"./index.d6c0e9f9.js";import{c as L,a as t,f as A,u as q,F as $,b as j,s as a,d as r,C as M,M as O,e as d}from"./AuthPage.module.a05c1e55.js";const i="This field is required!",T=L().shape({email:t().email("Invalid email.").required(i),password:t().required(i),retypePassword:t().required(i).oneOf([A("password"),null],"Passwords must match")}),G=()=>{const f=w(),{snackbarConfig:o,openSnackbar:n,handleCloseSnackbar:h}=q(),g=N(),m=F(k),u=e($,{initialValues:{email:"",firstName:"",lastName:"",password:"",retypePassword:""},validationSchema:T,onSubmit:(y,{setFieldError:b})=>{g(P(y)).then(s=>{if(s.payload instanceof v){for(const c of Object.keys(s.payload.data))s.payload.data[c].forEach(_=>b(c,_));n(s.payload.detail,"error",3e3)}else s.payload instanceof E?f(x):n("Unknown error!","error",3e3)})},children:l(j,{className:a.form__content,children:[e(r,{label:"Email: ",name:"email",placeholder:"EX: abc@example.com",type:"email",className:a.form__field}),e(r,{label:"First name: ",name:"firstName",placeholder:"Jane",className:a.form__field}),e(r,{label:"Last name: ",name:"lastName",placeholder:"Doe",className:a.form__field}),e(r,{label:"Password: ",name:"password",type:"password",placeholder:"Enter your password",className:a.form__field}),e(r,{label:"Retype password: ",name:"retypePassword",type:"password",placeholder:"Retype our password",className:a.form__field}),e(R,{type:"submit",variant:"contained",color:"success",className:`${a.form__field} ${a["form__field--submit"]}`,disabled:m,children:m?e(M,{size:"20px",color:"inherit"}):"Submit"})]})});return l(S,{children:[u,e(O,{open:o.open,onClose:h,message:o.message,severity:o.severity})]})},I=p.exports.memo(G),B="/login",D=()=>l("div",{className:d.form,children:[e("h1",{className:d.form__title,children:"Register"}),e(I,{}),e(C,{to:B,children:"Already have an account? Login!"})]}),U=p.exports.memo(D);export{U as RegisterPage};
