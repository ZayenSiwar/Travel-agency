import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OmraService } from 'src/app/services/omra.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-omra',
  templateUrl: './add-omra.component.html',
  styleUrls: ['./add-omra.component.css']
})
export class AddOmraComponent implements OnInit {

  fileToUpload: Array<File> = []
  OmraForm!: FormGroup;
  addOmra: any
  constructor(private OmraService: OmraService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.OmraForm = this.formBuilder.group({
      nom: ['', Validators.required],
      datededepart: ['', Validators.required],
      datederetour: ['', Validators.required],
      duree: ['', Validators.required],
      prix: ['', Validators.required],
    })
  }
  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
  AddOmra() {
    let formData = new FormData()
    formData.append('nom', this.OmraForm.value.nom)
    formData.append('datededepart', this.OmraForm.value.type)
    formData.append('datederetour', this.OmraForm.value.modele)
    formData.append('duree', this.OmraForm.value.prix)
    formData.append('photo', this.fileToUpload[0])
 
      this.OmraService.AddOmra(formData)
      .subscribe(
        (res: any) => {
          console.log( res["data"])
          console.log("voiture : ", res["data"])
          this.OmraForm.reset();
          this.route.navigateByUrl("/home/gestionVoiture")
        },
      )
    
}
}