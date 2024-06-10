import { Component, OnInit } from '@angular/core';
import {ExcursionService } from 'src/app/services/excursion.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailee-excursion',
  templateUrl: './detailee-excursion.component.html',
  styleUrls: ['./detailee-excursion.component.css']
})
export class DetaileeExcursionComponent implements OnInit {

  id=this.ActivatedRoute.snapshot.params["id"]
  excursion: any;
  excursionForm!:FormGroup
  datededepart: any;
  dated: any;
  datef: any;
  
  nbj = 0;
  myDate = new Date(Date.now());
  formDemande!: FormGroup;
  client: any;
  payement: any;
  LocalDate: Date = new Date();
  date = new Date();
  connect: boolean = false
  routers: any;
  totalprix:number=0
  submitted = false;
  constructor(private ActivatedRoute: ActivatedRoute, private excursionService: ExcursionService ,  
    private fb : FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.getOneVehicule();
    this.todaydate();
    this.result();
    this.excursionForm = this.fb.group({
      datededepart: ['', Validators.required],
    })
  }
  getOneVehicule() {
    this.excursionService.getOneExcursion(this.id).subscribe(
      (res: any) => {
        this.excursion = res["data"]
        console.log("excursion: ", res["data"])

      }
    )
  }
  get f() { return this.excursionForm.controls; }
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
    const id=this.ActivatedRoute.snapshot.params["id"]
    const userId = this.getUser()._id;
      console.log("user",userId)
      const datededepart = this.excursionForm.get('datededepart')?.value;
     console.log('date depart',datededepart)
      this.excursionService.Rexcursion(datededepart,userId,id).subscribe(
        (res: any) => {
          console.log(res);

          Swal.fire(
            'demande envoyer',
            'success'
          )

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
   this.datededepart < result
    return test;
  }

  todaydate(){
    const test1:any = this.formatDate(new Date());
    console.log('test1', test1);
    return test1;
  }
  calculerprix(e:any,prix:any){
    this.totalprix=Number(e.target.value) * prix
    console.log("total prix",this.totalprix)
   }
}
