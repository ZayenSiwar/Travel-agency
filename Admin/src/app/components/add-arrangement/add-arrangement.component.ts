import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service'


@Component({
  selector: 'app-add-arrangement',
  templateUrl: './add-arrangement.component.html',
  styleUrls: ['./add-arrangement.component.css']
})
export class AddArrangementComponent implements OnInit {
listarg:any
arg:any
term:any
  ArgForm: FormGroup;
  addarg: any
  fileToUpload: Array<File> = []
  constructor(private hotelService: HotelService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.ArgForm = this.formBuilder.group({
      type: ['', Validators.required],
   
    })
  }
  AddArg() {
    let formData = new FormData()

    formData.append('type', this.ArgForm.value.type)
    
    this.hotelService.Addarrangement(formData)
      .subscribe(
        (res: any) => {
          console.log( res["data"])
          console.log("arrangement: ", res["data"])
          this.ArgForm.reset();
          this.route.navigateByUrl("/arrangement")
        },
      )

  
  }
  getAllarrangement() {
    this.hotelService.getHotel().subscribe((res: any) => {
      this.listarg = res.data;
      console.log('reservation Hotel', this.listarg);
    })
  }
  getOneArrangement(id: any) {
    this.hotelService.getOneHotel(id).subscribe(
      (res: any) => {
        this.ArgForm = res["data"]
        console.log("id", id)
        this.ArgForm.patchValue({
          type: this.arg.type,
        
        }
        )
        console.log("hotel", this.arg)
      }
    )
  }
  deletearrangement(id: any) {
    this.hotelService.deleteHotel(id).subscribe((res: any) => {
      console.log("Hotel delated")

      this.getAllarrangement()
    })
  }
}
