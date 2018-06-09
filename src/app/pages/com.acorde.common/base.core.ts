import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ModalService } from '../com.acorde.service/modal/modal.service';

interface IElementsApp {
    app?: HTMLElement;
}
@Injectable()
export class BaseCore {
  public $elements: IElementsApp = {};
  public constructor(public http: Http,public ms:ModalService) {}
}
