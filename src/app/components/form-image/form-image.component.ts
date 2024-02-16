import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';

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
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hasgAlbum = params['hashAlbum'];
    });
    this.formNewImage = this.fb.group({
      file: [''],
    })
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.selectedFileName = this.file.name;
  }

  sendImageApi(){
    this.imagesService.uploadImage(this.file)
        .subscribe(
          (response: any) => {
            console.log('Imagem adicionada com sucesso:', response);
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
          response => {
            console.log('Imagem adicionada com sucesso:', response);
          },
          error => {
            console.error('Erro ao adicionar imagem ao álbum:', error);
          }
        );
    }
  }

