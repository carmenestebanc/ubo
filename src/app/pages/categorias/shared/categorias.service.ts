import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Categorias } from './categorias.model';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CategoriasService {

  private proveedoresUrl: string;
  private activesproveedoresUrl: string;

  constructor(private http: Http,private logger: Logger,public toastr: ToastsManager,) {
    this.proveedoresUrl = environment.apiUrl+'admin/categories';

    this.activesproveedoresUrl = environment.apiUrl+'app/categories';
   }

  // Obtiene todos los Proveedores en un arreglo de tipo "Proveedor"
  // consulta proveedores usando observables
  getProveedores(): Observable<Categorias[]> {
     const categorias = this.http
      .get(this.proveedoresUrl,{headers: this._headers})
      .map(response => response.json().data as Categorias[])
      .catch(this.handleError);
    return categorias;
  }

  getActivesProveedores(): Observable<Categorias[]> {
     const categorias = this.http
      .get(this.activesproveedoresUrl,{headers: this._headers})
      .map(response => response.json().data as Categorias[])
      .catch(this.handleError);
    return categorias;
  }

  getProveedor(id: number): Observable<Categorias> {
    const url = `${this.proveedoresUrl}/${id}`;
    const categorias = this.http
        .get(url, {headers: this._headers})
        .map(response => response.json().data as Categorias)
        .catch(this.handleError);
        this.logger.info (categorias);
    return categorias;
  }
// Crea Proveedor
// @param
  crearProveedor(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
        .post(this.proveedoresUrl, body, {headers: this._headers})
        .map(response => response.json())
        .catch(this.handleError);
  }
  // Actualiza un Proveedor
  // @id
  actualizarProveedor(param: any): Observable<any> {
    const body = JSON.stringify(param);
    const url = `${this.proveedoresUrl}/${param.id}`;
    return this.http
        .put(url, body, {headers: this._headers})
        .map(response => response.json())
        .catch(this.handleError);
  }
  // Borrar un Proveedor por id
  borrarProveedor(id: number): Observable<any> {
    const url = `${this.proveedoresUrl}/${id}`;
    return this.http
        .delete(url, {headers: this._headers})
        .map(response => response.json())
        .catch(this.handleError);
  }

  private get _headers() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('client-id',environment.client_id);
    headers.append('client-secret',environment.client_secret);
    if(localStorage.getItem('bearer')){
      headers.append('Authorization', 'Bearer '+localStorage.getItem('bearer'));
    }
    return headers;
  }

  // Metodo para manejo de errores
  public handleError = (error: Response) => {
    this.logger.error(error);
    this.toastr.error("Please try again.");
    return Observable.throw(error)
  }
}


