import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Agency } from './agency.model';
import { AGENCY } from './agency-mock';
import { Agencies } from './agencies.model';

import { environment } from '../../../../environments/environment';


@Injectable()
export class AgencyService {

  private agencyUrl: string;
  public data:any = {};

  constructor(private http: Http,private logger: Logger,public toastr: ToastsManager,) {
    this.agencyUrl = environment.apiUrl + 'agencies';
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


  // Obtiene todos los agencies en un arreglo de tipo "Agency"
  // consulta agencies usando observables

  getAgencies(): Observable<Agency[]> {
     this.logger.info("AgencyService---getAgencies()---");
     const agencies = this.http
      .get(this.agencyUrl,{ headers: this._headers })
       .map(response => response.json().data as Agency[])
      .catch(this.handleError);
    return agencies;
  }

   // Obtiene todos los agencies en un arreglo de tipo "Agencies"
  // consulta agencies usando observables

  getAgenciesForName(): Observable<Agencies> {
    const agencies = this.http
     .get(this.agencyUrl,{ headers: this._headers })
      .map(response => response.json().data as Agencies)
     .catch(this.handleError);
   return agencies;
 }

  // Devuelve un Agency específico
  // @params: id
  getAgency(id: string): Observable<Agency> {
    const url = `${this.agencyUrl}/${id}`;
    const agency = this.http
      .get(url, { headers: this._headers })
      .map(response => response.json().data as Agency)
      .catch(this.handleError);
    return agency;
  }
  // Crea Agency
  // @param
  createAgency(param: any): Observable<any> {
    this.logger.info(param);
    const body = JSON.stringify(param);
    const url = `${this.agencyUrl}`;
    return this.http
        .post(url, body, {headers: this._headers})
        .map(response => response.json())
        .catch(this.handleError);
  }
  // Actualiza un Agency
  // @id
  updateAgency(param: any): Observable<any> {
    this.logger.info(param);
    const body = JSON.stringify(param);
    const url = `${this.agencyUrl}/${param.id}`;
    return this.http
      .put(url, body, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  // Borrar un Agency por id
  deleteAgency(agency: string): Observable<any> {
    this.logger.info("Agency a crear " + agency);
    const url = `${this.agencyUrl}/${agency}`;
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
 *  Get Agencies filtered by params.
 * @param endpoint API end point for agencies.
 * @param Params  Agency Id and/or Agency Status.
 */
public loadDataParams(endpoint:string, Params): Observable<any[]> {
  this.logger.info("Params en loadDataParams: ");
  return this.http
    .get(environment.apiUrl + endpoint,{ headers: this._headers, params: Params })
    .map(response => response.json() || response.json())
    .catch(this.handleError);
}
}
