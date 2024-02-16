import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagesService } from 'src/app/services/images.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.scss']
})
export class FormAlbumComponent implements OnInit {
  formNewAlbum: FormGroup;
  constructor(
    private fb: FormBuilder,
    private imagesService: ImagesService,
    private location: Location) { }

  ngOnInit(): void {
    this.formNewAlbum = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(20)]],
    })
  }


  saveNewAlbum(){
    let title = this.formNewAlbum.controls.title.value;
    let description = this.formNewAlbum.controls.description.value;

    this.imagesService.addAlbum(title, description).subscribe(
      (response: any) => {
        this.goBack()
      },
      (error) => {
        console.error('Erro ao carregar os álbuns:', error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
