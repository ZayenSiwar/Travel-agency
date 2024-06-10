import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {
  listhotel: any

  priceSelection=""
  minValue = 0;
  maxValue = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };
  constructor(private HotelService: HotelService) { }

  ngOnInit(): void {
    this.getAllHotel()
  }
  getAllHotel() {
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data;
      console.log('reservation Hotel', this.listhotel);
    })
  }
  changePrice() {
    console.log('Price change', this.priceSelection);
    let event = this.priceSelection
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data
      if (event !== undefined) {
        const ListhotelByPrice = this.listhotel.filter((elemt: any) => elemt.prix >= event[0] && elemt.prix <= event[1]);
        this.listhotel = ListhotelByPrice;
        console.log('filter by price', this.listhotel)
      }
    })
  }
}
