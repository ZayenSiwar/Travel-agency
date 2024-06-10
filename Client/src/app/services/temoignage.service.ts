import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemoignageService {

  constructor(private http: HttpClient) { }
  AddTemoignage(temoignage:any, hotel_id  :string){
    return this.http.post(`${environment.baseUrl}/Temoignage/createHotel/${hotel_id}`,temoignage);
  }
}
