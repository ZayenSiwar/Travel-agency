import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-detaille-reservation',
  templateUrl: './detaille-reservation.component.html',
  styleUrls: ['./detaille-reservation.component.css']
})
export class DetailleReservationComponent implements OnInit {
  id=this.ActivatedRoute.snapshot.params["id"]
  user: any;
  idVoyage:any;
  

   constructor(private ActivatedRoute: ActivatedRoute, private reservationService: UsersService, private voyageService:VoyageService) { }
 
  ngOnInit(): void {
    this.getOneReservation()
  }
  getOneReservation(){
  this.reservationService.getUserById(this.id).subscribe(
    (res: any) => {
      this.user = res["data"]
      console.log("user: ", this.user)

    }
  )
}
}
