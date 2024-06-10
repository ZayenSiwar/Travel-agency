import { Component, OnInit } from '@angular/core';
import {ExcursionService } from 'src/app/services/excursion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailee-excursion',
  templateUrl: './detailee-excursion.component.html',
  styleUrls: ['./detailee-excursion.component.css']
})
export class DetaileeExcursionComponent implements OnInit {

  id=this.ActivatedRoute.snapshot.params["id"]
  excursion: any
  
  constructor(private ActivatedRoute: ActivatedRoute, private excursionService: ExcursionService) { }

  ngOnInit(): void {
    this.getOneExcursion()
  }
  getOneExcursion() {
    this.excursionService.getOneExcursion(this.id).subscribe(
      (res: any) => {
        this.excursion = res["data"]
        console.log("excursion: ", res["data"])
    
      }
    )
  }
}