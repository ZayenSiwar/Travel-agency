import { Component, OnInit } from '@angular/core';
import { ExcursionService } from 'src/app/services/excursion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-excursion',
  templateUrl: './excursion.component.html',
  styleUrls: ['./excursion.component.css']
})
export class ExcursionComponent implements OnInit {

  url='http://localhost:3008/getImage/'
  excursion:any
  myFiles:string [] = [];
  term: any
  listexcursion: any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
  excursionForm:FormGroup
  constructor(private excursionService: ExcursionService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getExcursion()
    this.excursionForm = this.formBuilder.group({
      destination: ['', Validators.required],
      date: ['', Validators.required],
      nbrpersonne: ['', Validators.required],
      prix: ['', Validators.required],
      duree: ['', Validators.required],
    })
  }
  
  getExcursion() {
    this.excursionService.getExcursion().subscribe((res: any) => {
      this.listexcursion = res.data;
      console.log('list voiture', this.listexcursion);
    })
  }
  onFileChange(event:any) {
    for (var i = 0; i < event.target.files.length; i++) {
        this.myFiles.push(event.target.files[i]);
        console.log(this.myFiles[i])
    }
  }
  getOneExcursion(id:any){
    this.excursionService.getOneExcursion(id).subscribe(
      (res:any)=>{
        this.excursion=res["data"]
        console.log("id",id)

        this.excursionForm.patchValue({
          destination:this.excursion.destination              ,
          date:this.excursion.date,
          nbrpersonne:this.excursion.nbrpersonne,
          prix:this.excursion.prix,
          duree:this.excursion.duree
        }
        )
        console.log("voiture",this.excursion)
      }
    )
  }
  deleteExcursion(id: any) {
    this.excursionService.deleteExcursion(id).subscribe((res: any) => {
      console.log("excursion delated")

      this.getExcursion()
    })
  }
  updateExcursion() {
    this.excursionService.updateExcursion(this.excursionForm.value,this.excursion._id).subscribe((res: any) => {
      this.listexcursion = res["data"]
      console.log('list excursion', this.listexcursion);
      this.getExcursion()
      this.route.navigateByUrl("/excursion")
    })
  }
}
