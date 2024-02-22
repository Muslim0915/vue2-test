(function(){"use strict";var t={9721:function(t,o,e){var n=e(144),r=function(){var t=this,o=t._self._c;return o("div",[o("AppNavbar"),o("router-view")],1)},i=[],s=e(1178),l=e(6190),u=e(2118),a=e(3687),c=function(){var t=this,o=t._self._c;return o(u.Z,{attrs:{fluid:""}},[o(s.Z,{attrs:{color:"deep-purple accent-4",dence:"",dark:""}},[o(a.Z),o(l.Z,{staticClass:"btn ml-3",attrs:{outlined:""}},[o("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Главная")])],1),o(l.Z,{staticClass:"btn ml-3",attrs:{outlined:""}},[o("router-link",{staticClass:"link",attrs:{to:"/photos"}},[t._v("Фотографии")])],1)],1)],1)},h=[],p={},f=p,d=e(1001),g=(0,d.Z)(f,c,h,!1,null,"5d7fb2d7",null),v=g.exports,P={name:"App",components:{AppNavbar:v}},m=P,Z=(0,d.Z)(m,r,i,!1,null,null,null),b=Z.exports,_=e(8345),w=function(){var t=this,o=t._self._c;return o("div",[t._v(" Main ")])},y=[],k={},x=k,O=(0,d.Z)(x,w,y,!1,null,"51d16ace",null),D=O.exports,C=e(1713),$=function(){var t=this,o=t._self._c;return o(u.Z,[o("PhotoForm",{on:{addPhoto:function(o){return t.addPhoto(o)}}}),o(C.Z,[t._l(t.$store.getters.getAllPhotos,(function(t){return o("AppPhoto",{key:t.id,attrs:{photo:t}})})),o("PhotoDialog")],2)],1)},j=[],A=(e(560),e(9582)),V=e(4886),T=e(266),S=e(5495),M=function(){var t=this,o=t._self._c;return o(T.Z,{attrs:{cols:"4"}},[o(A.Z,{on:{click:t.openPhoto}},[o(V.EB,[t._v(" "+t._s(t.photo.title)+" ")]),o(V.ZB,[o(S.Z,{attrs:{src:t.photo.url,height:"200",width:"200"}})],1)],1)],1)},B=[],F=e(629),E={props:{photo:{type:Object,required:!0}},methods:{...(0,F.OI)(["setCurrentPhoto","showDialog","hideDialog"]),openPhoto(){this.setCurrentPhoto(this.photo),this.showDialog()}}},N=E,R=(0,d.Z)(N,M,B,!1,null,"a3ebc700",null),q=R.exports,H=e(1234),I=e(7148),L=function(){var t=this,o=t._self._c;return o(u.Z,[o(C.Z,[o(I.Z,{model:{value:t.title,callback:function(o){t.title=o},expression:"title"}}),o(H.Z,{model:{value:t.img,callback:function(o){t.img=o},expression:"img"}}),o(l.Z,{on:{click:function(o){return t.addPhoto()}}},[t._v("Добавить")])],1)],1)},U=[],z={data:()=>({title:"",img:null}),methods:{addPhoto(){const t=new FileReader;t.onload=()=>{let o={id:Date.now(),title:this.title,url:t.result};this.$emit("addPhoto",o),console.log(o),this.title="",this.img=null},t.readAsDataURL(this.img)}}},G=z,J=(0,d.Z)(G,L,U,!1,null,"c2596cfa",null),K=J.exports,Q=e(998),W=e(9202),X=function(){var t=this,o=t._self._c;return o(Q.Z,[o(W.Z,{attrs:{"max-width":"600"},on:{"click:outside":function(o){return t.$store.commit("hideDialog")}},model:{value:t.$store.getters.getDialogVisible,callback:function(o){t.$set(t.$store.getters,"getDialogVisible",o)},expression:"$store.getters.getDialogVisible"}},[o(A.Z,[o(V.EB,[t._v(" "+t._s(t.fullTitle)+" ")]),o(V.ZB,[o(S.Z,{attrs:{src:t.$store.getters.getCurrentPhoto.url}})],1)],1)],1)],1)},Y=[],tt={computed:{fullTitle(){return`Название файла - ${this.$store.getters.getCurrentPhoto.title}`}}},ot=tt,et=(0,d.Z)(ot,X,Y,!1,null,"34274b87",null),nt=et.exports,rt={components:{PhotoDialog:nt,PhotoForm:K,AppPhoto:q},async mounted(){await this.fetchPhotos()},methods:{...(0,F.nv)(["fetchPhotos"]),addPhoto(t){this.$store.getters.getAllPhotos.push(t),console.log(this.photos)},openPhoto(t){this.currentPhoto=t,this.dialogVisible=!0}}},it=rt,st=(0,d.Z)(it,$,j,!1,null,"4ebdba69",null),lt=st.exports;n.ZP.use(_.ZP);const ut=[{path:"/",name:"Home",component:D},{path:"/photos",component:lt}];var at=new _.ZP({mode:"history",routes:ut}),ct=e(8864);n.ZP.use(ct.Z);var ht=new ct.Z({}),pt=e(5121),ft={state:{photos:[],dialogVisible:!1,currentPhoto:{}},mutations:{setPhotos(t,o){t.photos=o},showDialog(t){t.dialogVisible=!0},hideDialog(t){t.dialogVisible=!1},setCurrentPhoto(t,o){t.currentPhoto=o}},getters:{getAllPhotos:t=>t.photos,getDialogVisible:t=>t.dialogVisible,getCurrentPhoto:t=>t.currentPhoto},actions:{setPhotos({commit:t,state:o},e){t("setPhotos",[...o.photos,e])},fetchPhotos(t){pt.Z.get("https://jsonplaceholder.typicode.com/photos?_limit=10").then((o=>t.commit("setPhotos",o.data)))}}};n.ZP.use(F.ZP);var dt=new F.ZP.Store({modules:{photosModule:ft}});n.ZP.config.productionTip=!1,n.ZP.prototype.axios=pt.Z,new n.ZP({router:at,vuetify:ht,store:dt,render:t=>t(b)}).$mount("#app")}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,i){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],i=t[c][2];for(var l=!0,u=0;u<n.length;u++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[u])}))?n.splice(u--,1):(l=!1,i<s&&(s=i));if(l){t.splice(c--,1);var a=r();void 0!==a&&(o=a)}}return o}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,i,s=n[0],l=n[1],u=n[2],a=0;if(s.some((function(o){return 0!==t[o]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(u)var c=u(e)}for(o&&o(n);a<s.length;a++)i=s[a],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},n=self["webpackChunkvue2"]=self["webpackChunkvue2"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(9721)}));n=e.O(n)})();
//# sourceMappingURL=app.e34e6669.js.map