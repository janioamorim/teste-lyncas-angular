(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{hNdL:function(t,n,e){"use strict";e.r(n),e.d(n,"ListAlbunsModule",function(){return w});var a=e("ofXK"),c=e("tyNb"),i=e("fXoL"),r=e("lA0O"),o=e("dNgK"),s=e("/t3+"),b=e("bTqV"),l=e("Qu3c"),m=e("NFeN"),u=e("Wp6s");function d(t,n){if(1&t){const t=i.Ub();i.Tb(0,"mat-card",6),i.Tb(1,"mat-card-header"),i.Tb(2,"mat-card-title"),i.zc(3),i.Sb(),i.Sb(),i.Tb(4,"div",7),i.Tb(5,"mat-icon"),i.zc(6,"photo_library"),i.Sb(),i.Sb(),i.Tb(7,"mat-card-content"),i.Tb(8,"p"),i.zc(9),i.Sb(),i.Sb(),i.Tb(10,"mat-card-actions"),i.Tb(11,"button",8),i.ac("click",function(){i.rc(t);const e=n.$implicit;return i.ec(2).showImages(e)}),i.zc(12,"Ver Fotos"),i.Sb(),i.Tb(13,"button",8),i.ac("click",function(){i.rc(t);const e=n.$implicit;return i.ec(2).openSnackBar(e.deletehash)}),i.zc(14,"Excluir album"),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=n.$implicit;i.Cb(3),i.Ac(t.title),i.Cb(6),i.Bc(" ",t.description," ")}}function p(t,n){if(1&t&&(i.Rb(0),i.xc(1,d,15,2,"mat-card",5),i.Qb()),2&t){const t=i.ec();i.Cb(1),i.jc("ngForOf",t.albums)}}function g(t,n){1&t&&(i.Tb(0,"mat-card",9),i.Tb(1,"mat-card-content"),i.Tb(2,"mat-label"),i.zc(3,"N\xe3o existe nenhuma \xe1lbum cadastrado"),i.Sb(),i.Sb(),i.Sb())}const f=function(){return["/album/form-album"]},h=[{path:"",component:(()=>{class t{constructor(t,n,e){this.imagesService=t,this.route=n,this.snackBar=e,this.albums=new Array}ngOnInit(){this.carregarAlbuns()}carregarAlbuns(){this.imagesService.listarAlbuns().subscribe(t=>{console.log("response",t),this.albums=t.data},t=>{console.error("Erro ao carregar os \xe1lbuns:",t)})}showImages(t){let n=t.id,e=t.deletehash;this.imagesService.setTitleAlbum(t.title),this.route.navigate([`album/${n}/images/list-images`,e])}deleteAlbum(t){this.imagesService.deleteAlbum(t).subscribe(t=>{this.carregarAlbuns()},t=>{console.error("Erro ao carregar os \xe1lbuns:",t)})}openSnackBar(t){this.snackBar.open("Tem certeza que vai excluir o \xe1lbum?","Sim",{duration:2500,panelClass:["snackbar"]}).afterDismissed().subscribe(n=>{!0===n.dismissedByAction&&this.deleteAlbum(t)})}}return t.\u0275fac=function(n){return new(n||t)(i.Nb(r.a),i.Nb(c.b),i.Nb(o.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-list-albuns"]],decls:10,vars:4,consts:[[1,"title-toolbar"],["mat-fab","","matTooltip","Novo \xc1lbum","matTooltipPosition","above","extended","","color","primary",3,"routerLink"],[1,"main-div"],[4,"ngIf","ngIfElse"],["noData",""],["class","card-album",4,"ngFor","ngForOf"],[1,"card-album"],[1,"img-album-icon"],["mat-button","",3,"click"],[1,"card-nodata"]],template:function(t,n){if(1&t&&(i.Tb(0,"mat-toolbar",0),i.Tb(1,"span"),i.zc(2,"Seus Albuns"),i.Sb(),i.Tb(3,"button",1),i.Tb(4,"mat-icon"),i.zc(5,"add"),i.Sb(),i.Sb(),i.Sb(),i.Tb(6,"div",2),i.xc(7,p,2,1,"ng-container",3),i.xc(8,g,4,0,"ng-template",null,4,i.yc),i.Sb()),2&t){const t=i.pc(9);i.Cb(3),i.jc("routerLink",i.lc(3,f)),i.Cb(4),i.jc("ngIf",n.albums.length>0)("ngIfElse",t)}},directives:[s.a,b.a,l.a,c.c,m.a,a.k,a.j,u.a,u.d,u.f,u.c,u.b],styles:[".title-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-album[_ngcontent-%COMP%]{margin:10px;flex:1 1 20%;max-width:calc(25% - 20px);min-height:225px}.card-album[_ngcontent-%COMP%]   .img-album-icon[_ngcontent-%COMP%]{margin:20px;text-align:center}.card-album[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:70px;width:70px;font-size:70px}.card-nodata[_ngcontent-%COMP%]{width:100%;margin-top:20px;text-align:center}@media only screen and (max-width:2000px){.main-div[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start}.card-album[_ngcontent-%COMP%]{flex:1 1 25%;max-width:calc(17% - 20px);min-height:225px}}@media only screen and (max-width:1350px){.card-album[_ngcontent-%COMP%]{max-width:calc(22% - 20px)}}@media only screen and (max-width:1200px){.main-div[_ngcontent-%COMP%]{justify-content:space-between}.card-album[_ngcontent-%COMP%]{max-width:calc(33.33% - 20px)}}@media only screen and (max-width:900px){.card-album[_ngcontent-%COMP%]{flex:1 1 33.33%}}@media only screen and (max-width:600px){.card-album[_ngcontent-%COMP%]{flex:1 1 50%}}"]}),t})()}];let x=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(n){return new(n||t)},imports:[[c.e.forChild(h)],c.e]}),t})(),w=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(n){return new(n||t)},imports:[[a.c,x,s.b,u.e,b.b,m.b,l.b]]}),t})()}}]);