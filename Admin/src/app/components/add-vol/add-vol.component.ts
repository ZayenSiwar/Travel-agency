import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {VoyageService } from 'src/app/services/voyage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent implements OnInit {

 
  volForm!: FormGroup;
  addVoyage: any
  fileToUpload: Array<File> = []
  constructor(private VoyageService: VoyageService, private formBuilder: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.volForm = this.formBuilder.group({
      nom: ['', Validators.required],
     client: ['', Validators.required],
     description: ['', Validators.required],
     datededepart: ['', Validators.required],
     datededecloture: ['', Validators.required],
     avion: ['', Validators.required],
    })
  }
  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
  AddVoyage() {
    let formData = new FormData()
    formData.append('client', this. volForm.value.client)
    formData.append('destination', this. volForm.value.destination)
    formData.append('datededepart', this. volForm.value.datededepart)
    formData.append('datedecloture', this.volForm.value.datedecloture)
    formData.append('vol', this.volForm.value.vol)
 
    this.VoyageService.AddVoyage(formData)
  .subscribe(
    (res: any) => {
      console.log("hotel : ", res["data"])
      this.volForm.reset();
      this.route.navigateByUrl("/home/gHotel")
    },
   )
  }

    }
  


