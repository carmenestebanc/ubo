import { BaseCore } from '../base.core';
import { FormControl } from '@angular/forms';
import { HttpUtils } from './http.utils';
import { Observable } from 'rxjs/Rx';

interface IRest {
  data: FormControl;
  subcribe?: Observable<any>;
  // TODO:params pendings.
  max?: number;
  offset?: number;
  find?: boolean;
  where?: Object[];
}

export class RestController {

  private _endpoint: string;

  public httputils: HttpUtils;
  public rest: IRest = {
    data: new FormControl({})
  };

  constructor(bc: BaseCore, endpoint: string) {
    this._endpoint = endpoint;
    this.httputils = new HttpUtils(bc);
  }

  private get _restParams(): string {// TODO: pending send params -> Ask
    return '';
  }

  private get _restData(): FormControl {
    return this.rest.data;
  }

  public get data(): Object[] {
    return this._restData.value.data || [];
  }

  public get subs(): Observable<any> {
    return this.rest.subcribe;
  }

  private _error(error) {
    this.rest.find = false;
    console.log(error);
  };

  public loadData(offset?: string | number): Observable<any> {
    this.rest.find = true;
    const request = this.httputils.onLoadList(this._endpoint + this._restParams);
    this.rest.subcribe = request;
    request.subscribe(
      (response) => {
        this.rest.find = false;
        this._restData.setValue(response);
      },
      (error) => {
        this._error(error);
      }
    );
    return request;
  };

}
