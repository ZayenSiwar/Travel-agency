import { Component, OnInit } from '@angular/core';
import { ExcursionService } from 'src/app/services/excursion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-g-rtransfert',
  templateUrl: './g-rtransfert.component.html',
  styleUrls: ['./g-rtransfert.component.css']
})
export class GRtransfertComponent implements OnInit {


  reservationtr:any
  tr:any
  listex:any
  term:any
  p: number = 1;
ReservationtrForm:FormGroup
  constructor(private excursionService : ExcursionService , private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllexcursion()

  }
getAllexcursion(){
  this.excursionService.getExcursion().subscribe((res:any)=>{
    this.reservationtr=res["data"];
    console.log('reservation ex', this.reservationtr);
  })
}


deleteVoiture(id:any){
  this.reservationtr.deleteVoiture(id).subscribe((res:any)=>{
    console.log("ex delated")
   
  this.getAllexcursion()  })
  
}

}
