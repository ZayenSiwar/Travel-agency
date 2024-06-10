import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { VoitureService } from 'src/app/services//voiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RvoitureService } from 'src/app/services/rvoiture.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { VolService } from 'src/app/services/vol.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  listhotel:any
  search_nom:any
  search_adresse:any
  listcategorie:any
  listvoiture:any
  // voitureForm!:FormGroup
  // datededepart: any;
  // dated: any;
  // datef: any;
  // date_arrivee: any;
  // nbj = 0;
  // myDate = new Date(Date.now());
  // formDemande!: FormGroup;
  // client: any;
  // payement: any;
  // LocalDate: Date = new Date();
  // date = new Date();
  // connect: boolean = false
  // routers: any;
  // submitted = false
  listVol:any
  search_nom1:any
  constructor(private voyageService: VolService,private HotelService: HotelService, private voitureService:VoitureService ,  private fb : FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.getAllHotel()
    this. getallcategorie()
    this.getAllVoiture()
    this.getAllVol()

  }
  getAllVol() {
    this.voyageService.getVoyage().subscribe((res: any) => {
      this.listVol = res.data;
      console.log('reservation vol', this.listVol);
    })
  }
  getAllHotel() {
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data;
      console.log('reservation Hotel', this.listhotel);
    })
  }

  getallcategorie(){
    this.HotelService.getcategorie().subscribe((res: any) => {
      this.listcategorie = res.data;
      console.log(' list categorie', this.listcategorie);
    })
  }
  filterhotelbycategorie(e:any){
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data.filter((el:any)=>el.categorie[0]._id==e.target.value);
      console.log('reservation Hotel', this.listhotel);
    })
  }
  getAllVoiture() {
    this.voitureService.getVoiture().subscribe((res: any) => {
      this.listvoiture = res.data;
      console.log('liste voiture', this.listvoiture);
    })
  }
  // get f() { return this.voitureForm.controls; }
  // datechanged($event: any) {
  //   console.log($event.target.value);
  // }

  // getUser(){
  //   const user = localStorage.getItem(("userconnect"));
  //   if(user){
  //    const userId = JSON!.parse(user)
  //     return userId
  //   }
  // }
  // addDemande() {
  //   console.log("dddd")
  //   this.submitted = true;
  //   // if (this.voitureForm.invalid || this.result() == false) {
  //   //   console.log("result de test",this.result())
  //   //   return;
      
  //   // } 
  //   const userId = this.getUser()._id;
  //     console.log("user",userId)
  //     const datededepart = this.voitureForm.get('datededepart')?.value;
  //     const date_arrivee = this.voitureForm.get('date_arrivee')?.value;
  //     this.voitureService.Rvoiture(datededepart,date_arrivee, userId,this.id).subscribe(
  //       (res: any) => {
  //         console.log(res);

  //         Swal.fire(
  //           'demande envoyer',
  //           'success'
  //         )

  //       }

  //     )
    
  // }


  // onBlurEvent(event: any) {
  //   console.log(event.target.value);
  //   this.datededepart = event.target.value;
  //   console.log("date_debut", this.datededepart)
  // }
  // onEvent(event: any) {
  //   console.log(event.target.value);
  //   this.date_arrivee = event.target.value;
  //   console.log("date_fin", this.date_arrivee)
  // }
  // formatDate(date: Date) {
  //   return (
  //     [
  //       date.getFullYear(),
  //       this.date.getMonth() + 1,
  //       this.date.getDate(),
  //     ].join('-')
  //   );
  // }
  // result(){
  //   let test:any
  //   const result:any = this.formatDate(new Date());
  //   console.log('Date today', result);
  //   if (this.datededepart < result ) {
  //     test = false;
  //     console.log('test', test);
  //   }else if (this.date_arrivee <= this.datededepart){
  //     test = false;
  //     console.log('test', test);
  //   } 
  //   else {
  //     test = true;
  //   }
  //   return test;
  // }

  // todaydate(){
  //   const test1:any = this.formatDate(new Date());
  //   console.log('test1', test1);
  //   return test1;
  // }
}
