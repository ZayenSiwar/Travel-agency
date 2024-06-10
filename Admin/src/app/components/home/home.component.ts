import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show!: any;

  constructor(router:Router) {
    router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
            this.show = event.url !== "/login" ;
        }
      });
    }
  ngOnInit(): void {
  }

}
