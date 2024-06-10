import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service'

@Component({
  selector: 'app-add-supplimentaire',
  templateUrl: './add-supplimentaire.component.html',
  styleUrls: ['./add-supplimentaire.component.css']
})
export class AddSupplimentaireComponent implements OnInit {

  listsupp:any
  arg:any
    suppForm: FormGroup;
    addsupp: any
    fileToUpload: Array<File> = []
    constructor(private hotelService: HotelService, private formBuilder: FormBuilder, private route: Router) { }
  
    ngOnInit(): void {
      this.suppForm = this.formBuilder.group({
        type: ['', Validators.required],
     
      })
    }
    AddSupp() {
      let formData = new FormData()
  
      formData.append('type', this.suppForm.value.type)
      
      this.hotelService.Addsupplimentaire(formData)
        .subscribe(
          (res: any) => {
            console.log( res["data"])
            console.log("arrangement: ", res["data"])
            this.suppForm.reset();
            this.route.navigateByUrl("/Supplimentaire")
          },
        )
  
    
    }
    getAllarrangement() {
      this.hotelService.getHotel().subscribe((res: any) => {
        this.listsupp = res.data;
        console.log('reservation Hotel', this.listsupp);
      })
    }
    getOneArrangement(id: any) {
      this.hotelService.getOneHotel(id).subscribe(
        (res: any) => {
          this.suppForm = res["data"]
          console.log("id", id)
          this.suppForm.patchValue({
            type: this.arg.type,
          
          }
          )
          console.log("supp", this.arg)
        }
      )
    }
    deletearrangement(id: any) {
      this.hotelService.deleteHotel(id).subscribe((res: any) => {
        console.log("supp delated")
  
        this.getAllarrangement()
      })
    }
}
