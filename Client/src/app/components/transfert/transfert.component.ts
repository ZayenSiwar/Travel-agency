import { Component, OnInit } from '@angular/core';
import { TransfertService } from 'src/app/services/transfert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.css']
})
export class TransfertComponent implements OnInit {

  url='http://localhost:3008/getImage/'
  transfert:any
 
  term: any
  listtransfert: any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
 transfertForm!:FormGroup
  constructor(private transfertService: TransfertService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

 
  ngOnInit(): void {
    this.getAlltransfert()
    
  }
  getAlltransfert() {
    this.transfertService.gettransfert().subscribe((res: any) => {
      this.listtransfert = res.data;
      console.log('liste transfert', this.listtransfert);
    })
  }
}
