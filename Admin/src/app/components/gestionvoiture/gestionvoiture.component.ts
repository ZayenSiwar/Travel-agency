import { Component, OnInit } from '@angular/core';
import { VoitureService } from 'src/app/services/voiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-gestionvoiture',
  templateUrl: './gestionvoiture.component.html',
  styleUrls: ['./gestionvoiture.component.css']
})
export class GestionvoitureComponent implements OnInit {
  url='http://localhost:3008/getImage/'
  voiture:any
  
  term: any
  listvoiture: any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
  voitureForm:FormGroup
  constructor(private voitureService: VoitureService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

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
    this.voitureService.getVoiture().subscribe((res: any) => {
      this.listvoiture = res.data;
      console.log('list voiture', this.listvoiture);
    })
  }
  getOneVoiture(id:any){
    this.voitureService.getOneVoiture(id).subscribe(
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
  deleteVoiture(id: any) {
    this.voitureService.deleteVoiture(id).subscribe((res: any) => {
      console.log("voiture delated")

      this.getAllvoiture()
    })
  }
  UpdateVoiture() {
    this.voitureService.updateVoiture(this.voitureForm.value,this.voiture._id).subscribe((res: any) => {
      this.listvoiture = res["data"]
      console.log('list voiture', this.listvoiture);
      this.getAllvoiture()
      this.route.navigateByUrl("/gestionVoiture")
    })
  }

}


