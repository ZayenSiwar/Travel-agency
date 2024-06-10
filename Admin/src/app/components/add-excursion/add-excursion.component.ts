import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExcursionService } from 'src/app/services/excursion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-excursion',
  templateUrl: './add-excursion.component.html',
  styleUrls: ['./add-excursion.component.css']
})
export class AddExcursionComponent implements OnInit {
  errorMessage=''
  excursionForm!: FormGroup;
  addexcursion: any
  
  myFiles:string [] = [];
  

  constructor(private excursionService: ExcursionService, private formBuilder: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.excursionForm = this.formBuilder.group({
      destination: ['', Validators.required],
      date: ['', Validators.required],
      nbrpersonne: ['', Validators.required],
      prix: ['', Validators.required],
      duree: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
onFileChange(event:any) {
  for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
      console.log(this.myFiles[i])
  }
}
Addexcursion() {
   
    let formData = new FormData()
    formData.append('destination', this. excursionForm.value.destination)
    formData.append('date', this. excursionForm.value.date)
    formData.append('prix', this. excursionForm.value.prix)
    formData.append('duree', this. excursionForm.value.duree)
    formData.append('description', this. excursionForm.value.description)
    formData.append('nbrpersonne', this. excursionForm.value.nbrpersonne)
    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append("photos", this.myFiles[i]);
    }
  
  this.excursionService.AddExcursion(formData)
  .subscribe(
    (res: any) => {
      console.log(res)
      console.log("excursion : ", res["data"])
      this.excursionForm.reset();
      this.route.navigateByUrl("/excursion")
    },
    err => {
      this.errorMessage = err.error.errorMessage

    })
  }





}

