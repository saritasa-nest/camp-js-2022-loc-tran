"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[385],{8385:(J,p,r)=>{r.r(p),r.d(p,{AuthModule:()=>F});var s=r(8692),i=r(92),c=r(9638),m=r(8659),f=r(9665),v=r(8697),u=r(1915),A=r(2355),g=r(1312),x=r(4762),y=r(5887),d=r(3804),T=r(4121),h=r(4541),o=r(4537),C=r(3382);function Z(t,n){if(1&t&&(o.TgZ(0,"span",8),o._uU(1),o.qZA()),2&t){const e=n.text;o.xp6(1),o.Oqu(e)}}function E(t,n){if(1&t&&(o.TgZ(0,"mat-error"),o._uU(1),o.qZA()),2&t){const e=n.ngIf;o.xp6(1),o.hij(" ",e," ")}}let l=class{constructor(n,e,a){this.formBuilder=n,this.authService=e,this.router=a,this.loginForm=this.formBuilder.nonNullable.group({email:["",i.kI.required],password:["",i.kI.required]}),this.loginError$=new T.X("")}onSubmit(){this.loginForm.markAllAsTouched(),!this.loginForm.invalid&&this.authService.login({email:this.loginForm.getRawValue().email,password:this.loginForm.getRawValue().password}).pipe((0,d.t)(this)).subscribe({next:()=>this.router.navigate([h.e]),error:n=>this.handleLoginError(n)})}handleLoginError(n){n instanceof y.X&&this.loginError$.next(n.detail)}};l.\u0275fac=function(n){return new(n||l)(o.Y36(i.qu),o.Y36(C.e),o.Y36(g.F0))},l.\u0275cmp=o.Xpm({type:l,selectors:[["camp-login"]],decls:17,vars:7,consts:[[1,"title"],["errorTailor","",1,"form",3,"formGroup","ngSubmit"],["tpl",""],["appearance","fill",1,"form__field"],["type","email","matInput","","placeholder","Ex. pat@example.com","formControlName","email",3,"controlErrorsTpl"],["type","password","matInput","","placeholder","Type your password.","formControlName","password",3,"controlErrorsTpl"],[4,"ngIf"],["type","submit","mat-flat-button","","color","primary",1,"form__submit",3,"disabled"],[1,"control-error"]],template:function(n,e){if(1&n&&(o.TgZ(0,"h1",0),o._uU(1,"Log in"),o.qZA(),o.TgZ(2,"form",1),o.NdJ("ngSubmit",function(){return e.onSubmit()}),o.YNc(3,Z,2,1,"ng-template",null,2,o.W1O),o.TgZ(5,"mat-form-field",3)(6,"mat-label"),o._uU(7,"Email"),o.qZA(),o._UZ(8,"input",4),o.qZA(),o.TgZ(9,"mat-form-field",3)(10,"mat-label"),o._uU(11,"Password"),o.qZA(),o._UZ(12,"input",5),o.qZA(),o.YNc(13,E,2,1,"mat-error",6),o.ALo(14,"async"),o.TgZ(15,"button",7),o._uU(16," Log in "),o.qZA()()),2&n){const a=o.MAs(4);o.xp6(2),o.Q6J("formGroup",e.loginForm),o.xp6(6),o.Q6J("controlErrorsTpl",a),o.xp6(4),o.Q6J("controlErrorsTpl",a),o.xp6(1),o.Q6J("ngIf",o.lcZ(14,5,e.loginError$)),o.xp6(2),o.Q6J("disabled",e.loginForm.invalid)}},dependencies:[s.O5,m.TO,m.KE,m.hX,f.Nt,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,c.lW,u.kH,u.m6,s.Ov],styles:[".title[_ngcontent-%COMP%]{font-family:var(--header-font);text-align:center;margin:20px}.form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;width:100%;margin-bottom:50px}.form__field[_ngcontent-%COMP%]{min-width:500px;margin:15px 0}.form__submit[_ngcontent-%COMP%]{min-width:500px;margin-top:15px}.control-error[_ngcontent-%COMP%]{width:100%;margin-top:.25rem;font-size:12px;color:var(--font-color-error)}"],changeDetection:0}),l=(0,x.gn)([(0,d.c)()],l);const L=[{path:"login",component:l},{path:"register",component:h.y}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[g.Bz.forChild(L),g.Bz]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,v.Cq,f.c,m.lN,i.UX,i.u5,c.ot,A.m,M,u.OX]}),t})()}}]);