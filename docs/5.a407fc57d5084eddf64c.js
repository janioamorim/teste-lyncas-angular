(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{hNdL:function(t,r,e){"use strict";e.r(r),e.d(r,"ListAlbunsModule",function(){return S});var a=e("ofXK"),n=e("tyNb"),b=e("fXoL"),o=e("tk/3"),c=e("z6cu"),i=e("JIr8");let s=(()=>{class t{constructor(t){this.http=t,this.apiUrl="https://api.imgur.com/3/",this.albumUrl="account/janioamorim/albums",this.token="fbbbf44bb199f376785d3e770c5b8e99bbbaa4a6",this.client_id="ce342ced9f5716a"}listarAlbuns(){const t=new o.c({Authorization:`Client-ID ${this.client_id}`});return this.http.get(`${this.apiUrl}${this.albumUrl}`,{headers:t}).pipe(Object(i.a)(this.handleError))}handleError(t){return console.error("Ocorreu um erro:",t),Object(c.a)("Erro na requisi\xe7\xe3o. Por favor, tente novamente mais tarde.")}}return t.\u0275fac=function(r){return new(r||t)(b.Xb(o.a))},t.\u0275prov=b.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e("/t3+"),l=e("bTqV"),m=e("NFeN"),d=e("Wp6s");const p=function(){return["/album/form-album"]},h=[{path:"",component:(()=>{class t{constructor(t){this.imagesService=t}ngOnInit(){this.carregarAlbuns()}carregarAlbuns(){this.imagesService.listarAlbuns().subscribe(t=>{console.log("response",t),this.albuns=t},t=>{console.error("Erro ao carregar os \xe1lbuns:",t)})}}return t.\u0275fac=function(r){return new(r||t)(b.Nb(s))},t.\u0275cmp=b.Hb({type:t,selectors:[["app-list-albuns"]],decls:37,vars:2,consts:[[1,"title-toolbar"],["mat-fab","","extended","","color","primary",3,"routerLink"],[1,"main-div"],[1,"card-album"],[1,"img-album-icon"],["mat-button",""]],template:function(t,r){1&t&&(b.Tb(0,"mat-toolbar",0),b.Tb(1,"span"),b.xc(2,"Seus Albuns"),b.Sb(),b.Tb(3,"button",1),b.Tb(4,"mat-icon"),b.xc(5,"add"),b.Sb(),b.Sb(),b.Sb(),b.Tb(6,"div",2),b.Tb(7,"mat-card",3),b.Tb(8,"mat-card-header"),b.Tb(9,"mat-card-title"),b.xc(10,"Viagem Dubai"),b.Sb(),b.Sb(),b.Tb(11,"div",4),b.Tb(12,"mat-icon"),b.xc(13,"photo_library"),b.Sb(),b.Sb(),b.Tb(14,"mat-card-content"),b.Tb(15,"p"),b.xc(16," Aqui vai uma descri\xe7\xe3o breve do album. "),b.Sb(),b.Sb(),b.Tb(17,"mat-card-actions"),b.Tb(18,"button",5),b.xc(19,"Ver Fotos"),b.Sb(),b.Tb(20,"button",5),b.xc(21,"Excluir album"),b.Sb(),b.Sb(),b.Sb(),b.Tb(22,"mat-card",3),b.Tb(23,"mat-card-header"),b.Tb(24,"mat-card-title"),b.xc(25,"F\xe9rias 2022"),b.Sb(),b.Sb(),b.Tb(26,"div",4),b.Tb(27,"mat-icon"),b.xc(28,"photo_library"),b.Sb(),b.Sb(),b.Tb(29,"mat-card-content"),b.Tb(30,"p"),b.xc(31," Aqui vai uma descri\xe7\xe3o breve do album. "),b.Sb(),b.Sb(),b.Tb(32,"mat-card-actions"),b.Tb(33,"button",5),b.xc(34,"Ver Fotos"),b.Sb(),b.Tb(35,"button",5),b.xc(36,"Excluir album"),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&t&&(b.Cb(3),b.jc("routerLink",b.kc(1,p)))},directives:[u.a,l.a,n.a,m.a,d.a,d.d,d.f,d.c,d.b],styles:[".title-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-album[_ngcontent-%COMP%]{margin:10px}.img-album-icon[_ngcontent-%COMP%]{display:flex;height:120px;justify-content:center;align-items:center}.img-album-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:70px;width:70px;font-size:70px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(r){return new(r||t)},imports:[[n.c.forChild(h)],n.c]}),t})(),S=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(r){return new(r||t)},imports:[[a.c,f,u.b,d.e,l.b,m.b]]}),t})()}}]);