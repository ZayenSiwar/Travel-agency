import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  getReservation(){
    return this.http.get(`${environment.baseUrl}/Reservation/getall`);
    }
  
  deleteReservatio(id:any){
    return this.http.delete(`${environment.baseUrl}/Reservation/delete/${id}`)
  }
  AddReservation(Reservation:any){
    return this.http.post(`${environment.baseUrl}/Reservation/create`,Reservation);
  }
  UpdateReservation(id:any, Reservation:any){
    return this.http.put(`${environment.baseUrl}/Reservation/update/${id}`, Reservation)
  }
}
