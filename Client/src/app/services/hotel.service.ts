import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  getHotel() {
    return this.http.get(`${environment.baseUrl}/gHotel/getall`);
  }
  getOneHotel(id: any) {
    return this.http.get(`${environment.baseUrl}/gHotel/getbyid/${id}`);
  }

  deleteHotel(id: any) {
    return this.http.delete(`${environment.baseUrl}/gHotel/delete/${id}`)
  }
  AddHotel(Voiture: any) {
    return this.http.post(`${environment.baseUrl}/gHotel/create`, Voiture);
  }
  UpdateHotel(id: any, voiture: any) {
    return this.http.put(`${environment.baseUrl}/gHotel/update/${id}`, voiture)
  }
  getcategorie() {
    return this.http.get(`${environment.baseUrl}/categorie/getall`);
  }

  getarrangement() {
    return this.http.get(`${environment.baseUrl}/arrangement/getall`);
  }

  getsupplimentaire() {
    return this.http.get(`${environment.baseUrl}/supplementaire/getall`);
  }
  Rhotel(reservation:any) {
    return this.http.post(`${environment.baseUrl}/grhotel/create`,reservation);
  }


}
