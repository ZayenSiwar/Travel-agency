import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  errorMessage=''
  HotelForm!: FormGroup;
  addHotel: any
  myFiles:string [] = [];
  listcategorie:any
  listsupp:any
  listarrg:any

  constructor(private hotelService: HotelService, private formBuilder: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.HotelForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prix: ['', Validators.required],
      telephone: ['', Validators.required],
      adresseHotel: ['', Validators.required],
      description: ['', Validators.required],
      categorie: ['', Validators.required],
  

 })
 this.getallcategorie()
//  this.getallarrangement()
//  this.getallsupplimentaire()
}
onFileChange(event:any) {
  for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
      console.log(this.myFiles[i])
  }
}
  AddHotel() {
   
    let formData = new FormData()
    formData.append('nom', this. HotelForm.value.nom)
    formData.append('categorie', this. HotelForm.value.categorie)
    // formData.append('arrangement', this. HotelForm.value.arrangement)
    // formData.append('supplimentaire', this. HotelForm.value.supplimentaire)
    formData.append('prix', this. HotelForm.value.prix)
    formData.append('adresseHotel', this. HotelForm.value.adresseHotel)
    formData.append('telephone', this. HotelForm.value.telephone)
    formData.append('description', this. HotelForm.value.description)
    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append("photos", this.myFiles[i]);
    }
  
  this.hotelService.AddHotel(formData)
  .subscribe(
    (res: any) => {
      console.log(res)
      console.log("hotel : ", res["data"])
      this.HotelForm.reset();
      this.route.navigateByUrl("/gHotel")
    },
    err => {
      this.errorMessage = err.error.errorMessage

    })
  }

  getallcategorie(){
    this.hotelService.getcategorie().subscribe((res: any) => {
      this.listcategorie = res.data;
      console.log(' list categorie', this.listcategorie);
    })
  }



}
