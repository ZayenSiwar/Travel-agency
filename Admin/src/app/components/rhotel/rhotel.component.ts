import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rhotel',
  templateUrl: './rhotel.component.html',
  styleUrls: ['./rhotel.component.css']
})
export class RhotelComponent implements OnInit {
  reservationhotel:any
  Rhotel:any
  listhotel:any
  term:any
  p: number = 1;
ReservationhotelForm:FormGroup
  constructor(private hotelService : HotelService , private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllRhotel()
    this.ReservationhotelForm = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      modele: ['', Validators.required],
      prix: ['', Validators.required],

    })
  }
getAllRhotel(){
  this.hotelService.getRhotel().subscribe((res:any)=>{
    this.reservationhotel=res["data"];
    console.log('reservation hotel', this.reservationhotel);
  })
}


deleteVoiture(id:any){
  this.hotelService. deleteRhotel(id).subscribe((res:any)=>{
    console.log("hotel delated")
   
    this.getAllRhotel()
  })
  
}



}
