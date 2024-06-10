import { Component, OnInit } from '@angular/core';
import { GRvoitureService } from 'src/app/services/g-rvoiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-g-reservation-voiture',
  templateUrl: './g-reservation-voiture.component.html',
  styleUrls: ['./g-reservation-voiture.component.css']
})
export class GReservationVoitureComponent implements OnInit {
  reservationVoiture:any
  Rvoiture:any
  listvoiture:any
  term:any
  p: number = 1;
ReservationvoitureForm:FormGroup
  constructor(private GRvoitureService : GRvoitureService , private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllRvoiture()
    this.ReservationvoitureForm = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      modele: ['', Validators.required],
      prix: ['', Validators.required],

    })
  }
getAllRvoiture(){
  this.GRvoitureService.getRVoiture().subscribe((res:any)=>{
    this.reservationVoiture=res["data"];
    console.log('reservation voiture', this.reservationVoiture);
  })
}


deleteVoiture(id:any){
  this.reservationVoiture.deleteVoiture(id).subscribe((res:any)=>{
    console.log("voiture delated")
   
    this.getAllRvoiture()
  })
  
}



}

