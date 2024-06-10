import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { ArrangementService } from 'src/app/services/arrangement.service';
import { SupplimentaireService } from 'src/app/services/supplimentaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  ghotel: any
  term: any
  listhotel: any
  listsup: any
  listArg: any
  listcategorie:any

  p: number = 1;
  id = this.ActivatedRoute.snapshot.params["id"]

  priceSelection=""
  minValue = 0;
  maxValue = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };
  // HotelForm: FormGroup
  constructor(private HotelService: HotelService,private arrangementService: ArrangementService,private supplimentaireService: SupplimentaireService, private ActivatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.getAllHotel()
    this.getallcategorie()
  }
  getAllHotel() {
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data;
      console.log('reservation Hotel', this.listhotel);
    })
  }
  filterbycategorie(e:any){
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data.filter((el:any)=>el.categorie[0].nombreEtoile==e.target.value)
      console.log('reservation Hotel', this.listhotel);
    })
  }
  // getAllsupplimentaire() {
  //   this.supplimentaireService.getSupplimentaire().subscribe((res: any) => {
  //     this.listsup = res.data;
  //     console.log('list supp', this.listsup);
  //   })
  // }
  // getAllarrangement() {
  //   this.arrangementService.getSuArrangement().subscribe((res: any) => {
  //     this.listArg = res.data;
  //     console.log('list arrg', this.listArg);
  //   })
  // }
  getAllHotel1(e:any) {
    console.log("vvv",e.target.value)
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data.filter((el:any)=>el.arrangement[0].pentionComplet===e.target.value)
      console.log('reservation Hotel', this.listhotel);
    })
  }
  getAllHotel2(e:any) {
    console.log("vvv",e.target.value)
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data.filter((el:any)=>el.arrangement[0].demiPention===e.target.value)
      console.log('reservation Hotel', this.listhotel);
    })
  }
  getAllHotel3(e:any) {
    console.log("vvv",e.target.value)
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data.filter((el:any)=>el.arrangement[0].petitdejeuner===e.target.value)
      console.log('reservation Hotel', this.listhotel);
    })
  }
  getAllHotel4(e:any) {
    console.log("vvv",e.target.value)
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data.filter((el:any)=>el.supplimentaire[0].vueMer===e.target.value)
      console.log('reservation Hotel', this.listhotel);
    })
  }
  getAllHotel5(e:any) {
    console.log("vvv",e.target.value)
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data.filter((el:any)=>el.supplimentaire[0].vuePescine===e.target.value)
      console.log('reservation Hotel', this.listhotel);
    })
  }
  getAllHotel6(e:any) {
    console.log("vvv",e.target.value)
    this.HotelService.getHotel().subscribe((res: any) => {
      this.listhotel = res.data.filter((el:any)=>el.supplimentaire[0].vueJardin===e.target.value)
      console.log('reservation Hotel', this.listhotel);
    })
  }
  getallcategorie(){
    this.HotelService.getcategorie().subscribe((res: any) => {
      this.listcategorie = res.data;
      console.log(' list categorie', this.listcategorie);
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

