import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { ImgurAlbum } from 'src/app/shared/models/Imgurmodel';

@Component({
  selector: 'app-list-imagem',
  templateUrl: './list-imagem.component.html',
  styleUrls: ['./list-imagem.component.scss']
})
export class ListImagemComponent implements OnInit {

  images: ImgurAlbum[] = new Array();
  hasgAlbum: string;
  idAlbum: string;

  constructor(
    private imagesService: ImagesService,
    private route: Router,
    private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeActive.params.subscribe(params => {
      this.hasgAlbum = params['hasgAlbum'];
      this.idAlbum = params['idAlbum'];
    });
    this.loadImages();
  }

  loadImages() {
    this.imagesService.imagesByAlbum(this.idAlbum).subscribe(
      (response: any) => {
        console.log("images",response);

        this.images = response.data;
      },
      (error) => {
        console.error('Erro ao carregar os álbuns:', error);
      }
    );
  }

  showFormImage(){
    this.route.navigate([`album/${this.hasgAlbum}/images/form-images`]);
  }


}
