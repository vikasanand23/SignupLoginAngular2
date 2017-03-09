webpackJsonp([1,4],{118:function(t,e,n){"use strict";var i=n(1),o=n(355),r=n(709);n.n(r);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.router=t}return t.prototype.signupUser=function(t){var e=this;firebase.auth().createUserWithEmailAndPassword(t.email,t.password).then(function(t){e.router.navigate(["/signin"])}).catch(function(t){console.log(t)})},t.prototype.signinUser=function(t){var e=this;firebase.auth().signInWithEmailAndPassword(t.email,t.password).then(function(t){e.router.navigate(["/animations"])}).catch(function(t){console.log("ERROR"+t)})},t.prototype.logout=function(){firebase.auth().signOut(),this.router.navigate(["/signin"])},t.prototype.isAuthenticated=function(){var t=new r.Subject;return firebase.auth().onAuthStateChanged(function(e){e?t.next(!0):t.next(!1)}),t.asObservable()},t=a([n.i(i.c)(),s("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},361:function(t,e,n){"use strict";var i=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.state="normal",this.wildState="normal",this.list=["Milk","Water","Juice"]}return t.prototype.onAdd=function(t){this.list.push(t)},t.prototype.onDelete=function(t){this.list.splice(this.list.indexOf(t),1)},t.prototype.onAnimate=function(){"normal"==this.state?this.state="highlighted":this.state="normal","normal"==this.wildState?this.wildState="highlighted":this.wildState="normal"},t.prototype.onShrink=function(){this.wildState="shrunken"},t.prototype.animationStarted=function(t){console.log(t)},t.prototype.animationEnded=function(t){console.log(t)},t.prototype.ngOnInit=function(){},t=o([n.i(i._5)({selector:"app-animation",template:n(706),animations:[n.i(i._6)("divState",[n.i(i._7)("normal",n.i(i._8)({"background-color":"#9bd855",transform:"translateX(0)"})),n.i(i._7)("highlighted",n.i(i._8)({"background-color":"green",transform:"translateX(100px)"})),n.i(i._9)("normal <=> highlighted",n.i(i._10)(300))]),n.i(i._6)("wildState",[n.i(i._7)("normal",n.i(i._8)({"background-color":"#9bd855",transform:"translateX(0) scale(1)"})),n.i(i._7)("highlighted",n.i(i._8)({"background-color":"green",transform:"translateX(100px) scale(1)"})),n.i(i._7)("shrunken",n.i(i._8)({"background-color":"green",transform:"translateX(0) scale(0.5)"})),n.i(i._9)("normal => highlighted",n.i(i._10)(300)),n.i(i._9)("highlighted => normal",n.i(i._10)(800)),n.i(i._9)("shrunken <=> *",[n.i(i._8)({"background-color":"orange"}),n.i(i._10)(1e3,n.i(i._8)({borderRadius:"50px"})),n.i(i._10)(500)])]),n.i(i._6)("list1",[n.i(i._7)("in",n.i(i._8)({opacity:0,transform:"translateX(0)"})),n.i(i._9)("void => *",[n.i(i._8)({opacity:1,transform:"translateX(-100px)"}),n.i(i._10)(300)]),n.i(i._9)("* => void",[n.i(i._10)(300,n.i(i._8)({opacity:0,transform:"translateX(100px)"}))])]),n.i(i._6)("list2",[n.i(i._7)("in",n.i(i._8)({opacity:0,transform:"translateX(0)"})),n.i(i._9)("void => *",[n.i(i._10)(1e3,n.i(i._11)([n.i(i._8)({transform:"translateX(-100px)",opacity:0,offset:0}),n.i(i._8)({transform:"translateX(-50px)",opacity:.5,offset:.3}),n.i(i._8)({transform:"translateX(-20px)",opacity:.8,offset:.8}),n.i(i._8)({transform:"translateX(0px)",opacity:1,offset:1})]))]),n.i(i._9)("* => void",[n.i(i._12)([n.i(i._10)(300,n.i(i._8)({color:"red"})),n.i(i._10)(300,n.i(i._8)({opacity:0,transform:"translateX(100px)"}))])])]),n.i(i._6)("shrinkOut",[n.i(i._7)("in",n.i(i._8)({height:"*"})),n.i(i._9)("void => *",[n.i(i._8)({height:"*"}),n.i(i._10)(2500,n.i(i._8)({height:0}))]),n.i(i._9)("* => void",[n.i(i._8)({height:"*"}),n.i(i._10)(2500,n.i(i._8)({height:0}))])])]}),r("design:paramtypes",[])],t)}()},362:function(t,e,n){"use strict";var i=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o([n.i(i._5)({selector:"app-protected",template:"\n    <h1>Protected - you shouldn't be here if not signed in</h1>\n    "}),r("design:paramtypes",[])],t)}()},363:function(t,e,n){"use strict";var i=n(1),o=n(118);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.authService=t}return t.prototype.canActivate=function(t,e){return this.authService.isAuthenticated().first()},t=r([n.i(i.c)(),a("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},364:function(t,e,n){"use strict";var i=n(1),o=n(224),r=n(118);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.fb=t,this.authService=e,this.error=!1,this.errorMessage=""}return t.prototype.onSignin=function(){var t=this;console.log("SignIN"),this.authService.signinUser(this.myForm.value),setTimeout(function(){console.log("dfhdf"+t.errorMessage)},5e3)},t.prototype.ngOnInit=function(){this.myForm=this.fb.group({email:["",o.c.required],password:["",o.c.required]})},t=a([n.i(i._5)({template:'\n        <h3>Please sign up to use all features</h3>\n        <span class="error" *ngIf="error">{{ msg }}</span>\n        <form [formGroup]="myForm" (ngSubmit)="onSignin()">\n            <div class="form-group">\n                <label for="email">E-Mail</label>\n                <input formControlName="email" type="email" id="email" class="form-control">\n            </div>\n            <div class="form-group">\n                <label for="password">Password</label>\n                <input formControlName="password" type="password" id="password" class="form-control">\n            </div>\n            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign In</button>\n            <a routerLink="/signup" class="alc">Don\'t have an account?</a>\n        </form>\n            \n\n    '}),s("design:paramtypes",["function"==typeof(e=void 0!==o.d&&o.d)&&e||Object,"function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],t);var e,c}()},365:function(t,e,n){"use strict";var i=n(1),o=n(224),r=n(118);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.fb=t,this.authService=e,this.error=!1,this.errorMessage=""}return t.prototype.onSignup=function(){this.authService.signupUser(this.myForm.value)},t.prototype.ngOnInit=function(){this.myForm=this.fb.group({email:["",o.c.compose([o.c.required,this.isEmail])],password:["",o.c.required],confirmPassword:["",o.c.compose([o.c.required,this.isEqualPassword.bind(this)])]})},t.prototype.isEmail=function(t){if(!t.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))return{noEmail:!0}},t.prototype.isEqualPassword=function(t){return this.myForm?t.value!==this.myForm.controls.password.value?{passwordsNotMatch:!0}:void 0:{passwordsNotMatch:!0}},t=a([n.i(i._5)({template:'\n        <h3>Please sign up to use all features</h3>\n        <form [formGroup]="myForm" (ngSubmit)="onSignup()">\n            <div class="form-group">\n                <label for="email">E-Mail</label>\n                <input formControlName="email" type="email" id="email" #email class="form-control">\n                <span *ngIf="!email.pristine && email.errors != null && email.errors[\'noEmail\']">Invalid mail address</span>\n        \n            </div>\n            <div class="form-group">\n                <label for="password">Password</label>\n                <input formControlName="password" type="password" id="password" class="form-control">\n            </div>\n            <div class="form-group">\n                <label for="confirm-password">Confirm Password</label>\n                <input formControlName="confirmPassword" type="password" id="confirm-password" #confirmPassword class="form-control">\n                <span *ngIf="!confirmPassword.pristine && confirmPassword.errors != null && confirmPassword.errors[\'passwordsNotMatch\']">Passwords do not match</span>\n            </div>\n            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign Up</button>\n            <a routerLink="/signin" class="alc">Already have an account?</a>\n            \n        </form>\n    '}),s("design:paramtypes",["function"==typeof(e=void 0!==o.d&&o.d)&&e||Object,"function"==typeof(c=void 0!==r.a&&r.a)&&c||Object])],t);var e,c}()},431:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=431},432:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(519),o=n(1),r=n(553),a=n(550);r.a.production&&n.i(o.a)(),n.i(i.a)().bootstrapModule(a.a)},549:function(t,e,n){"use strict";var i=n(1);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.title="app works!"}return t=o([n.i(i._5)({selector:"app-root",template:n(707),styles:[n(705)]}),r("design:paramtypes",[])],t)}()},550:function(t,e,n){"use strict";var i=n(168),o=n(1),r=n(224),a=n(515),s=n(549),c=n(362),l=n(364),u=n(365),f=n(552),p=n(551),d=n(118),h=n(363),m=n(361);n.d(e,"a",function(){return y});var v=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=function(){function t(){}return t=v([n.i(o.b)({declarations:[s.a,c.a,l.a,u.a,f.a,m.a],imports:[i.a,r.a,a.a,r.b,p.a],providers:[d.a,h.a],bootstrap:[s.a]}),g("design:paramtypes",[])],t)}()},551:function(t,e,n){"use strict";var i=n(355),o=n(365),r=n(364),a=n(362),s=n(361),c=n(363);n.d(e,"a",function(){return u});var l=[{path:"",redirectTo:"/signup",pathMatch:"full"},{path:"signup",component:o.a},{path:"signin",component:r.a},{path:"protected",component:a.a,canActivate:[c.a]},{path:"animations",component:s.a,canActivate:[c.a]}],u=i.b.forRoot(l)},552:function(t,e,n){"use strict";var i=n(1),o=n(118);n.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){var e=this;this.authService=t,this.isAuthenticated=!1,this.subscription=this.authService.isAuthenticated().subscribe(function(t){return e.isAuthenticated=t})}return t.prototype.isAuth=function(){return this.isAuthenticated},t.prototype.onLogout=function(){return this.authService.logout()},t.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},t=r([n.i(i._5)({selector:"app-header",template:'\n    <header>\n        <nav class="navbar navbar-default">\n            <div class="container-fluid">\n                <ul class="nav navbar-nav">\n                    <li routerLinkActive = "active"><a [routerLink]="[\'signup\']">Sign Up</a></li>\n                    <li routerLinkActive = "active"><a [routerLink]="[\'signin\']">Sign In</a></li>\n                    <li routerLinkActive = "active"><a [routerLink]="[\'protected\']">Protected</a></li>\n                    <li routerLinkActive = "active"><a [routerLink]="[\'animations\']">Animations</a></li>\n                </ul>\n                <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">\n                    <li routerLinkActive = "active"><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>\n                </ul>\n            </div>\n\n        </nav>\n\n    </header>\n  ',styles:[]}),a("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},553:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},705:function(t,e){t.exports=""},706:function(t,e){t.exports='\n<h1>Animations</h1>\n<button class="btn btn-primary" (click) = "onAnimate()">Animate!</button>\n<button class="btn btn-primary" (click) = "onShrink()">Shrink!</button>\n<hr>\n<div \n     style="height:100px;width:100px" \n     [@divState]="state" \n     (@divState.start)="animationStarted($event)"\n     (@divState.done)="animationEnded($event)"\n     ></div><br>\n<div style="height:100px;width:100px" [@wildState]="wildState"></div><br>\n<div style="height:40px;width:100px;background:red" [@shrinkOut]></div>\n   \n<hr>\n<div class="row">\n<div class="col-xs-12">\n  <input type="text" #input>\n  <button class="btn btn-primary" (click)="onAdd(input.value)">Add Item!</button>\n  <hr>\n  <ul class="list-group">\n    <li\n        class="list-group-item"\n        (click)="onDelete(item)"\n        [@list1]\n        *ngFor="let item of list">\n        {{ item }}\n    </li>\n  </ul>\n    <button class="btn btn-primary" (click)="onDelete(input.value)">Delete Item!</button>\n</div>\n</div>\n<hr>\n<div class="row">\n    <div class="col-xs-12">\n        <ul class="list-group">\n            <li\n                class="list-group-item"\n                (click)="onDelete(item)"\n                [@list2]\n                *ngFor="let item of list">\n                {{ item }}\n            </li>\n        </ul>\n    </div>\n</div>\n'},707:function(t,e){t.exports='<app-header></app-header>\n<div class="container">\n  <div class="row">\n    <div class="col-md-10 col-md-offset-1">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>'},974:function(t,e,n){t.exports=n(432)}},[974]);