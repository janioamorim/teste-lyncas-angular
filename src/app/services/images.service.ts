import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ImgurAlbum } from '../shared/models/Imgurmodel';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'https://api.imgur.com/3/';
  private albumUrl = 'account/janioamorim/albums';
  private token = 'fbbbf44bb199f376785d3e770c5b8e99bbbaa4a6';
  private client_id = 'ce342ced9f5716a';

  private titleAlbumSource = new BehaviorSubject<string>('');
  titleAlbum = this.titleAlbumSource.asObservable();


  constructor(private http: HttpClient) { }

  setTitleAlbum(title: string) {
    this.titleAlbumSource.next(title);
  }

  headerAuth = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  listarAlbuns(): Observable<any[]> {
    return this.http.get<ImgurAlbum[]>(`${this.apiUrl}${this.albumUrl}`, { headers: this.headerAuth })
      .pipe(
        catchError(this.handleError)
      );
  }

  addImageToAlbum(albumDeleteHash: string, imageHashes: string[]): Observable<any> {
    const formData = new FormData();
    imageHashes.forEach(deleteHash => {
      formData.append('deletehashes[]', deleteHash);
    });

    return this.http.post<any>(`${this.apiUrl}album/${albumDeleteHash}/add`, formData, { headers: this.headerAuth })
    .pipe(
      catchError(this.handleError)
      );
    }

    private handleError(error: HttpErrorResponse): Observable<any> {
      console.error('Ocorreu um erro:', error);
    return throwError('Erro na requisição. Por favor, tente novamente mais tarde.');
  }

  uploadImage(file: File, title: string): Observable<any[]> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    return this.http.post<any[]>(`${this.apiUrl}upload`, formData, { headers: this.headerAuth })
      .pipe(
        catchError(this.handleError)
      );
  }

  imagesByAlbum(idAlbum: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}album/${idAlbum}/images`, { headers: this.headerAuth })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteAlbum(albumHash: string): Observable<any[]> {
    return this.http.delete<any[]>(`${this.apiUrl}album/${albumHash}`, { headers: this.headerAuth })
      .pipe(
        catchError(this.handleError)
      );
  }

  addAlbum(title: string, description: string): Observable<any[]> {
    const formData = new FormData();
    formData.append('title', title );
    formData.append('description', description );
    return this.http.post<any[]>(`${this.apiUrl}album`, formData, { headers: this.headerAuth })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteImage(imageDeleteHash: string): Observable<any[]> {
    return this.http.delete<any[]>(`${this.apiUrl}image/${imageDeleteHash}`, { headers: this.headerAuth })
      .pipe(
        catchError(this.handleError)
      );
  }


}
