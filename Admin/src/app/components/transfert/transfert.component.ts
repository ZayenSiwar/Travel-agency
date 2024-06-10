import { Component, OnInit } from '@angular/core';
import { TransfertService } from 'src/app/services/transfert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.css']
})
export class TransfertComponent implements OnInit {
  url='http://localhost:3008/getImage/'
  voiture:any
  
  term: any
  listvoiture: any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
  voitureForm:FormGroup
  constructor(private transfertService: TransfertService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllvoiture()
    this.voitureForm = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      modele: ['', Validators.required],
      prix: ['', Validators.required],

    })
  }
  
  getAllvoiture() {
    this.transfertService.getVoiture().subscribe((res: any) => {
      this.listvoiture = res.data;
      console.log('list voiture', this.listvoiture);
    })
  }
  getOneVoiture(id:any){
    this.transfertService.getOneVoiture(id).subscribe(
      (res:any)=>{
        this.voiture=res["data"]
        console.log("id",id)

        this.voitureForm.patchValue({
          nom:this.voiture.nom,
          type:this.voiture.type,
          modele:this.voiture.modele,
          prix:this.voiture.prix
        }
        )
        console.log("voiture",this.voiture)
      }
    )
  }

}
