import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class RestService {

  public restUrl: string;
  public data:any = {};

  constructor (
      public http: Http,
      public logger: Logger,
      public toastr: ToastsManager
    ) {    }

   setRestUrl (endPoint: string) {
    this.restUrl = environment.apiUrl + endPoint;
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

    /**
     *  Get Object filtered by params.
     */
    getList(): Observable<any[]> {
        const list = this.http
         .get(this.restUrl,{ headers: this._headers })
          .map(response => response.json().data as any)
         .catch(this.handleError);
       return list;
     }


  // Obtiene todos los agencies en un arreglo de tipo "Agency"
  // consulta agencies usando observables

  /*getAgencies(): Observable<Agency[]> {
     this.logger.info("AgencyService---getAgencies()---");
     const agencies = this.http
      .get(this.restUrl,{ headers: this._headers })
       .map(response => response.json().data as Agency[])
      .catch(this.handleError);
    return agencies;
  }

   // Obtiene todos los agencies en un arreglo de tipo "Agencies"
  // consulta agencies usando observables

  getAgenciesForName(): Observable<Agencies> {
    const agencies = this.http
     .get(this.restUrl,{ headers: this._headers })
      .map(response => response.json().data as Agencies)
     .catch(this.handleError);
   return agencies;
 }

  // Devuelve un Agency específico
  // @params: id
  getAgency(id: string): Observable<Agency> {
    const url = `${this.restUrl}/${id}`;
    const agency = this.http
      .get(url, { headers: this._headers })
      .map(response => response.json().data as Agency)
      .catch(this.handleError);
    return agency;
  }*/
  // Crea Agency
  // @param
  create(param: any): Observable<any> {
    this.logger.info(param);
    const body = JSON.stringify(param);
    const url = `${this.restUrl}`;
    return this.http
        .post(url, body, {headers: this._headers})
        .map(response => response.json())
        .catch(this.handleError);
  }
  // Actualiza un Agency
  // @id
  update(param: any): Observable<any> {
    this.logger.info(param);
    const body = JSON.stringify(param);
    const url = `${this.restUrl}/${param.id}`;
    return this.http
      .put(url, body, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  /**
   * Deletes an object by id number.
   */
  delete(object: string): Observable<any> {
    this.logger.info("---delete()--- " + object);
    const url = `${this.restUrl}/${object}`;
    return this.http
      .delete(url, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  /**
   * Returns http requests headers.
   */
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
   * Carga una lista de agencias.
   */
public loadData(endpoint:string): Observable<any[]> {
  this.logger.info("---loadData()---");
  return this.http
    .get(environment.apiUrl + endpoint,{ headers: this._headers })
    .map(response => response.json().data || response.json())
    .catch(this.handleError);
}

/**
 *  Get Object filtered by params.
 * @param endpoint API end point for object.
 * @param Params  Parameters.
 */
public loadDataByParams(endpoint:string, Params): Observable<any[]> {
  this.logger.info("Params en loadDataByParams: ");
  return this.http
    .get(environment.apiUrl + endpoint,{ headers: this._headers, params: Params })
    .map(response => response.json() || response.json())
    .catch(this.handleError);
}
}
