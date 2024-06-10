import { Component, OnInit } from '@angular/core';
import { OmraService } from 'src/app/services/omra.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-g-romra',
  templateUrl: './g-romra.component.html',
  styleUrls: ['./g-romra.component.css']
})
export class GRomraComponent implements OnInit {

  reservationomra:any
  Romra:any
  listomra:any
  term:any
  p: number = 1;
ReservationomraForm:FormGroup
  constructor(private GomraService : OmraService , private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllRvoiture()
  
  }
getAllRvoiture(){
  this.GomraService.getROmra().subscribe((res:any)=>{
    this.reservationomra=res["data"];
    console.log('reservationomra' , this.reservationomra);
  })
}


deleteVoiture(id:any){
  this.reservationomra.deleteVoiture(id).subscribe((res:any)=>{
    console.log("voiture delated")
   
    this.getAllRvoiture()
  })
  
}


}
