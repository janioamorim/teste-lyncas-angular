import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'https://api.imgur.com/3/';
  private albumUrl = 'account/janioamorim/albums';
  private token = 'fbbbf44bb199f376785d3e770c5b8e99bbbaa4a6';
  private client_id = 'ce342ced9f5716a';


  constructor(private http: HttpClient) { }

  listarAlbuns(): Observable<any[]> {
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.token}`,
    //   'Accept': '*/*',
    //   'Content-Type': 'application/json',
    //   'Origin': 'http://localhost:4200'
    // });
    const headers = new HttpHeaders({
      'Authorization': `Client-ID ${this.client_id}`
    });

    return this.http.get<any[]>(`${this.apiUrl}${this.albumUrl}`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('Ocorreu um erro:', error);
    return throwError('Erro na requisição. Por favor, tente novamente mais tarde.');
  }

}
