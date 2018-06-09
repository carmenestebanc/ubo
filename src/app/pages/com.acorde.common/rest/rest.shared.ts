import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestShared {

  constructor(private http: Http) { }

  public get(endpoint: string): Observable<any[]> {
    return this.http
      .get(environment.apiUrl + endpoint, { headers: this._headers })
      .map(response => response.json().data)
      .catch(this.handleError);
  }

  public post(endpoint: string, body: Object): Observable<any> {
    return this.http
      .post(environment.apiUrl + endpoint, JSON.stringify(body), { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  public put(endpoint: string, body: Object): Observable<any> {
    return this.http
      .put(environment.apiUrl + endpoint, JSON.stringify(body), { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }


  public delete(endpoint: string, body: Object): Observable<any> {
    return this.http
      .delete(environment.apiUrl + endpoint, { headers: this._headers })
      .map(response => response.json())
      .catch(this.handleError);
  }

  private get _headers() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('client_id',environment.client_id);
    headers.append('client_secret',environment.client_secret);
    if (localStorage.getItem('bearer')) {
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('bearer'));
    }
    return headers;
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }

}
