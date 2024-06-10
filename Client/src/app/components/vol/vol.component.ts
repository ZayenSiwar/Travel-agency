import { Component, OnInit } from '@angular/core';
import { VolService } from 'src/app/services/vol.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.css']
})
export class VolComponent implements OnInit {
  id=this.ActivatedRoute.snapshot.params["id"]
  listVol:any
  
  constructor(private voyageService: VolService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllVol()
  }
    getAllVol() {
      this.voyageService.getVoyage().subscribe((res: any) => {
        this.listVol = res.data;
        console.log('reservation vol', this.listVol);
      })
    }
}
