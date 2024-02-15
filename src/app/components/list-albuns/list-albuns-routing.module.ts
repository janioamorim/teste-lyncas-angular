import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAlbunsComponent } from './list-albuns.component';

const routes: Routes = [
  { path: '', component: ListAlbunsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
