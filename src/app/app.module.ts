import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './shared/material/material.module';
import { ListAlbunsComponent } from './components/list-albuns/list-albuns.component';
import { RouterModule, Routes } from '@angular/router';
import { FormAlbumComponent } from './components/form-album/form-album.component';
import { HttpClientModule } from '@angular/common/http';
import { ListImagemComponent } from './components/list-imagem/list-imagem.component';

const routes: Routes = [
  { path: 'album/list-albuns', loadChildren: () => import('./components/list-albuns/list-albuns.module').then(m => m.ListAlbunsModule) },
  { path: 'album/form-album', loadChildren: () => import('./components/form-album/form-album.module').then(m => m.FormAlbumModule) },
  { path: 'album/images/list-images', loadChildren: () => import('./components/list-imagem/list-imagem.module').then(m => m.ListImagemModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // ListImagemComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
