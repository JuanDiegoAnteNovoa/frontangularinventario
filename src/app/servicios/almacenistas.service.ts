import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Almacenistas } from '../modelos/almacenistas.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class AlmacenistasService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Almacenistas[]> {
      return this.http.get<Almacenistas[]>(`${environment.url_gateway}/almacenista`);}
      
  eliminar(id:string){
      return this.http.delete<Almacenistas>(`${environment.url_gateway}/almacenista/${id}`,);
  }
  getAlmacenista(id: string): Observable<Almacenistas> {
    return this.http.get<Almacenistas>(`${environment.url_gateway}/almacenista/${id}`);
  }
  crear(elAlmacenista: Almacenistas) {
    return this.http.post(`${environment.url_gateway}/almacenista`, elAlmacenista);
  }
  editar(id:string,elAlmacenista: Almacenistas) {
    return this.http.put(`${environment.url_gateway}/almacenista/${id}`, elAlmacenista);
  }
}
