import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidad } from '../models/entidad.model';

@Injectable({ providedIn: 'root' })
export class EntidadService {
  private apiUrl = 'http://localhost:8080/api/entidades';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(this.apiUrl);
  }

  create(entidad: Omit<Entidad, 'id'>): Observable<Entidad> {
    return this.http.post<Entidad>(this.apiUrl, entidad);
  }
}