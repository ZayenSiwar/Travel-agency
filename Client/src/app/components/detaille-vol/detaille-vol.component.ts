import { Component, OnInit } from '@angular/core';
import { VolService } from 'src/app/services/vol.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RvolService } from 'src/app/services/rvol.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TemoignageService } from 'src/app/services/temoignage.service';

@Component({
  selector: 'app-detaille-vol',
  templateUrl: './detaille-vol.component.html',
  styleUrls: ['./detaille-vol.component.css']
})
export class DetailleVolComponent implements OnInit {
  id=this.ActivatedRoute.snapshot.params["id"]
  voyage: any
  Reviews:any[]=[];
  volForm!:FormGroup
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
  reviewForm!:FormGroup
  constructor(private ActivatedRoute: ActivatedRoute, private tem:TemoignageService, private voyageService: RvolService,private VoyageService: VolService, private fb : FormBuilder,private router: Router) 
   { }

  ngOnInit(): void {
    this.getOneVoyage();
    this.todaydate();
    this.result();
    this.volForm = this.fb.group({
      datededepart: ['', Validators.required],
      date_arrivee: ['', Validators.required],
    })
  }
  getOneVoyage() {
    this.VoyageService.getOneVoyage(this.id).subscribe(
      (res: any) => {
        this.voyage = res["data"]
        console.log("voyage: ", res["data"])

      }
    )
  }
  get f() { return this.volForm.controls; }
  datechanged($event: any) {
    console.log($event.target.value);
  }
  getUser(){
    const user = localStorage.getItem(("userconnect"));
    if(user){
     const userId = JSON!.parse(user)
      return userId
    }
  }
  addDemande() {
    console.log("dddd")
    this.submitted = true;
    // if (this.voitureForm.invalid || this.result() == false) {
    //   console.log("result de test",this.result())
    //   return;
      
    // } 
    const userId = this.getUser()._id;
      console.log("user",userId)
      const datededepart = this.volForm.get('datededepart')?.value;
      const date_arrivee = this.volForm.get('date_arrivee')?.value;
      this.voyageService.Rvol(datededepart,date_arrivee, userId,this.id).subscribe(
        (res: any) => {
          console.log(res);

          Swal.fire(
            'demande envoyer',
            'success'
          )

        }

      )}
      addReview(){
        const voyage_id = this.ActivatedRoute.snapshot.params['id'];
       this.tem.AddTemoignage(this.reviewForm.value,voyage_id).subscribe((res:any)=>{
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
