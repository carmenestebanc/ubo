import { Component, OnInit, Input, ViewChild, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

interface IImage {
  img:string;
  thumb:string;
  visible:boolean;
}
export interface IImageView {
  reformat?:boolean;
  use:'img' | 'thumb';
  callback?:()=>void;
  room?:any;
}
@Component({
  selector: 'ubl-image-view',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class ImageViewComponent implements OnInit {

  @Input() params:IImageView;
  @Output() select:EventEmitter<Object []>;

  _success = false;
  _images:IImage [] = [];

  public constructor (){
    this.select  = new EventEmitter();
  }

  ngOnInit(): void {
    if(this.params.reformat) {
      this._reformatImages();
    }
    this._success = true;
  }

  private get _image (){
    return this.params.reformat?this._images:this.params.room;
  }

  private get _imagesInRoom():any [] {
    
    if(this.params.room.additionalInfo && this.params.room.additionalInfo.images && this.params.room.additionalInfo.images.length) {
      return this.params.room.additionalInfo.images;
    }
    return  [
      {
        image: '../assets/img/app/hotel_default.png',
        thumbnail: '../assets/img/app/hotel_default.png'
      }
    ];
  }

  private _reformatImages() {
    this._imagesInRoom.forEach ((item:any,i:number)=> {
      this._images.push(
        {
          img:item.image,
          thumb:item.thumbnail,
          visible:!i
        }
      );
    });
  }

  private _changeImage(event: Event, i: number) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this._image.filter(obj => obj.visible).shift()['visible'] = false;
    this._image[i].visible = true;
  }

  private _select($event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    this.select.emit(this._image);
    if(this.params.callback) {
      this.params.callback();
    }
  }


}
