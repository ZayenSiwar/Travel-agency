import { Component, OnInit } from '@angular/core';
import { GRvoyageService } from 'src/app/services/g-rvoyage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-g-reservation-voyage',
  templateUrl: './g-reservation-voyage.component.html',
  styleUrls: ['./g-reservation-voyage.component.css']
})
export class GReservationVoyageComponent implements OnInit {
  reservationVoyage:any
  Rvoyage:any
  listReservationVoyage:any
  term:any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
  RvoyageForm:FormGroup
  constructor(private gRvoyageService:GRvoyageService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllRvoyage()
    this.RvoyageForm = this.formBuilder.group({
      nom: ['', Validators.required],
      client: ['', Validators.required],
      datededepart: ['', Validators.required],
      datederetour: ['', Validators.required],
      destination: ['', Validators.required],
      vol: ['', Validators.required],
    }) 
  }


getAllRvoyage(){
  this.gRvoyageService.getRVoyage().subscribe((res:any)=>{
    this.reservationVoyage=res.data
    
    console.log('reservationvoyage',this.reservationVoyage)
    
  })
}
getOneRVoyage(id:any){
  this.gRvoyageService.getOneRVoyage(id).subscribe(
    (res:any)=>{
      this.Rvoyage=res["data"]
      console.log("id",id)

      this.RvoyageForm.patchValue({
        nom:this.Rvoyage.nom,
        type:this.Rvoyage.type,
        modele:this.Rvoyage.modele,
        prix:this.Rvoyage.prix
      }
      )
      console.log("voyage",this.Rvoyage)
    }
  )
}
deleteRvoyage(id:any){
  this.gRvoyageService.deleteRvoyage(id).subscribe((res:any)=>{
    console.log("voyage delated")
   
    this.getAllRvoyage()
  })
  
}

}
