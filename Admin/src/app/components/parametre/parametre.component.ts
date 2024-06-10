import { Component, OnInit } from '@angular/core';
import { ParametreService } from 'src/app/services/parametre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {
  id = this.ActivatedRoute.snapshot.params["id"]
  listParametre:any
  Parametre:any
  term:any
  p: number = 1;
  parametreForm:FormGroup
  fileToUpload: Array<File> = []
  url='http://localhost:3008/getImage/'
  constructor(private parametreService: ParametreService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
this.getAllParametre()
this.getOneparametre(this.id)

}
// this.voyageForm = this.formBuilder.group({
//   nom: ['', Validators.required],
//   client: ['', Validators.required],
//   paysdedepart: ['', Validators.required],
//   paysdecloture: ['', Validators.required],
//   destination: ['', Validators.required],
//   prix: ['', Validators.required],


// })
//   }
getAllParametre() {
  this.parametreService.getParametre().subscribe((res: any) => {
    this.listParametre = res.data;
    console.log('list para', this.listParametre);
  })
}
  
  updateParametre() {
    this.parametreService.updateParametre(this.parametreForm.value,this.Parametre._id).subscribe((res: any) => {
      this.listParametre = res["data"]
      console.log('list voiture', this.listParametre);
      this.getAllParametre()
      this.route.navigateByUrl("/gestionVoiture")
    })
  }
  updatepara() {
Swal.fire(" voila!", "mot de passe modifie !", "success")
  
}
getOneparametre(id:any){
  this.parametreService.getOneparametre(id).subscribe(
    (res:any)=>{
      this.Parametre=res["data"]
      console.log("id",id)
      this.parametreForm.patchValue({
        nomSite:this.Parametre.nomSite,
        email:this.Parametre.email,
        telephone:this.Parametre.telephone,
        adresse:this.Parametre.adresse
      }
      )
     
      console.log("parametre",this.Parametre)
    }
  )
}
}
