import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

import { environment } from '../../../../environments/environment';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(
    private http: Http,
    private logger: Logger,
    public toastr: ToastsManager,) {
    this.usersUrl = environment.apiUrl +'users';
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


  // Obtiene todos los Usuarioss en un arreglo de tipo "User"
  // consulta users usando observables

  getUsers(): Observable<any[]> {

     const users = this.http
      .get(this.usersUrl,{ headers: this._headers })
       .map(response => response.json().data || response.json())
      .catch(this.handleError);
    return users;
  }

  // Devuelve un User específico
  // @params: id
  getUser(id: string): Observable<any> {
    const url = `${this.usersUrl}/${id}`;
    const user = this.http
      .get(url, { headers: this._headers })
      .map(response => response.json().data as any)
      .catch(this.handleError);
    return user;
  }
  // Crea User
  // @param
  createUser(_parameter: any): Observable<any> {  
    const body = JSON.stringify(_parameter);
    //let params = "json="+body;
    //console.log(body);
    const url = `${this.usersUrl}`;
    //console.log(url);

    this.logger.info(body);
    return this.http
        .post(url, body, {headers: this._headers})
       .map(response => response.json())
       .catch(this.handleError);
  }
  // Actualiza un User
  // @id
  updateUser(param: any): Observable<any> {
    const body = JSON.stringify(param);
    const url = `${this.usersUrl}/${param.id}`;
    return this.http
      .put(url, body, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  // Borrar un User por id
  deleteUser(user: string): Observable<any> {
    const url = `${this.usersUrl}/${user}`;
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
    console.log();   
    return Observable.throw(error)
  }
  private handleError2(error: Response | any) {

  }
   /**
   * Carga una lista de usuarios.
   */
public loadData(endpoint:string): Observable<any[]> {
  this.logger.info("---loadData()---" + "endpoint: " + endpoint);
  return this.http
    .get(environment.apiUrl + endpoint,{ headers: this._headers })
    .map(response => response.json().data || response.json())
    .catch(this.handleError);
}

/**
 *  Get Users filtered by params.
 * @param endpoint API end point for agencies.
 * @param Params  Any from the entity.
 */
public loadDataParams(endpoint:string, Params): Observable<any[]> {
  this.logger.info("Params en loadDataParams: " + Params);
  return this.http
    .get(environment.apiUrl + endpoint,{ headers: this._headers, params: Params })
    .map(response => response.json() || response.json())
    .catch(this.handleError);
}
}
