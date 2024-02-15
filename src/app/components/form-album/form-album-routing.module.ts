import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAlbumComponent } from './form-album.component';


const routes: Routes = [
  { path: '', component: FormAlbumComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormAlbumRoutingModule { }
