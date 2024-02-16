import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAlbumRoutingModule } from './form-album-routing.module';
import { FormAlbumComponent } from './form-album.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormAlbumComponent],
  imports: [
    CommonModule,
    FormAlbumRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class FormAlbumModule { }
