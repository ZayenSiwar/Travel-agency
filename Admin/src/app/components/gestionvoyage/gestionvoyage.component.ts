import { Component, OnInit } from '@angular/core';
import { VoyageService } from 'src/app/services/voyage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-gestionvoyage',
  templateUrl: './gestionvoyage.component.html',
  styleUrls: ['./gestionvoyage.component.css']
})
export class GestionvoyageComponent implements OnInit {
  id = this.ActivatedRoute.snapshot.params["id"]
  listVoyage:any
  voyage:any
  term:any
  p: number = 1;
  voyageForm:FormGroup
  fileToUpload: Array<File> = []
  url='http://localhost:3008/getImage/'
  constructor(private voyageService: VoyageService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
this.getAllvoyage()
this.voyageForm = this.formBuilder.group({
  nom: ['', Validators.required],
  client: ['', Validators.required],
  paysdedepart: ['', Validators.required],
  paysdecloture: ['', Validators.required],
  destination: ['', Validators.required],
  prix: ['', Validators.required],


})
  }
   AddVoyage() {
   
    let formData = new FormData()
    formData.append('nom', this. voyageForm.value.nom)
    formData.append('type', this. voyageForm.value.type)
    formData.append('modele', this.voyageForm.value.modele)
    formData.append('image', this.fileToUpload[0])
  
  this.voyageService.AddVoyage(formData)
  .subscribe(
    (res: any) => {
      console.log("voiture : ", res["data"])
      this.voyageForm.reset();
      this.route.navigateByUrl("/listvoyage")
    },
)
  }


getAllvoyage(){
  this.voyageService.getVoyage().subscribe((res:any)=>{
    this.listVoyage=res.data;
    console.log('listvoyage',this.listVoyage)
  })
}
getOnevoyage(id:any){
  this.voyageService.getOneVoyage(id).subscribe(
    (res:any)=>{
      this.voyage=res["data"];
      console.log("id",id)

      this.voyageForm.patchValue({
        nom:this.voyage.nom,
        paysdedepart:this.voyage.datededepart,
        paysarrivage:this.voyage.datedecloture,
        destination:this.voyage.destination,
        prix:this.voyage.prix,
     
      }
      )
      console.log("voiture",this.voyage)
    }
  )
}
deletevoyage(id:any){
  this.voyageService.deletevoyage(id).subscribe((res:any)=>{
    console.log("voyage delated")
   
    this.getAllvoyage()
  })
  
}
UpdateVoyage() {
  this.voyageService.updateVoyage(this.voyageForm.value,this.voyage._id).subscribe((res: any) => {
    this.listVoyage = res["data"]
    console.log('list voyage', this.listVoyage);
    this.getAllvoyage()
    this.route.navigateByUrl("/gestionVoyage")
  })
}

}

