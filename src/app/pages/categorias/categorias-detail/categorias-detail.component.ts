import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoriasService } from '../shared/categorias.service';
import { Categorias } from '../shared/categorias.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ubl-categorias-detail',
  templateUrl: './categorias-detail.component.html',
  styleUrls: ['./categorias-detail.component.scss']
})
export class CategoriasDetailComponent implements OnInit {
  categorias: Categorias;
  private sub: any;
  private response: any;
  private errMsg = '';
  atributos: any[] = [];

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
        const id = Number.parseInt(params['id']);  
        this.categoriasService
            .getProveedor(id)
            .subscribe(c => this.categorias = c,  error =>  this.errMsg = <any>error);
      }); 
  }

}
