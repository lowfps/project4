import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//Modelo de datos
import { Programa } from "./../models/programa";

const baseUrl = 'http://localhost:8098/api/programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramaServiceService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Programa[]> {
    return this.http.get<Programa[]>(baseUrl);
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
