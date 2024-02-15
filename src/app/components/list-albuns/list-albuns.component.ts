import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-list-albuns',
  templateUrl: './list-albuns.component.html',
  styleUrls: ['./list-albuns.component.scss']
})
export class ListAlbunsComponent implements OnInit {

  albuns: any[];

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.carregarAlbuns();
    // this.imagesService.generateAccessTokenPOST().subscribe(
    //   data => {
    //    console.log("data", data);

    //   },
    // )
  }

  carregarAlbuns() {

    this.imagesService.listarAlbuns().subscribe(
      (response) => {
        console.log("response", response);

        this.albuns = response;
      },
      (error) => {
        console.error('Erro ao carregar os álbuns:', error);
      }
    );
  }



}
