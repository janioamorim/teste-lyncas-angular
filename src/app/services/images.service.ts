import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://api.imgur.com/3/'
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]>{
    return this.http.get<any[]>(url);
  }

}
