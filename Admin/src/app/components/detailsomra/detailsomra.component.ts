import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detailsomra',
  templateUrl: './detailsomra.component.html',
  styleUrls: ['./detailsomra.component.css']
})
export class DetailsomraComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  addOmra(){
    
    this.route.navigateByUrl('/detailsomra')
  }
}
