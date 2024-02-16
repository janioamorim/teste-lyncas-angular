import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormImageComponent } from './form-image.component';
import { FormImageRoutingModule } from './form-image-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormImageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormImageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class FormImageModule { }
