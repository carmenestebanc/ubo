import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../app.state';

@Component({
  selector: 'ubl-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    public isMenuCollapsed:boolean = false;
    public currentUser;

    constructor(private _state:AppState,private router:Router) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
        if(localStorage.getItem('bearer')) {
            this.currentUser = localStorage.getItem('bearer');
        }
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed; 
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    }
    _logout(event:Event) {
        if (event) {
            event.preventDefault();
        }
        localStorage.removeItem('bearer');
      this.router.navigate(['/login']);
    }

    _goPage(url:string){

    }

}
