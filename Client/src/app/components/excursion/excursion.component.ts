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
 
  term: any
  listexcursion: any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
  excursionForm!:FormGroup
  constructor(private excursionService: ExcursionService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

 
  ngOnInit(): void {
    this.getAllVoiture()
    
  }
  getAllVoiture() {
    this.excursionService.getExcursion().subscribe((res: any) => {
      this.listexcursion = res.data;
      console.log('liste voiture', this.listexcursion);
    })
  }
}
