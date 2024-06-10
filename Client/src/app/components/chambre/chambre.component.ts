import { Component, OnInit } from '@angular/core';
import {  ChambreService } from 'src/app/services/chambre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
  id=this.ActivatedRoute.snapshot.params["id"]
listchambre:any

  constructor(private chambreService: ChambreService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllchambre()
  }
  getAllchambre() {
    this.chambreService.getChambre().subscribe((res: any) => {
      this.listchambre = res.data;
      console.log('liste chambres', this.listchambre);
    })
  }
}
