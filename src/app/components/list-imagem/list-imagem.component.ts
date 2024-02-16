import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { ImgurAlbum } from 'src/app/shared/models/Imgurmodel';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-imagem',
  templateUrl: './list-imagem.component.html',
  styleUrls: ['./list-imagem.component.scss']
})
export class ListImagemComponent implements OnInit {

  images: ImgurAlbum[] = new Array();
  hasgAlbum: string;
  idAlbum: string;
  titleAlbum: string;

  constructor(
    private imagesService: ImagesService,
    private route: Router,
    private routeActive: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.routeActive.params.subscribe(params => {
      this.hasgAlbum = params['hasgAlbum'];
      this.idAlbum = params['idAlbum'];
    });
    this.loadImages();

    this.imagesService.titleAlbum.subscribe(title => {
      this.titleAlbum = title;
    });
  }

  loadImages() {
    this.imagesService.imagesByAlbum(this.idAlbum).subscribe(
      (response: any) => {
        this.images = response.data;
      },
      (error) => {
        console.error('Erro ao carregar os álbuns:', error);
      }
    );
  }

  deleteImage(imageHash: string){
    this.imagesService.deleteImage(imageHash).subscribe(
      () => {
        this.loadImages();
      },
      (error) => {
        console.error('Erro ao carregar os álbuns:', error);
      }
    );
  }

  showFormImage(){
    this.route.navigate([`album/${this.hasgAlbum}/images/form-images`]);
  }

  showImage(link: string){
    window.open(link, '_blank');
  }

  goBack(): void {
    this.location.back();
  }

  openSnackBar(imageHash: string) {
      let snackbar= this.snackBar.open("Tem certeza que deseja excluir a imagem?", "Sim",  {
      duration: 2500,
      panelClass: ['snackbar']
    });

    snackbar.afterDismissed().subscribe((info)=>{
      if (info.dismissedByAction === true) {
        this.deleteImage(imageHash);
      }

    })
  }


}
