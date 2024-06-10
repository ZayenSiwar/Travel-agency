import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-chambre',
  templateUrl: './details-chambre.component.html',
  styleUrls: ['./details-chambre.component.css']
})
export class DetailsChambreComponent implements OnInit {
  term: any
  submitted = false;
  listprix: any
  listsupp: any
  listarrg: any
  listcontratPromo: any
  listcontratEarly: any
  p: number = 1;
  chambreForm!: FormGroup
  hotelForm!: FormGroup
  listchambre: any
  id = this.ActivatedRoute.snapshot.params["id"]
  chambre: any
  totalprix: number = 0
  totalprixglobal: number = 0
  qtyInput: any
  x: number = 0
  hotel: any
  date = new Date().toISOString().split('T')[0].toString()
  formreservation!: FormGroup
  user =JSON.parse(localStorage.getItem(("userconnect"))!);

  constructor(private chambreService: ChambreService, private ActivatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private route: Router, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.getAllChambre()
    this.getallPrix()
    this.getOneChambre()
    this.getallarrangement()
    this.getallsupplimentaire()
    this.getContratPromo()
    this.getContratEarly()
    this.chambreForm = this.formBuilder.group({
      nom: ['', Validators.required],
      salledebain: ['', Validators.required],
      prix: ['', Validators.required],
      nbrPersonne: ['', Validators.required],
      debutContrat: ['', Validators.required],
      finContrat: ['', Validators.required],


      arrangement: ['', Validators.required],
      supplimentaire: ['', Validators.required]
    })




    this.formreservation=this.formBuilder.group({
      prixTotal: ['', Validators.required],
      hotel: ['', Validators.required],
      user: ['', Validators.required],
    })
  }

  calculerprix(e: any, prix: any) {
    console.log("date deb", this.listcontratPromo[0].debutContrat)
    console.log("date fin", this.listcontratPromo[0].finContrat)
    console.log("date systéme", this.date)

    if (this.date >= this.listcontratPromo[0].debutContrat && this.date <= this.listcontratPromo[0].finContrat) {

      this.totalprix = Number(e.target.value) * this.listcontratPromo[0].prix;
      console.log("total prix", this.totalprix)
    }
    else {
      this.totalprix = Number(e.target.value) * prix
      console.log("total prix", this.totalprix)
    }

  }


  getAllChambre() {
    this.chambreService.getChambre().subscribe((res: any) => {
      this.listchambre = res.data;
      console.log('list chambre', this.listchambre);
    })
  }
  getOneChambre() {
    console.log("id", this.id)
    this.chambreService.getOneChambre(this.id).subscribe(
      (res: any) => {
        console.log(res["data"])
        this.chambre = res["data"]
        this.hotel = res["data"].hotel
        console.log("hotel", this.hotel)
        console.log("chambre", this.chambre)


        // this.chambreForm.patchValue({
        //   nom:this.chambre.nom,
        //  salledebain:this.chambre.type,
        //  prix:this.chambre.prix,
        //  nbrPersonne:this.chambre.nbrPersonne,
        // }
        // )

      }
    )
  }
  getUser() {
    const user = localStorage.getItem(("userconnect"));
    if (user) {
      const userId = JSON!.parse(user)
      return userId
    }
  }
  addDemande() {
    console.log("dddd")
    this.submitted = true;

    const id = this.ActivatedRoute.snapshot.params["id"]
    const userId = this.getUser()._id;
    console.log("user", userId)
    const date_arrivee = this.hotelForm.get('date_arrivee')?.value;
    const datededepart = this.hotelForm.get('datededepart')?.value;

    this.chambreService.Rchambre(date_arrivee, datededepart, userId, id).subscribe(
      (res: any) => {
        console.log(res);

        Swal.fire(
          'demande envoyer',
          'success'
        )
        

      }

    )

  }
  getallPrix() {
    this.chambreService.getPrix().subscribe((res: any) => {
      this.listprix = res["data"];
      console.log(' list prix', this.listprix);
    })
  }
  getallarrangement() {
    this.hotelService.getarrangement().subscribe((res: any) => {
      this.listarrg = res.data;
      console.log('list arrangement', this.listarrg);
    })
  }
  getallsupplimentaire() {
    this.hotelService.getsupplimentaire().subscribe((res: any) => {
      this.listsupp = res.data;
      console.log('list supplimentaire', this.listsupp);
    })
  }
  getContratPromo() {
    this.chambreService.getContratPromo().subscribe((res: any) => {
      this.listcontratPromo = res["data"]
        .filter((el: any) => el.hotel._id == this.hotel)
      console.log('listcontratpromo', this.listcontratPromo);
    })
  }
  getContratEarly() {
    this.chambreService.getContratEarly().subscribe((res: any) => {
      this.listcontratEarly = res["data"]
        .filter((el: any) => el.hotel._id == this.hotel)
      console.log('listcontratearly', this.listcontratEarly);
    })
  }

  calculerprix3(e: any) {
    this.x = e.target.value
    console.log(this.x)
  }
  calculerprix2(e: any) {
    console.log(e.target.value)
    console.log("ttatl prix", this.totalprix)




    this.totalprixglobal = this.totalprixglobal + Number(this.x) + Number(this.totalprix) + 10 + Number(e.target.value)
    // this.totalprixglobal=this.totalprixglobal- Number(this.listcontratPromo[0].prix)
    console.log("total prixxx global", this.totalprixglobal)
  }



  addreservation(){
    console.log("userconnect",this.user)
    console.log("hotel",this.hotel)
    console.log("totalprixglobal",this.totalprixglobal)


    this.formreservation.patchValue({
      prixTotal: this.totalprixglobal,
     hotel:this.hotel,
     user: this.user._id
    })
    this.hotelService.Rhotel(this.formreservation.value).subscribe((res:any)=>{
      console.log(res["data"])
      this.route.navigateByUrl("/payement")
    })
  }

}
