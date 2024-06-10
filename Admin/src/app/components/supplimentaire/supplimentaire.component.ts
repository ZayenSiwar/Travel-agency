import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-supplimentaire',
  templateUrl: './supplimentaire.component.html',
  styleUrls: ['./supplimentaire.component.css']
})
export class SupplimentaireComponent implements OnInit {

  url='http://localhost:3008/getImage/'
  suppli:any
  
  term: any
  listsupplimentaire: any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
  hotelForm:FormGroup
  constructor(private hotelService: HotelService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllSupplimentaire()
    this.hotelForm = this.formBuilder.group({
     type: ['', Validators.required],
     
    })
  }
  
  getAllSupplimentaire() {
    this.hotelService.getsupplimentaire().subscribe((res: any) => {
      this.listsupplimentaire = res.data;
      console.log('list supp', this.listsupplimentaire);
    })
  }
  getOneSupplimentaire(id:any){
    this.hotelService.getOnesupplimentaire(id).subscribe(
      (res:any)=>{
        this.suppli=res["data"]
        console.log("id",id)

        this.hotelForm.patchValue({
          
          type:this.suppli.type,
        }
        )
        console.log("supp",this.suppli)
      }
    )
  }
  deletearrangement(id: any) {
    this.hotelService.deletesupplimentaire(id).subscribe((res: any) => {
      console.log("supp delated")

      this.getAllSupplimentaire()
    })
  }
  Updatearrangement() {
    this.hotelService.Updatesupplimentaire(this.hotelForm.value,this.suppli._id).subscribe((res: any) => {
      this.listsupplimentaire = res["data"]
      console.log('list suppli', this.listsupplimentaire);
      this.getAllSupplimentaire()
      this.route.navigateByUrl("/")
    })
  }



}
