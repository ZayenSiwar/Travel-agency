import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TemoignageService } from 'src/app/services/temoignage.service';

@Component({
  selector: 'app-details-hotel',
  templateUrl: './details-hotel.component.html',
  styleUrls: ['./details-hotel.component.css']
})
export class DetailsHotelComponent implements OnInit {

 hotelForm!:FormGroup
 Reviews:any[]=[];
  datededepart: any;
  dated: any;
  datef: any;
  date_arrivee: any;
  nbj = 0;
  myDate = new Date(Date.now());
  formDemande!: FormGroup;
  client: any;
  payement: any;
  LocalDate: Date = new Date();
  date = new Date();
  connect: boolean = false
  routers: any;
  submitted = false;
  id=this.ActivatedRoute.snapshot.params["id"]
  hotel: any
  reviewForm!:FormGroup
   constructor(private hotelService:HotelService ,private ActivatedRoute: ActivatedRoute , private formBuilder:FormBuilder,
    private tem:TemoignageService ) { }

  ngOnInit(): void {
    this.getOneHotel()
    this.reviewForm = this.formBuilder.group({
      nomClient: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
      // avis: ['', Validators.required],
     
    })
  }
  getOneHotel() {
    this.hotelService.getOneHotel(this.id).subscribe(
      (res: any) => {
        this.hotel = res["data"]
        console.log("hotel: ", res["data"])
        this.Reviews = this.hotel.temoignage

      }
    )
  }
  getUser(){
    const user = localStorage.getItem(("userconnect"));
    if(user){
     const userId = JSON!.parse(user)
      return userId
    }
  }
  // addDemande() {
  //   console.log("dddd")
  //   this.submitted = true;
 
  //   const id=this.ActivatedRoute.snapshot.params["id"]
  //   const userId = this.getUser()._id;
  //     console.log("user",userId)
  //     const date_arrivee = this.hotelForm.get('date_arrivee')?.value;
  //     const datededepart = this.hotelForm.get('datededepart')?.value;
     
  //     this.hotelService.Rhotel(date_arrivee,datededepart, userId,id).subscribe(
  //       (res: any) => {
  //         console.log(res);

  //         Swal.fire(
  //           'demande envoyer',
  //           'success'
  //         )

  //       }

  //     )
    
  // }
  addReview(){
    const hotel_id = this.ActivatedRoute.snapshot.params['id'];
   this.tem.AddTemoignage(this.reviewForm.value,hotel_id).subscribe((res:any)=>{
     this.Reviews.push();
     this.ngOnInit();
     console.log(res);

   },
   (error:any)=>{
    console.log("error",error)
   }
   
   )

  }


  onBlurEvent(event: any) {
    console.log(event.target.value);
    this.datededepart = event.target.value;
    console.log("date_debut", this.datededepart)
  }
  onEvent(event: any) {
    console.log(event.target.value);
    this.date_arrivee = event.target.value;
    console.log("date_fin", this.date_arrivee)
  }
  formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.date.getMonth() + 1,
        this.date.getDate(),
      ].join('-')
    );
  }
  result(){
    let test:any
    const result:any = this.formatDate(new Date());
    console.log('Date today', result);
    if (this.datededepart < result ) {
      test = false;
      console.log('test', test);
    }else if (this.date_arrivee <= this.datededepart){
      test = false;
      console.log('test', test);
    } 
    else {
      test = true;
    }
    return test;
  }

  todaydate(){
    const test1:any = this.formatDate(new Date());
    console.log('test1', test1);
    return test1;
  }
}
