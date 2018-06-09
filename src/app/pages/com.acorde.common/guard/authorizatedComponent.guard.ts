import { Role, isRole } from '../../../app.component';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizatedComponentGuard implements CanActivateChild {

  constructor(private _router: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let component: any = route.component;
    component = component ? component.name : 'any';
    return !isDeniedComponent(component);
  }

}

export function isDeniedComponent(component:string) {
  let regexDenied = /@@any@@/; // All any

  if (isRole(Role.Visitante)) {
    regexDenied = /(add|update)/i;
  }

  if (isRole(Role.Gestor)) {
    regexDenied = /(UsuarioUpdate)/i;
  }

  if (isRole(Role.Administrador)) {
    regexDenied = /@@any@@/;
  }

  return regexDenied.test(component);
}
