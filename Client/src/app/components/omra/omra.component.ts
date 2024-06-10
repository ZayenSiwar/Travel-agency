import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OmraService } from 'src/app/services/omra.service';
import Swal from 'sweetalert2';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-omra',
  templateUrl: './omra.component.html',
  styleUrls: ['./omra.component.css']
})
export class OmraComponent implements OnInit {
  submitted = false;
  errorMessage=''
  OmraForm!:FormGroup;
   listomra:any

  
    constructor(private OmraService: OmraService,private ActivatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private route:Router) { }
  
    ngOnInit(): void {
      this.getAllOmra()
      this.OmraForm = this.formBuilder.group({
          nom: ['', Validators.required],
          numero: ['', Validators.required],
          email: ['', Validators.required],
          ville: ['', Validators.required],
        
      
    
     })
      
    }
    getAllOmra() {
      this.OmraService.getOmra().subscribe((res: any) => {
        this.listomra = res.data;
        console.log('liste omra', this.listomra);
      })
    }
    getUser(){
      const user = localStorage.getItem(("userconnect"));
      if(user){
       const userId = JSON!.parse(user)
        return userId
      }
    }
   Onsubmit() {
     
      console.log("dddd")
      this.submitted = true;
      // if (this.voitureForm.invalid || this.result() == false) {
      //   console.log("result de test",this.result())
      //   return;
        
      // } 
      const id=this.ActivatedRoute.snapshot.params["id"]
      const userId = this.getUser()._id;
        console.log("user",userId)
        const nom = this.OmraForm.get('nom')?.value;
        const numero = this.OmraForm.get('numero')?.value;
        const email = this.OmraForm.get('email')?.value;
        const ville = this.OmraForm.get('ville')?.value;
        this.OmraService.Romra(nom,numero,email,ville,userId).subscribe(
          (res: any) => {
            console.log(res);
  
            Swal.fire(
              'demande envoyer',
              'success'
            )})
      // let formData = new FormData()
      // formData.append('nom', this. OmraForm.value.nom)
      // formData.append('numero', this. OmraForm.value.numero)
      // formData.append('email', this. OmraForm.value.email)
      // formData.append('ville', this. OmraForm.value.ville)
    
      // this.OmraService.onsubmit(formData)
      // .subscribe(
      //   (res: any) => {
      //     console.log(res)
      //     console.log("hotel : ", res["data"])
      //     this.OmraForm.reset();
      //     this.route.navigateByUrl("/gHotel")
      //   },
  
  
  
}}

