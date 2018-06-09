import { isRole, Role } from '../../../app.component';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoriasService } from '../shared/categorias.service';
import { Categorias } from '../shared/categorias.model';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'ubl-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss'],
  providers: [ CategoriasService ]
})
export class CategoriasListComponent implements OnInit {

categorias: Categorias[] = [];
private errMsg: string;
private categoryId: number;

 constructor(private CategoriasService: CategoriasService,
  public toastr: ToastsManager, 
    vcr: ViewContainerRef,
    private router: Router,
 ) { this.toastr.setRootViewContainerRef(vcr); }

 private get _permissionsEdit():boolean {
  return !isRole(Role.Visitante);
}

  // consulta los categorias en el servidor del API usando observables
  getProveedores() {
    this.CategoriasService.getProveedores()
                         .subscribe(categorias => this.categorias = categorias);
  }
  setCategory(id: number) {
    this.categoryId = id;
  }
  // consulta usando Promises
/*
   getProveedores(): void {
    this.ProveedorService
        .getProveedores()
        .then(proveedores => this.proveedores = proveedores);
  }*/
  // métodos invocados al inicio
  ngOnInit(): void {
    this.getProveedores();
  }

  delete(id:number) {
    this.CategoriasService.borrarProveedor(id).subscribe(
              (res) => {
                this.toastr.success('Category deleted.');
                this.categorias.forEach((t, i) => {
                    if (t.id === id) { this.categorias.splice(i, 1); }
                });
              },
              ) ;
    }
  }
