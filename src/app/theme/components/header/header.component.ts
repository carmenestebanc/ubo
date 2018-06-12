import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fechaa = new Date().toJSON().slice(0,10).replace(/-/g,'/');;
  menuHidden = false;
  private userMail: string = "ernesto.montes@acorde.com.ve";
  constructor(private router: Router) { }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
  
  get username(): string {
    return this.userMail;
  }

  logout(){
    
  }

}
