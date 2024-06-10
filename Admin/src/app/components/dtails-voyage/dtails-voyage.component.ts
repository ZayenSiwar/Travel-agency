import { Component, OnInit } from '@angular/core';
import { VoyageService } from 'src/app/services/voyage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dtails-voyage',
  templateUrl: './dtails-voyage.component.html',
  styleUrls: ['./dtails-voyage.component.css']
})
export class DtailsVoyageComponent implements OnInit {
  id=this.ActivatedRoute.snapshot.params["id"]
  voyage: any
  constructor(private ActivatedRoute: ActivatedRoute, private voyageService: VoyageService) { }

  ngOnInit(): void {
    this.getOneVoyage()
  }
  getOneVoyage() {
    this.voyageService.getOneVoyage(this.id).subscribe(
      (res: any) => {
        this.voyage = res["data"]
        console.log("voyage: ", res["data"])

      }
    )
  }
}
