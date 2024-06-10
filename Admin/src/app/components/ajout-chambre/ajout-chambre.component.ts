import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-chambre',
  templateUrl: './ajout-chambre.component.html',
  styleUrls: ['./ajout-chambre.component.css']
})
export class AjoutChambreComponent implements OnInit {
listChambre:any
  errorMessage = ''
 chambreForm: FormGroup;
  addVoiture: any
  fileToUpload: Array<File> = []
  listhotel:any
  constructor(private hotelService: HotelService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.getAllHotel()
    this.chambreForm = this.formBuilder.group({
      nombredelit: ['', Validators.required],
      surface: ['', Validators.required],
      salledebain: ['', Validators.required],
      nom: ['', Validators.required],
    
      prix: ['', Validators.required],
      hotel: ['', Validators.required],
  
    })

  }
  getAllHotel() {
    this.hotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data;
      console.log('reservation Hotel', this.listhotel);
    })
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
  
  AddChambre() {
    
    let formData = new FormData()
    formData.append('nombredelit', this.chambreForm.value.nombredelit)
    formData.append('nom', this.chambreForm.value.nom)

    formData.append('surface', this.chambreForm.value.surface)
    formData.append('salledebain', this.chambreForm.value.salledebain)
    formData.append('prix', this.chambreForm.value.prix)
    formData.append('hotel', this.chambreForm.value.hotel)
    formData.append('photo', this.fileToUpload[0])

   console.log("hotel",this.chambreForm.value.hotel) 

    this.hotelService.Addchambre(formData)
      .subscribe(
        (res: any) => {
          console.log( res["data"])
          console.log("chambre : ", res["data"])
          this.chambreForm.reset();
          this.route.navigateByUrl("/chambre")
        },
        // err => {
        //   this.errorMessage = err.error.errorMessage

        // }
        )

  }

}
