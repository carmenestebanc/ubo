import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { environment } from '../environments/environment';
import { Headers, Http } from '@angular/http';
import { Component, ViewEncapsulation, ChangeDetectorRef, AfterViewInit, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, RoutesRecognized, Router } from '@angular/router';
import { isDeniedComponent } from './pages/com.acorde.common/guard/authorizatedComponent.guard';
import 'rxjs/add/operator/filter';


let currentRole = 3;
export enum Role { Any, Visitante, Gestor, Administrador };

export function isRole(...roles: Number[]): boolean {

  return roles.indexOf(currentRole) > -1;

}


@Component({
  selector: 'ubl-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, OnInit {
  constructor(
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    private http: Http
  ) {
    this.toastr.setRootViewContainerRef(this.vcr);
  }

  ngAfterViewInit(): void {
    this._cdr.detectChanges();
  }

  ngOnInit(): void {
    //this._checkToken();
  }

  private _checkToken() {
    /*if (localStorage.getItem('bearer')) {
     /this.http
        .get(environment.apiUrl + 'admin/user/datos', { headers: this._headers }).subscribe(
          data => {
            currentRole = +data.json().data.role
            this._urlPermit(this._router.routerState.root.children["0"].firstChild);            
          },error=>{
            const err = error.json();
            if(err.error === 'Unauthenticated.') {
              this.toastr.error('Su sesion ha expirado.');
              localStorage.removeItem('bearer');
              this._router.navigate(['/login']);
            }
          }
        );
  }*/
  }

  public _checkRole() {
    /*this.http
      .get(environment.apiUrl + 'admin/user/datos', { headers: this._headers }).subscribe(
        data => {
          currentRole = +data.json().data.role;
          this._urlPermit(this._router.routerState.root.children["0"].firstChild);
        }
      );*/
  }

  private get _headers() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('client-id', environment.client_id);
    headers.append('client-secret', environment.client_secret);
    if (localStorage.getItem('bearer')) {
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('bearer'));
    }
    return headers;
  }

  private _urlPermit(event: ActivatedRouteSnapshot) {
    const component = event.firstChild.firstChild.component['name'];
    if (isDeniedComponent(component)) {
      this._router.navigate(['/pages/agencies', {}]);
    }
  }

}
