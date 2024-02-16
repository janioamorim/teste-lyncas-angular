import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbunsComponent } from './list-albuns.component';
import { ListRoutingModule } from './list-albuns-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [ListAlbunsComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ListAlbunsModule { }
