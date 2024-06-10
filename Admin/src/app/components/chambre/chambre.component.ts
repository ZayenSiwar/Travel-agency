import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {

  id = this.ActivatedRoute.snapshot.params["id"]
  listchambre:any
  chambre:any
  term:any
  p: number = 1;
  chambreForm:FormGroup
  fileToUpload: Array<File> = []
  url='http://localhost:3008/getImage/'
  constructor(private hotelService: HotelService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
this.getAllchambre()
this.chambreForm = this.formBuilder.group({
  nombredelit: ['', Validators.required],
  surface: ['', Validators.required],
  salledebain: ['', Validators.required],
  image: ['', Validators.required],
  prix: ['', Validators.required],
  prixdeuxPersonnes: ['', Validators.required],
  prixTroisPersonnes: ['', Validators.required],

})
  }
  getAllchambre(){
    this.hotelService.getChambre().subscribe((res:any)=>{
      this.listchambre=res.data;
      console.log('list chambre',this.listchambre)
    })
  }

  getOneChambre(id:any){
    this.hotelService. getOneChambre(id).subscribe(
      (res:any)=>{
        this.chambre=res["data"];
        console.log("id",id)
  
        this.chambreForm.patchValue({
          nom:this.chambre.nom,
          nombredelit:this.chambre.nombredelit,
          surface:this.chambre.surface,
          salledebain:this.chambre.salledebain,
          prix:this.chambre.prix,
      
        }
        )
        console.log("chambre",this.chambre)
      }
    )
  }
  deletechambre(id: any) {
    this.hotelService.deletechambre(id).subscribe((res: any) => {
      console.log("voiture delated")

      this.getAllchambre()
    })
  }
}
