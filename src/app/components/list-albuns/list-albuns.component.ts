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

  albums: ImgurAlbum[];

  constructor(private imagesService: ImagesService, private route: Router) { }

  ngOnInit(): void {
    this.carregarAlbuns();
  }

  carregarAlbuns() {
    this.imagesService.listarAlbuns().subscribe(
      (response) => {
        this.albums = response;
      },
      (error) => {
        console.error('Erro ao carregar os álbuns:', error);
      }
    );
  }

  showImages(id: string){
    this.route.navigate(['album/images/list-images', id]);
  }



}
