import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormImageComponent } from './form-image.component';

const routes: Routes = [
  { path: '', component: FormImageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormImageRoutingModule { }
