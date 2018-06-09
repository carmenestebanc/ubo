import { EventEmitter, Injectable } from '@angular/core';
import { IModal } from '../../com.acorde.ui/component/modal/modal.component';

export type TModalName = 'delete' | 'save' | 'custom';

export type ModalParamsType = any;

export interface IModalParams {
  model: any;
  onAfterClose?: (data: object) => void;
  extraParams?: ModalParamsType;
}

@Injectable()
export class ModalService {

  public params: IModalParams;
  public onVisible: EventEmitter<boolean>;
  public configs: { [key: string]: IModal };
  public output: any;
  public readonly modalID = 'modal-service';

  private _currentModal = 'none';

  public constructor() {
    this.onVisible = new EventEmitter<boolean>();
    this.initConfigs();
  }

  public get currentModal(): string {
    return this._currentModal;
  };

  public show(name: TModalName, params: IModalParams) {
    if (this._currentModal === 'none') {
      this.params = params;
      this._currentModal = name;
      this.onVisible.emit(true);
    }
  }

  public hideCurrentModal() {
    if (this._currentModal !== 'none') {
      this._currentModal = 'none';
      this.onVisible.emit(false);
      if (this.params.onAfterClose) {
        this.params.onAfterClose(this.output);
      }
    }
  }

  private initConfigs() {
    this.configs = {};

    this.configs['default'] = {
      id: this.modalID,
      size: 'md',
      header: { class: '', title: 'title default' },
      footer: {}
    };

    this.configs['delete'] = {
      id: this.modalID,
      size: 'sm',
      header: { title: 'Eliminar', class: 'red' },
      footer: {
        btn:
        [
          {
            name: 'cancelar', classes: 'btn-default', icon: 'fa fa-ban',
            call: () => {
              this.hideCurrentModal();
            }
          },
          {
            name: 'Eliminar', classes: 'red', icon: 'fa fa-trash',
            call: () => {
              this.params.model.onDelete(this.params.model.currentData.id);
              this.hideCurrentModal();
            }
          }
        ]
      }
    };

    this.configs['save'] = {
      id: this.modalID,
      size: 'lg',
      header: { title: 'Guardar', class: 'green' }
    };
  }
}
