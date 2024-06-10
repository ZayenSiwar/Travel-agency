import { Component, OnInit } from '@angular/core';
import { ExcursionService } from 'src/app/services/excursion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-g-rexcursion',
  templateUrl: './g-rexcursion.component.html',
  styleUrls: ['./g-rexcursion.component.css']
})
export class GRexcursionComponent implements OnInit {

  reservationex:any
  Rex:any
  listex:any
  term:any
  p: number = 1;
ReservationexForm:FormGroup
  constructor(private excursionService : ExcursionService , private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllexcursion()
    // this.ReservationexForm = this.formBuilder.group({
    //   nom: ['', Validators.required],
    //   type: ['', Validators.required],
    //   modele: ['', Validators.required],
    //   prix: ['', Validators.required],

    // })
  }
getAllexcursion(){
  this.excursionService.getExcursion().subscribe((res:any)=>{
    this.reservationex=res["data"];
    console.log('reservation ex', this.reservationex);
  })
}


deleteVoiture(id:any){
  this.reservationex.deleteVoiture(id).subscribe((res:any)=>{
    console.log("ex delated")
   
  this.getAllexcursion()  })
  
}


}
