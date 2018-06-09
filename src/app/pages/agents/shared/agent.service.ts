import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Logger } from "angular2-logger/core";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Agent } from './agent.model';

import { environment } from '../../../../environments/environment';

@Injectable()
export class AgentService {

  private agentsUrl: string;

  constructor(private http: Http,private logger: Logger,public toastr: ToastsManager,) {
    this.agentsUrl = environment.apiUrl +'agents';
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


  // Obtiene todos los Usuarioss en un arreglo de tipo "Agent"
  // consulta agents usando observables

  getAgents(): Observable<Agent[]> {
     const agents = this.http
      .get(this.agentsUrl,{ headers: this._headers })
       .map(response => response.json().data as Agent[])
      .catch(this.handleError);
    return agents;
  }

  // Devuelve un Agent específico
  // @params: id
  getAgent(id: string): Observable<Agent> {
    const url = `${this.agentsUrl}/${id}`;
    const agent = this.http
      .get(url, { headers: this._headers })
      .map(response => response.json().data as Agent)
      .catch(this.handleError);
    return agent;
  }
   // Crea Agency
  // @param
  createAgent(param: any): Observable<any> {
    const body = JSON.stringify(param);
    const url = `${this.agentsUrl}`;
    return this.http
        .post(url, body, {headers: this._headers})
        .map(response => response.json())
        .catch(this.handleError);
  }
  // Actualiza un Agent
  // @id
  updateAgent(param: any): Observable<any> {
    const body = JSON.stringify(param);
    const url = `${this.agentsUrl}/${param.id}`;
    return this.http
      .put(url, body, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  // Borrar un Agent por id
  deleteAgent(agent: string): Observable<any> {
    const url = `${this.agentsUrl}/${agent}`;
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

/**
 *  Get Agent filtered by params.
 * @param endpoint API end point for agencies.
 * @param Params  User Id
 */
public loadDataParams(endpoint:string, Params): Observable<any[]> {
  return this.http
    .get(environment.apiUrl + endpoint,{ headers: this._headers, params: Params })
    .map(response => response.json() || response.json())
    .catch(this.handleError);
}

/**
   * Carga una lista de agentes.
   */
  public loadData(endpoint:string): Observable<any[]> {
    this.logger.info("---loadData()---");
    return this.http
      .get(environment.apiUrl + endpoint,{ headers: this._headers })
      .map(response => response.json().data || response.json())
      .catch(this.handleError);
  }
}
