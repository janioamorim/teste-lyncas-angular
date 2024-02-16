import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private imagesService: ImagesService,
    private route: Router,
    private snackBar: MatSnackBar) { }

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

  showImages(album: any){
    let idAlbum =  album.id;
    let hasgAlbum =  album.deletehash;
    let titleAlbum =  album.title;
    this.imagesService.setTitleAlbum(titleAlbum);

    this.route.navigate([`album/${idAlbum}/images/list-images`, hasgAlbum]);
  }

  deleteAlbum(albumHash: string){
    this.imagesService.deleteAlbum(albumHash).subscribe(
      (response: any) => {
        this.carregarAlbuns();
      },
      (error) => {
        console.error('Erro ao carregar os álbuns:', error);
      }
    );
  }

  openSnackBar(albumHash: string) {
    let snackbar= this.snackBar.open("Tem certeza que vai excluir o álbum?", "Sim",  {
    duration: 2500,
    panelClass: ['snackbar']
  });

  snackbar.afterDismissed().subscribe((info)=>{
    if (info.dismissedByAction === true) {
      this.deleteAlbum(albumHash);
    }

  })
}



}
