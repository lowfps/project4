import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionalidad } from '../models/funcionalidad';

const baseUrl = 'http://localhost:8098/api/funcion';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionalidad[]> {
    return this.http.get<Funcionalidad[]>(baseUrl);
  }

  // get(id: any): Observable<Tutorial> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/create`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title: any): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  // }
}
