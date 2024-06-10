import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

  url='http://localhost:3008/getImage/'
 contrat:any
 contratpromo:any
 contratearly:any
  listcontratPromo:any
  listcontratEarly:any
  term: any
  listcontrat: any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
  contratForm:FormGroup
  constructor(private contratService: ContratService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllcontrat()
    this.getContratPromo()
      this.getContratEarly()
    this.contratForm = this.formBuilder.group({
      debutContrat: ['', Validators.required],
      finContrat: ['', Validators.required],
      prix: ['', Validators.required],

    })
  }

  getAllcontrat() {
    this.contratService.getContrat().subscribe((res: any) => {
      this.listcontrat = res.data;
      console.log('listcontrat', this.listcontrat);
    })
  }
  getOneContrat(id:any){
    this.contratService.getOneContrat(id).subscribe(
      (res:any)=>{
        this.contrat=res["data"]
        console.log("id",id)

        this.contratForm.patchValue({
          debutContrat:this.contrat.debutContrat,
          finContrat:this.contrat.finContrat,
           prix:this.contrat.prix
        }
        )
        console.log("contrat",this.contrat)
      }
    )
  }
  deletecontrat(id: any) {
    this.contratService.deleteContrat(id).subscribe((res: any) => {
      console.log("contrat delated")

      this.getAllcontrat()
      
    })
  }
  Updatecontrat() {
    this.contratService.updateContrat(this.contratForm.value,this.contrat._id).subscribe((res: any) => {
      this.listcontrat = res["data"]
      console.log('list contrat', this.listcontrat);
      this.getAllcontrat()
      this.route.navigateByUrl("/gestionVoiture")
    })
  }
  
  getContratPromo() {
    this.contratService.getContratPromo().subscribe((res: any) => {
      this.listcontratPromo = res.data;
      console.log('listcontrat', this.listcontratPromo);
    })
  }
  getOneContratPromo(id:any){
    this.contratService.getOneContratPromo(id).subscribe(
      (res:any)=>{
        this.contratpromo=res["data"]
        console.log("id",id)

        this.contratForm.patchValue({
          debutContrat:this.contratpromo.debutContrat,
          finContrat:this.contratpromo.finContrat,

          prix:this.contratpromo.prix
        }
        )
        console.log("contrat",this.contratpromo)
      }
    )
  }
  deleteContratPromo(id: any) {
    this.contratService.deleteContratPromo(id).subscribe((res: any) => {
      console.log("contrat delated")

      this.getContratPromo()
    })
  }
  updateContratPromo() {
    this.contratService.updateContratPromo(this.contratForm.value,this.contratpromo._id).subscribe((res: any) => {
      this.listcontratPromo = res["data"]
      console.log('list contrat promos', this.listcontratPromo);
      this.getContratPromo()
      // this.route.navigateByUrl("/gestionVoiture")
    })
  }
    getContratEarly() {
      this.contratService.getContratEarly().subscribe((res: any) => {
        this.listcontratEarly = res.data;
        console.log('listcontrat', this.listcontratEarly);
      })
    }
    getOneContratEarly(id:any){
      this.contratService.getOneContrat(id).subscribe(
        (res:any)=>{
          this.contratearly=res["data"]
          console.log("id",id)
  
          this.contratForm.patchValue({
            debutContrat:this.contratearly.debutContrat,
            finContrat:this.contratearly.finContrat,
  
            prix:this.contratearly.prix
          }
          )
          console.log("contrat",this.contratearly)
        }
      )
    }
    deleteContratEarly(id: any) {
      this.contratService.deleteContratEarly(id).subscribe((res: any) => {
        console.log("contrat delated")
  
        this.getContratEarly()
      })
    }
    updateContratEarly() {
      this.contratService.updateContratEarly(this.contratForm.value,this.contratearly._id).subscribe((res: any) => {
        this.listcontratEarly = res["data"]
        console.log('list contrat Early', this.listcontratEarly);
        this.getContratEarly()
        // this.route.navigateByUrl("/")
      })
    } 
      
}
