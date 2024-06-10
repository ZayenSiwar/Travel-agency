import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem(("token"));
    console.log("loggedin", this.isLoggedIn)

    if(this.isLoggedIn){
      const user = localStorage.getItem(("userconnect"));
    }
  }
  signout(){
    localStorage.clear();
    window.location.reload();
  }
}
