import { RouterStateSnapshot, ActivatedRouteSnapshot,  Router,   CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PublicGuard implements CanActivate {

  constructor(private _router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(!this._isGuest) {
      this._router.navigate(['/pages/agencies', {}]);
    }
    return this._isGuest;
  }

  private get _isGuest():boolean{
    return true; //!localStorage.getItem('bearer');
  }
}