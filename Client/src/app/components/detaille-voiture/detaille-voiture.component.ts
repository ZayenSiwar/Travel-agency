import { Component, OnInit } from '@angular/core';
import { VoitureService } from 'src/app/services/voiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RvoitureService } from 'src/app/services/rvoiture.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detaille-voiture',
  templateUrl: './detaille-voiture.component.html',
  styleUrls: ['./detaille-voiture.component.css']
})
export class DetailleVoitureComponent implements OnInit {
  id=this.ActivatedRoute.snapshot.params["id"]
  voiture: any;
  voitureForm!:FormGroup
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
  constructor(private ActivatedRoute: ActivatedRoute, private VoitureService: VoitureService , private voitureService :RvoitureService, 
    private fb : FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.getOneVehicule();
    this.todaydate();
    this.result();
    this.voitureForm = this.fb.group({
      datededepart: ['', Validators.required],
      date_arrivee: ['', Validators.required],
    })
  }
  getOneVehicule() {
    this.VoitureService.getOneVoiture(this.id).subscribe(
      (res: any) => {
        this.voiture = res["data"]
        console.log("voiture: ", res["data"])

      }
    )
  }
  get f() { return this.voitureForm.controls; }
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
      const datededepart = this.voitureForm.get('datededepart')?.value;
      const date_arrivee = this.voitureForm.get('date_arrivee')?.value;
      this.voitureService.Rvoiture(datededepart,date_arrivee, userId,id).subscribe(
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
