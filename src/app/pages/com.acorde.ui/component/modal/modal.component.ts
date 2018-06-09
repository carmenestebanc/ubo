import { Component, ElementRef, OnInit } from '@angular/core';
import { BaseCore } from '../../../com.acorde.common/base.core';

export interface IModal {
  id: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  header?: {
    title: string;
    class?: string;
  };
  footer?: {
    btn?: ModalBtn[];
  };
}

interface ModalBtn {
  name: string;
  icon?: string;
  classes?: string;
  exp?: string;
  call: () => void;
}

@Component({
  selector: 'ubl-modal',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class ModalComponent implements OnInit {

  public config: IModal;
  private _visible: boolean;
  private $frame: HTMLElement;

  public constructor(private bc: BaseCore, private el: ElementRef) {
    this.el.nativeElement.classList.add('not-blur');
  }

  ngOnInit() {
    this.$frame = this.el.nativeElement.firstChild;
    if (!this.config) {
      this.config = this.bc.ms.configs['default'];
    }
    this.bc.ms.onVisible.subscribe((value) => {
      this.visible = value;
    });
  }

  public set visible(value: boolean) {
    if (value !== this.visible) {
      if (value) {
        this.show();
      }else {
        this.hide();
      }
    }
  }

  public get visible(): boolean {
    return this._visible;
  }

  private hide() {
    this.bc.$elements.app.classList.remove('blur-content');
    this.$frame.classList.remove('shown');
    setTimeout(() => {
      this._visible = false;
      this.bc.ms.hideCurrentModal();
    }, 500);
  }

  private show() {
    this.config = this.bc.ms.configs[this.bc.ms.currentModal] || this.bc.ms.configs['default'];
    this.bc.$elements.app.classList.add('blur-content');
    this._visible = true;
    setTimeout(() => {
      this.$frame.classList.add('shown');
    }, 100);
  }

  private _onEvent(data) {
    this.bc.ms.output = data;
  }
}
