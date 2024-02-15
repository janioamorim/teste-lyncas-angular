import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListImagemComponent } from './list-imagem.component';

const routes: Routes = [
  { path: '', component: ListImagemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListImagemRoutingModule { }
