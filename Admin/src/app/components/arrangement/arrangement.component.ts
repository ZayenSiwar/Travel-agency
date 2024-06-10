import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-arrangement',
  templateUrl: './arrangement.component.html',
  styleUrls: ['./arrangement.component.css']
})
export class ArrangementComponent implements OnInit {

  url='http://localhost:3008/getImage/'
  arrangement:any
  
  term: any
  listarrangement: any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
  hotelForm:FormGroup
  constructor(private hotelService: HotelService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllarrangement()
    this.hotelForm = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      modele: ['', Validators.required],
      prix: ['', Validators.required],

    })
  }
  
  getAllarrangement() {
    this.hotelService.getarrangement().subscribe((res: any) => {
      this.listarrangement = res.data;
      console.log('listarrangement', this.listarrangement);
    })
  }
  getOnearrangement(id:any){
    this.hotelService.getOnearrangement(id).subscribe(
      (res:any)=>{
        this.arrangement=res["data"]
        console.log("id",id)

        this.hotelForm.patchValue({
          nom:this.arrangement.nom,
          type:this.arrangement.type,
          modele:this.arrangement.modele,
          prix:this.arrangement.prix
        }
        )
        console.log("arg",this.arrangement)
      }
    )
  }
  deletearrangement(id: any) {
    this.hotelService.deletearrangement(id).subscribe((res: any) => {
      console.log("arg delated")

      this.getAllarrangement()
    })
  }
  Updatearrangement() {
    this.hotelService.Updatearrangement(this.hotelForm.value,this.arrangement._id).subscribe((res: any) => {
      this.listarrangement = res["data"]
      console.log('list arrangement', this.listarrangement);
      this.getAllarrangement()
      this.route.navigateByUrl("/")
    })
  }


}
