import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private proveedoresUrl: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

    this.proveedoresUrl = environment.apiUrl +'admin/login';
  
  }


  login(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .post(this.proveedoresUrl, body, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  private get _headers() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('client-id',environment.client_id);
    headers.append('client-secret',environment.client_secret);
    return headers;
  }

  post(url: string, body: any): Observable<any> {
    return this.http
      .post(environment.apiUrl + url, JSON.stringify(body), { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  put(url: string, body: any): Observable<any> {
    return this.http
      .put(environment.apiUrl + url, JSON.stringify(body), { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  // Metodo para manejo de errores
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
  private handleError2(error: Response | any) {

  }
}


