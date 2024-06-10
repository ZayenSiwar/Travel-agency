import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RvoitureService {

  constructor(private http: HttpClient) { }
  Rvoiture(datededepart:Date,date_arrivee:Date,user:any,voiture:any) {
    return this.http.post(`${environment.baseUrl}/gRvoiture/create`,{datededepart,date_arrivee,user,voiture});
  }
  
}
