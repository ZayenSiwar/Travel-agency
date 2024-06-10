import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailshotel',
  templateUrl: './detailshotel.component.html',
  styleUrls: ['./detailshotel.component.css']
})
export class DetailshotelComponent implements OnInit {
  id=this.ActivatedRoute.snapshot.params["id"]
 hotel: any
  constructor(private ActivatedRoute: ActivatedRoute, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.getOneHotel()
  }
  getOneHotel() {
    this.hotelService.getOneHotel(this.id).subscribe(
      (res: any) => {
        this.hotel = res["data"]
        console.log("hotel: ", res["data"])

      }
    )
  }
}
