import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Client } from './client.model';
import { CLIENT } from './client-mock';

import { environment } from '../../../../environments/environment';

@Injectable()
export class ClientService {

  private clientUrl: string;

  constructor(private http: Http,private logger: Logger,public toastr: ToastsManager,) {
    this.clientUrl = environment.apiUrl+'clients';
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


  // Obtiene todos los clients en un arreglo de tipo "Client"
  // consulta clients usando observables

  getClients(): Observable<Client[]> {

     const clients = this.http
      .get(this.clientUrl,{ headers: this._headers })
       .map(response => response.json().data as Client[])
      .catch(this.handleError);
    return clients;
  }

  // Devuelve un Client específico
  // @params: id
  getClient(id: string): Observable<Client> {
    const url = `${this.clientUrl}/${id}`;
    const client = this.http
      .get(url, { headers: this._headers })
      .map(response => response.json().data as Client)
      .catch(this.handleError);
    return client;
  }
  // Crea Client
  // @param
  createClient(param: any): Observable<any> {
    const body = JSON.stringify(param);
    const url = `${this.clientUrl}`;
    return this.http
        .post(url, body, {headers: this._headers})
        .map(response => response.json())
        .catch(this.handleError);
  }
  // Actualiza un Client
  // @id
  updateClient(param: any): Observable<any> {
    const body = JSON.stringify(param);
    const url = `${this.clientUrl}/${param.id}`;
    return this.http
      .put(url, body, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  // Borrar un Client por id
  deleteClient(client: string): Observable<any> {
    const url = `${this.clientUrl}/${client}`;
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
}
