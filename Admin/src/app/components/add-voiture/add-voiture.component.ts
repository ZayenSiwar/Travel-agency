import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoitureService } from 'src/app/services/voiture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {
  errorMessage = ''
  voitureForm: FormGroup;
  addVoiture: any
  fileToUpload: Array<File> = []
  constructor(private voitureService: VoitureService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.voitureForm = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      modele: ['', Validators.required],
      prix: ['', Validators.required],
      image: ['', Validators.required],
      place: ['', Validators.required],
      porte: ['', Validators.required],
      baggage: ['', Validators.required],
      climatisation: ['', Validators.required],
      essence: ['', Validators.required],
      boiteManuelle: ['', Validators.required],
    })

  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
  AddVoiture() {
    
    let formData = new FormData()
    formData.append('nom', this.voitureForm.value.nom)
    formData.append('type', this.voitureForm.value.type)
    formData.append('modele', this.voitureForm.value.modele)
    formData.append('prix', this.voitureForm.value.prix)
    formData.append('photo', this.fileToUpload[0])
    formData.append('place', this.voitureForm.value.place)
    formData.append('porte', this.voitureForm.value.porte)
    formData.append('baggage', this.voitureForm.value.baggage)
    formData.append('climatisation', this.voitureForm.value.climatisation)
    formData.append('essence', this.voitureForm.value.essence)
    formData.append('boiteManuelle', this.voitureForm.value.boiteManuelle)
    


    this.voitureService.AddVoiture(formData)
      .subscribe(
        (res: any) => {
          console.log( res["data"])
          console.log("voiture : ", res["data"])
          this.voitureForm.reset();
          this.route.navigateByUrl("/home/gestionVoiture")
        },
        err => {
          this.errorMessage = err.error.errorMessage

        })

  }
}


