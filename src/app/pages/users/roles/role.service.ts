import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Role } from './role.model';

import { environment } from '../../../../environments/environment';

@Injectable()
export class RoleService {

  private rolesUrl: string;

  constructor(
    private http: Http,
    private logger: Logger,
    public toastr: ToastsManager,) {
    this.rolesUrl = environment.apiUrl+'roles';
   }

  get(endpoint): Observable<any> {
    const data = this.http
      .get(environment.apiUrl+endpoint, { headers: this._headers })
      .map(response => response.json().data)
      .catch(this.handleError);
    return data;
  }

  put(endpoint,param): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .put(environment.apiUrl+endpoint, body, { headers: this._headers })
      .map(response => response.json().data)
      .catch(this.handleError);
  }


  // Obtiene todos los Usuarioss en un arreglo de tipo "Role"
  // consulta roles usando observables

  getRoles(): Observable<Role[]> {

     const roles = this.http
      .get(this.rolesUrl,{ headers: this._headers })
       .map(response => response.json().data as Role[])
      .catch(this.handleError);
    return roles;
  }

  // Devuelve un Role específico
  // @params: id
  getRole(id: string): Observable<Role> {
    const url = `${this.rolesUrl}/${id}`;
    const role = this.http
      .get(url, { headers: this._headers })
      .map(response => response.json().data as Role)
      .catch(this.handleError);
    return role;
  }
  // Crea Role
  // @param
  createRole(_parameter: any): Observable<any> {  
    const body = JSON.stringify(_parameter);
    const url = `${this.rolesUrl}`;
    this.logger.info(body);
    return this.http
        .post(url, body, {headers: this._headers})
        .map(response => response.json())
        .catch(this.handleError);
  }
  // Actualiza un Role
  // @id
  updateRole(param: any): Observable<any> {
    const body = JSON.stringify(param);
    const url = `${this.rolesUrl}/${param.id}`;
    return this.http
      .put(url, body, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  // Borrar un Role por id
  deleteRole(role: string): Observable<any> {
    const url = `${this.rolesUrl}/${role}`;
    return this.http
      .delete(url, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }
  // devuelve las cabeceras de la solicitud http
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
  private handleError2(error: Response | any) {

  }
   /**
   * Carga una lista de usuarios.
   */
public loadData(endpoint:string): Observable<any[]> {
  this.logger.info("---loadData()---");
  return this.http
    .get(environment.apiUrl + endpoint,{ headers: this._headers })
    .map(response => response.json().data || response.json())
    .catch(this.handleError);
}

/**
 *  Get Roles filtered by params.
 * @param endpoint API end point for agencies.
 * @param Params  Any from the entity.
 */
public loadDataParams(endpoint:string, Params): Observable<any[]> {
  this.logger.info("Params en loadDataParams: ");
  return this.http
    .get(environment.apiUrl + endpoint,{ headers: this._headers, params: Params })
    .map(response => response.json() || response.json())
    .catch(this.handleError);
}
}
