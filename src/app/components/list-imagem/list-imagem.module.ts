import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListImagemRoutingModule} from './list-imagem-routing.module';
import { ListImagemComponent } from './list-imagem.component';



@NgModule({
  declarations: [ListImagemComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ListImagemRoutingModule
  ]
})
export class ListImagemModule { }
