import { BaseCore } from '../base.core';
import { FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class HttpUtils {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public bc: BaseCore) { }

  private _createEndpoint(endpoint: string, isAbosulte: boolean = false): string {
    return (isAbosulte ? '' : environment.apiUrl) + endpoint;
  }

  public onLoadList(endpoint: string, successCallback = null, errorCallback = null, isEndpointAbsolute = false): Observable<any> {
    const request = this.doGet(endpoint, isEndpointAbsolute);
    request.subscribe(
      (response) => {
        if (successCallback) {
          successCallback(response);
        }

      },
      (error) => {
        errorCallback(error);
      }
    );
    return request;
  }

  public doGet(endpoint: string, isEndpointAbsolute = false): Observable<any> {
    endpoint = this._createEndpoint(endpoint, isEndpointAbsolute);
    return this.bc.http
      .get(endpoint)
      .map(response => response.json().data)
      .catch(this.handleError);
  }

  // Metodo para manejo de errores
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body['error'] || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
