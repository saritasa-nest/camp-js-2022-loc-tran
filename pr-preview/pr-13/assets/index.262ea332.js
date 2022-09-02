import{r as i,y as f,E as b,z as d,G as F,D as w,H as x,j as e,o as u,a2 as R,a3 as P,J as S,a4 as E}from"./index.71ed1f63.js";import{c as v,a as o,f as N,u as k,F as q,b as A,s as L,d as a,T as s,B as _,C,e as p}from"./AuthPage.module.6fd2ca4d.js";const t="This field is required!",j=v().shape({email:o().email("Invalid email.").required(t),password:o().required(t),retypePassword:o().required(t).oneOf([N("password"),null],"Passwords must match")}),D={email:"",firstName:"",lastName:"",password:"",retypePassword:""},G=()=>{const n=f(),{enqueueSnackbar:g}=b(),m=d(F),r=d(w);i.exports.useEffect(()=>{n(x()),r&&g(r.detail,{variant:"error"})},[r]);const l=k({initialValues:D,validationSchema:j,onSubmit:(h,{setErrors:y})=>{l.setSubmitting(!1),n(R(h)).then(c=>{c.payload instanceof P&&y(c.payload.data)})}});return e(q,{value:l,children:u(A,{className:L.form__content,children:[e(a,{margin:"normal",component:s,label:"Email: ",name:"email",placeholder:"e.g. abc@example.com",type:"email"}),e(a,{margin:"normal",component:s,label:"First name: ",name:"firstName",placeholder:"Jane"}),e(a,{margin:"normal",component:s,label:"Last name: ",name:"lastName",placeholder:"Doe"}),e(a,{margin:"normal",component:s,label:"Password: ",name:"password",type:"password",placeholder:"Enter your password"}),e(a,{margin:"normal",component:s,label:"Retype password: ",name:"retypePassword",type:"password",placeholder:"Retype your password"}),e(_,{type:"submit",variant:"contained",color:"success",disabled:m,sx:{my:3,minHeight:"50px"},children:m?e(C,{size:"20px",color:"inherit"}):"Submit"})]})})},I=i.exports.memo(G),T=()=>u("div",{className:p.form,children:[e("h1",{className:p.form__title,children:"Register"}),e(I,{}),e(S,{to:E,children:"Already have an account? Login!"})]}),J=i.exports.memo(T);export{J as RegisterPage};