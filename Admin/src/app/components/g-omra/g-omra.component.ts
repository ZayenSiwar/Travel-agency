import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { OmraService } from 'src/app/services/omra.service';
@Component({
  selector: 'app-g-omra',
  templateUrl: './g-omra.component.html',
  styleUrls: ['./g-omra.component.css']
})
export class GOmraComponent implements OnInit {
  term: any
  listomra: any
omraForm:any
  p: number = 1; 
  formBuilder: any;
  constructor(private  OmraService: OmraService) { }

  ngOnInit(): void {
    this.getAllomra()
   
    this.omraForm = this.formBuilder.group({
      nom: ['', Validators.required],
      duree: ['', Validators.required],
      client: ['', Validators.required],
      prix: ['', Validators.required],

    })
  }
  getAllomra() {
    this.OmraService.getOmra().subscribe((res: any) => {
      this.listomra = res.data;
      console.log('list omra', this.listomra);
    })
  }

  deleteOmra(id: any) {
    this.OmraService.deleteOmra(id).subscribe((res: any) => {
      console.log("omra delated")

      this.getAllomra()
    })
  }
}
