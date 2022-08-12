"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[933],{8933:(Ne,D,u)=>{u.r(D),u.d(D,{AuthModule:()=>Fe});var v=u(8692),f=u(9900),C=u(9638),g=u(8659),T=u(9665),te=u(8697),x=u(757),re=u(807),ne=u(2355),P=u(8248);function j(e,t,n,o){var s,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(a<3?s(i):a>3?s(t,n,i):s(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}var I=u(5887),O=u(8023),ae=u(4813),r=(u(985),u(9018),u(818),u(4537)),fe=(u(4882),u(3528));const me=r.GuJ,de=Symbol("__destroy"),N=Symbol("__decoratorApplied");function M(e){return"string"==typeof e?Symbol(`__destroy__${e}`):de}function L(e,t){e[t]||(e[t]=new O.x)}function R(e,t){e[t]&&(e[t].next(),e[t].complete(),e[t]=null)}function J(e){e instanceof ae.w0&&e.unsubscribe()}function $(e,t){return function(){if(e&&e.call(this),R(this,M()),t.arrayName&&function he(e){Array.isArray(e)&&e.forEach(J)}(this[t.arrayName]),t.checkProperties)for(const n in this)t.blackList?.includes(n)||J(this[n])}}function B(e={}){return t=>{!function pe(e){return!!e[me]}(t)?function ye(e,t){e.prototype.ngOnDestroy=$(e.prototype.ngOnDestroy,t)}(t,e):function ve(e,t){const n=e.\u0275pipe;n.onDestroy=$(n.onDestroy,t)}(t,e),function ge(e){e.prototype[N]=!0}(t)}}function G(e,t){return n=>{const o=M(t);return"string"==typeof t?function _e(e,t,n){const o=e[t];L(e,n),e[t]=function(){o.apply(this,arguments),R(this,n),e[t]=o}}(e,t,o):L(e,o),n.pipe((0,fe.R)(e[o]))}}Symbol("CheckerHasBeenSet");var X=u(4121),H=u(1528),z=u(8168),K=u(3568),V=u(4945),W=u(3382),k=u(3647),ee=u(6815);function Oe(e,t){1&e&&(r.TgZ(0,"mat-error"),r._uU(1," Email is "),r.TgZ(2,"strong"),r._uU(3,"required"),r.qZA()())}function Ze(e,t){1&e&&(r.TgZ(0,"mat-error"),r._uU(1," Password is "),r.TgZ(2,"strong"),r._uU(3,"required"),r.qZA()())}let h=class{constructor(t,n,o,a){this.formBuilder=t,this.authService=n,this.tokenService=o,this.navigateService=a,this.loginForm=this.formBuilder.group({email:["",f.kI.required],password:["",f.kI.required]}),this.loginError$=new X.X(""),this.subscriptionManager$=new O.x}onSubmit(){this.loginForm.markAllAsTouched(),!this.loginForm.invalid&&this.authService.login({email:this.loginForm.value.email??"",password:this.loginForm.value.password??""}).pipe((0,H.w)(t=>this.tokenService.set(t)),(0,z.b)(()=>this.navigateService.navigateToHome()),G(this),(0,K.K)(t=>this.handleLoginError(t))).subscribe()}handleLoginError(t){return t instanceof I.o&&this.loginError$.next(t.detail),(0,V.of)(null)}};function Ce(e,t){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const n=t.$implicit;r.xp6(1),r.hij(" ",n," ")}}function Te(e,t){1&e&&(r.TgZ(0,"mat-error"),r._uU(1," Email is "),r.TgZ(2,"strong"),r._uU(3,"required"),r.qZA()())}function xe(e,t){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const n=t.$implicit;r.xp6(1),r.hij(" ",n," ")}}function Se(e,t){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const n=t.$implicit;r.xp6(1),r.hij(" ",n," ")}}function Ae(e,t){if(1&e&&(r.TgZ(0,"mat-error"),r._uU(1),r.qZA()),2&e){const n=t.$implicit;r.xp6(1),r.hij(" ",n," ")}}function De(e,t){1&e&&(r.TgZ(0,"mat-error"),r._uU(1," Password is "),r.TgZ(2,"strong"),r._uU(3,"required"),r.qZA()())}function Pe(e,t){1&e&&(r.TgZ(0,"mat-error"),r._uU(1," Confirm password must match "),r.qZA())}function Ee(e,t){1&e&&(r.TgZ(0,"mat-error"),r._uU(1," Confirm password is "),r.TgZ(2,"strong"),r._uU(3,"required"),r.qZA()())}h.\u0275fac=function(t){return new(t||h)(r.Y36(f.qu),r.Y36(W.e),r.Y36(k.B),r.Y36(ee.o))},h.\u0275cmp=r.Xpm({type:h,selectors:[["camp-login"]],decls:18,vars:7,consts:[[1,"title"],[1,"form",3,"formGroup","ngSubmit"],["appearance","fill",1,"form__field"],["type","email","matInput","","placeholder","Ex. pat@example.com","formControlName","email"],[4,"ngIf"],["type","password","matInput","","placeholder","Type your password.","formControlName","password"],["type","submit","mat-flat-button","","color","primary",1,"form__submit",3,"disabled"]],template:function(t,n){1&t&&(r.TgZ(0,"h1",0),r._uU(1,"Log in"),r.qZA(),r.TgZ(2,"form",1),r.NdJ("ngSubmit",function(){return n.onSubmit()}),r.TgZ(3,"mat-form-field",2)(4,"mat-label"),r._uU(5,"Email"),r.qZA(),r._UZ(6,"input",3),r.YNc(7,Oe,4,0,"mat-error",4),r.qZA(),r.TgZ(8,"mat-form-field",2)(9,"mat-label"),r._uU(10,"Password"),r.qZA(),r._UZ(11,"input",5),r.YNc(12,Ze,4,0,"mat-error",4),r.qZA(),r.TgZ(13,"mat-error"),r._uU(14),r.ALo(15,"async"),r.qZA(),r.TgZ(16,"button",6),r._uU(17,"Log in"),r.qZA()()),2&t&&(r.xp6(2),r.Q6J("formGroup",n.loginForm),r.xp6(5),r.Q6J("ngIf",n.loginForm.controls.email.hasError("required")),r.xp6(5),r.Q6J("ngIf",n.loginForm.controls.password.hasError("required")),r.xp6(2),r.hij(" ",r.lcZ(15,5,n.loginError$)," "),r.xp6(2),r.Q6J("disabled",n.loginForm.invalid))},dependencies:[v.O5,g.TO,g.KE,g.hX,T.Nt,f._Y,f.Fj,f.JJ,f.JL,f.sg,f.u,C.lW,v.Ov],styles:[".title[_ngcontent-%COMP%]{font-family:var(--header-font);text-align:center;margin:20px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;width:100%;margin-bottom:50px}.form__field[_ngcontent-%COMP%]{min-width:500px;margin:15px 0}.form__submit[_ngcontent-%COMP%]{min-width:500px;margin-top:15px}"],changeDetection:0}),h=j([B()],h);const Z=function(){return[]};let y=class{constructor(t,n,o,a){this.formBuilder=t,this.tokenService=n,this.authService=o,this.navigateService=a,this.errorList$=new X.X({}),this.subscriptionManager$=new O.x,this.registerForm=this.formBuilder.group({email:["",f.kI.required],firstName:[""],lastName:[""],password:["",f.kI.required],confirmPassword:["",[f.kI.required]]},{validators:this.checkPasswords})}onSubmit(){this.registerForm.markAllAsTouched(),!this.registerForm.invalid&&this.authService.register({email:this.registerForm.value.email??"",firstName:this.registerForm.value.firstName??"",lastName:this.registerForm.value.lastName??"",password:this.registerForm.value.password??""}).pipe((0,H.w)(t=>this.tokenService.set(t)),(0,z.b)(()=>this.navigateService.navigateToHome()),G(this),(0,K.K)(t=>this.handleRegisterError(t))).subscribe()}checkPasswords(t){const n=t.get("password")?.value,o=t.get("confirmPassword")?.value;return n!==o?(t.get("confirmPassword")?.setErrors({notSame:!0}),{notSame:!0}):null}handleRegisterError(t){if(t instanceof I.o){this.errorList$.next(t.data);for(const n of Object.keys(t.data))this.registerForm.get(n)?.setErrors({invalidData:!0})}return(0,V.of)(null)}};y.\u0275fac=function(t){return new(t||y)(r.Y36(f.qu),r.Y36(k.B),r.Y36(W.e),r.Y36(ee.o))},y.\u0275cmp=r.Xpm({type:y,selectors:[["camp-register"]],decls:37,vars:22,consts:[[1,"title"],[1,"form",3,"formGroup","ngSubmit"],["appearance","fill",1,"form__field"],[1,"form__field--label"],["autoComplete","true","type","email","matInput","","placeholder","Ex. pat@example.com","formControlName","email",1,"form__field--input"],[4,"ngFor","ngForOf"],[4,"ngIf"],["autoComplete","true","type","text","matInput","","placeholder","Cristiano","formControlName","lastName",1,"form__field--input"],["autoComplete","true","type","text","matInput","","placeholder","Ronaldo","formControlName","firstName",1,"form__field--input"],["autoComplete","true","type","password","matInput","","placeholder","Type your password.","formControlName","password",1,"form__field--input"],["autoComplete","true","type","password","matInput","","placeholder","Confirm your password.","formControlName","confirmPassword",1,"form__field--input"],["type","submit","mat-flat-button","","color","primary",1,"form__submit",3,"disabled"]],template:function(t,n){if(1&t&&(r.TgZ(0,"h1",0),r._uU(1,"Register"),r.qZA(),r.TgZ(2,"form",1),r.NdJ("ngSubmit",function(){return n.onSubmit()}),r.TgZ(3,"mat-form-field",2)(4,"mat-label",3),r._uU(5,"Email"),r.qZA(),r._UZ(6,"input",4),r.YNc(7,Ce,2,1,"mat-error",5),r.ALo(8,"async"),r.YNc(9,Te,4,0,"mat-error",6),r.qZA(),r.TgZ(10,"mat-form-field",2)(11,"mat-label",3),r._uU(12,"Last name"),r.qZA(),r._UZ(13,"input",7),r.YNc(14,xe,2,1,"mat-error",5),r.ALo(15,"async"),r.qZA(),r.TgZ(16,"mat-form-field",2)(17,"mat-label",3),r._uU(18,"First name"),r.qZA(),r._UZ(19,"input",8),r.YNc(20,Se,2,1,"mat-error",5),r.ALo(21,"async"),r.qZA(),r.TgZ(22,"mat-form-field",2)(23,"mat-label",3),r._uU(24,"Password"),r.qZA(),r._UZ(25,"input",9),r.YNc(26,Ae,2,1,"mat-error",5),r.ALo(27,"async"),r.YNc(28,De,4,0,"mat-error",6),r.qZA(),r.TgZ(29,"mat-form-field",2)(30,"mat-label",3),r._uU(31,"Confirm password"),r.qZA(),r._UZ(32,"input",10),r.YNc(33,Pe,2,0,"mat-error",6),r.YNc(34,Ee,4,0,"mat-error",6),r.qZA(),r.TgZ(35,"button",11),r._uU(36," Register "),r.qZA()()),2&t){let o,a,i,s;r.xp6(2),r.Q6J("formGroup",n.registerForm),r.xp6(5),r.Q6J("ngForOf",null!==(o=null==(o=r.lcZ(8,10,n.errorList$))?null:o.email)&&void 0!==o?o:r.DdM(18,Z)),r.xp6(2),r.Q6J("ngIf",n.registerForm.controls.email.hasError("required")),r.xp6(5),r.Q6J("ngForOf",null!==(a=null==(a=r.lcZ(15,12,n.errorList$))?null:a.last_name)&&void 0!==a?a:r.DdM(19,Z)),r.xp6(6),r.Q6J("ngForOf",null!==(i=null==(i=r.lcZ(21,14,n.errorList$))?null:i.first_name)&&void 0!==i?i:r.DdM(20,Z)),r.xp6(6),r.Q6J("ngForOf",null!==(s=null==(s=r.lcZ(27,16,n.errorList$))?null:s.password)&&void 0!==s?s:r.DdM(21,Z)),r.xp6(2),r.Q6J("ngIf",n.registerForm.controls.password.hasError("required")),r.xp6(5),r.Q6J("ngIf",n.registerForm.controls.confirmPassword.hasError("notSame")),r.xp6(1),r.Q6J("ngIf",n.registerForm.controls.confirmPassword.hasError("required")),r.xp6(1),r.Q6J("disabled",n.registerForm.invalid)}},dependencies:[v.sg,v.O5,g.TO,g.KE,g.hX,T.Nt,f._Y,f.Fj,f.JJ,f.JL,f.sg,f.u,C.lW,v.Ov],styles:[".title[_ngcontent-%COMP%]{font-family:var(--header-font);text-align:center;margin:20px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;width:100%;margin-bottom:50px}.form__field[_ngcontent-%COMP%]{min-width:500px;margin:15px 0}.form__submit[_ngcontent-%COMP%]{min-width:500px;margin-top:15px}"],changeDetection:0}),y=j([B()],y);const je=[{path:"login",canActivate:[x.e],component:h},{path:"register",canActivate:[x.e],component:y}];let Ue=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[P.Bz.forChild(je),P.Bz]}),e})(),Fe=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[re.Q,x.e],imports:[v.ez,te.Cq,T.c,g.lN,f.UX,f.u5,C.ot,ne.m,Ue]}),e})()}}]);