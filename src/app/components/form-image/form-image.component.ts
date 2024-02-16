import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-image',
  templateUrl: './form-image.component.html',
  styleUrls: ['./form-image.component.scss']
})
export class FormImageComponent implements OnInit {

  @ViewChild('fileInput') fileInput: any;
  selectedFileName: string | undefined;
  file: File;
  formNewImage: FormGroup
  hasgAlbum: string

  constructor(
    private imagesService: ImagesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hasgAlbum = params['hashAlbum'];
    });
    this.formNewImage = this.fb.group({
      file: [''],
      title: ['',[Validators.required]],
    })
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.selectedFileName = this.file.name;
  }

  sendImageApi(){
    let title = this.formNewImage.controls.title.value
    this.imagesService.uploadImage(this.file, title)
        .subscribe(
          (response: any) => {
            this.addImagetoAlbum([response.data.deletehash])
          },
          error => {
            console.error('Erro ao adicionar imagem:', error);
          }
        );
    }

  addImagetoAlbum(deletehash: string[]) {
      this.imagesService.addImageToAlbum(this.hasgAlbum, deletehash)
        .subscribe(
          () => {
            this.goBack();
          },
          error => {
            console.error('Erro ao adicionar imagem ao álbum:', error);
          }
        );
    }

    goBack(): void {
      this.location.back();
    }
  }

