import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Inventarioproducto } from '../modelos/inventarioproducto.model';
@Injectable({
  providedIn: 'root'
})
export class InventarioproductoService {

  constructor(private http: HttpClient) { }
  listar(id:string): Observable<Inventarioproducto[]> {
    return this.http.get<Inventarioproducto[]>(`${environment.url_gateway}/inventarioproducto/${id}`);}
    
eliminar(id:string){
    return this.http.delete<Inventarioproducto>(`${environment.url_gateway}/inventarioproducto/${id}`,);
}
getInventario(id: string): Observable<Inventarioproducto> {
  return this.http.get<Inventarioproducto>(`${environment.url_gateway}/inventarioproducto/${id}`);
}
crear(elInventarioproducto: Inventarioproducto) {
  return this.http.post(`${environment.url_gateway}/inventarioproducto`, elInventarioproducto);
}
editar(id:string,elInventarioproducto: Inventarioproducto) {
  return this.http.put(`${environment.url_gateway}/inventarioproducto/${id}`, elInventarioproducto);
}
}
