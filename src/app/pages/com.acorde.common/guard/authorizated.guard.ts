import { RouterStateSnapshot,  ActivatedRouteSnapshot,  Router,  CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizatedGuard implements CanActivate {

  constructor(private _router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
   /* if(!this._isAuthenticated) {
      this._router.navigate(['/login', {}]);
    }*/
    return this._isAuthenticated;
  }

  private get _isAuthenticated():boolean{
    return !!localStorage.getItem('bearer');
  }
}