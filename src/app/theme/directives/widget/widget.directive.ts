import { Directive, ElementRef, OnInit } from '@angular/core';
import 'widgster';

@Directive ({
  selector: '[widget]'
})

export class Widget implements OnInit {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
    jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';

    jQuery(document).on('close.widgster', (e) => {
      let $colWrap = jQuery(e.target).closest(' [class*="col-"]:not(.widget-container)');
      if (!$colWrap.find('.widget').not(e.target).length) {
        $colWrap.remove();
      }
    });

    jQuery(document).on("fullscreened.widgster", (e) => {
        jQuery(e.target).find('div.widget-body').addClass('expanded');
    }).on("restored.widgster", (e) => {console.log("expanded");
        jQuery(e.target).find('div.widget-body').removeClass('expanded');
    }); 
  }

  ngOnInit(): void {
    this.$el.widgster();
  }
}
