(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{hNdL:function(t,e,n){"use strict";n.r(e),n.d(e,"ListAlbunsModule",function(){return v});var r=n("ofXK"),i=n("tyNb"),c=n("fXoL"),a=n("tk/3"),o=n("z6cu"),b=n("JIr8");let s=(()=>{class t{constructor(t){this.http=t,this.apiUrl="https://api.imgur.com/3/",this.albumUrl="account/janioamorim/albums",this.token="fbbbf44bb199f376785d3e770c5b8e99bbbaa4a6",this.client_id="ce342ced9f5716a"}listarAlbuns(){const t=new a.c({Authorization:`Client-ID ${this.client_id}`});return this.http.get(`${this.apiUrl}${this.albumUrl}`,{headers:t}).pipe(Object(b.a)(this.handleError))}handleError(t){return console.error("Ocorreu um erro:",t),Object(o.a)("Erro na requisi\xe7\xe3o. Por favor, tente novamente mais tarde.")}}return t.\u0275fac=function(e){return new(e||t)(c.Xb(a.a))},t.\u0275prov=c.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n("/t3+"),l=n("bTqV"),m=n("NFeN"),p=n("Wp6s");function d(t,e){if(1&t){const t=c.Ub();c.Tb(0,"mat-card",4),c.Tb(1,"mat-card-header"),c.Tb(2,"mat-card-title"),c.xc(3),c.Sb(),c.Sb(),c.Tb(4,"div",5),c.Tb(5,"mat-icon"),c.xc(6,"photo_library"),c.Sb(),c.Sb(),c.Tb(7,"mat-card-content"),c.Tb(8,"p"),c.xc(9),c.Sb(),c.Sb(),c.Tb(10,"mat-card-actions"),c.Tb(11,"button",6),c.ac("click",function(){c.qc(t);const n=e.$implicit;return c.ec().showImages(n.id)}),c.xc(12,"Ver Fotos"),c.Sb(),c.Tb(13,"button",7),c.xc(14,"Excluir album"),c.Sb(),c.Sb(),c.Sb()}if(2&t){const t=e.$implicit,n=c.ec();c.Cb(3),c.yc(n.title.title),c.Cb(6),c.zc(" ",t.description," ")}}const f=function(){return["/album/form-album"]},h=[{path:"",component:(()=>{class t{constructor(t,e){this.imagesService=t,this.route=e}ngOnInit(){this.carregarAlbuns()}carregarAlbuns(){this.imagesService.listarAlbuns().subscribe(t=>{this.albums=t},t=>{console.error("Erro ao carregar os \xe1lbuns:",t)})}showImages(t){this.route.navigate(["album/images/list-images",t])}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(s),c.Nb(i.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-list-albuns"]],decls:9,vars:5,consts:[[1,"title-toolbar"],["mat-fab","","extended","","color","primary",3,"routerLink"],[1,"main-div"],["class","card-album","routerLinkActive","active",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"card-album"],[1,"img-album-icon"],["mat-button","",3,"click"],["mat-button",""]],template:function(t,e){1&t&&(c.Tb(0,"mat-toolbar",0),c.Tb(1,"span"),c.xc(2,"Seus Albuns"),c.Sb(),c.Tb(3,"button",1),c.Tb(4,"mat-icon"),c.xc(5,"add"),c.Sb(),c.Sb(),c.Sb(),c.Tb(6,"div",2),c.wc(7,d,15,2,"mat-card",3),c.fc(8,"async"),c.Sb()),2&t&&(c.Cb(3),c.jc("routerLink",c.kc(4,f)),c.Cb(4),c.jc("ngForOf",c.gc(8,2,e.albums)))},directives:[u.a,l.a,i.b,m.a,r.j,p.a,i.c,p.d,p.f,p.c,p.b],pipes:[r.b],styles:[".title-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-album[_ngcontent-%COMP%]{margin:10px}.img-album-icon[_ngcontent-%COMP%]{display:flex;height:120px;justify-content:center;align-items:center}.img-album-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:70px;width:70px;font-size:70px}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(h)],i.e]}),t})(),v=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[r.c,g,u.b,p.e,l.b,m.b]]}),t})()}}]);