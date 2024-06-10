import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ghotel',
  templateUrl: './ghotel.component.html',
  styleUrls: ['./ghotel.component.css']
})
export class GhotelComponent implements OnInit {
  ghotel: any
  term: any
  listhotel: any
  p: number = 1;
  id = this.ActivatedRoute.snapshot.params["id"]
  HotelForm: FormGroup
  constructor(private HotelService: HotelService, private ActivatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.getAllHotel()
    this.HotelForm = this.formBuilder.group({
      nom: ['', Validators.required],
     telephone: ['', Validators.required],
      categorie: ['', Validators.required],
      adresseHotel: ['', Validators.required],
      map: ['', Validators.required],

    })
  }
  getAllHotel() {
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data;
      console.log('reservation Hotel', this.listhotel);
    })
  }
  getOneHotel(id: any) {
    this.HotelService.getOneHotel(id).subscribe(
      (res: any) => {
        this.ghotel = res["data"]
        console.log("id", id)
        this.HotelForm.patchValue({
          nom: this.ghotel.nom,
          telephone: this.ghotel.telephone,
          categorie: this.ghotel.categorie,
          adresseHotel: this.ghotel.adresseHotel,
          map: this.ghotel.map
        }
        )
        console.log("hotel", this.ghotel)
      }
    )
  }
  UpdateHotel() {
    this.HotelService.UpdateHotel( this.ghotel._id,this.HotelForm.value).subscribe((res: any) => {
      this.listhotel = res["data"]
      console.log('list  hotel', this.listhotel);
      this.getAllHotel()
      this.route.navigateByUrl("/gestionhotel")
    })
  }

  deleteHotel(id: any) {
    this.HotelService.deleteHotel(id).subscribe((res: any) => {
      console.log("Hotel delated")

      this.getAllHotel()
    })
  }
}
