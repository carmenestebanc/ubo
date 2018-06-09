import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlimScroll } from './slim-scroll/slim-scroll.directive';
import { Widget } from './widget/widget.directive';
import { Skycon } from './skycon/skycon.directive';
import { Counter } from './counter/counter.directive';
import { LiveTile } from './live-tile/live-tile.directive';
import { ProgressAnimate } from './progress-animate/progress-animate.directive';
import { DropzoneUpload } from './dropzone/dropzone.directive';
import { UpperCase } from './uppercase/uppercase.directive';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [ 
        SlimScroll,
        Widget,
        Skycon,
        Counter,
        LiveTile,
        ProgressAnimate,
        DropzoneUpload,
        UpperCase
    ],
    exports: [ 
        SlimScroll,
        Widget,
        Skycon,
        Counter,
        LiveTile,
        ProgressAnimate,
        DropzoneUpload, 
        UpperCase
    ]
})
export class DirectivesModule { }
