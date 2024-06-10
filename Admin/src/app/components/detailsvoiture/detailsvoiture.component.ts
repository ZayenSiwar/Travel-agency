import { Component, OnInit } from '@angular/core';
import { VoitureService } from 'src/app/services/voiture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsvoiture',
  templateUrl: './detailsvoiture.component.html',
  styleUrls: ['./detailsvoiture.component.css']
})
export class DetailsvoitureComponent implements OnInit {
  id=this.ActivatedRoute.snapshot.params["id"]
  voiture: any
  tabdetails=[]
  constructor(private ActivatedRoute: ActivatedRoute, private VoitureService: VoitureService) { }

  ngOnInit(): void {
    this.getOneVehicule()
  }
  getOneVehicule() {
    this.VoitureService.getOneVoiture(this.id).subscribe(
      (res: any) => {
        this.voiture = res["data"]
        console.log("voiture: ", res["data"])
        this.tabdetails = res["data"].detailles.split('\n');
    //  this.tabdetails=res["data"].detailles
     console.log('tabdetail',  this.tabdetails)
      }
    )
  }
}
