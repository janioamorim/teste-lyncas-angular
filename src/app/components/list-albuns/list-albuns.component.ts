import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { ImgurAlbum } from 'src/app/shared/models/Imgurmodel';

@Component({
  selector: 'app-list-albuns',
  templateUrl: './list-albuns.component.html',
  styleUrls: ['./list-albuns.component.scss']
})
export class ListAlbunsComponent implements OnInit {

  albums: ImgurAlbum[] = new Array();

  constructor(private imagesService: ImagesService, private route: Router) { }

  ngOnInit(): void {
    this.carregarAlbuns();
  }

  carregarAlbuns() {
    this.imagesService.listarAlbuns().subscribe(
      (response: any) => {
        console.log("response", response);

        this.albums = response.data;
      },
      (error) => {
        console.error('Erro ao carregar os álbuns:', error);
      }
    );
  }

  showImages(hasgAlbum: string, idAlbum: string){
    this.route.navigate([`album/${idAlbum}/images/list-images`, hasgAlbum]);
  }



}
