import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RvolService {

  constructor(private http: HttpClient) { }
  Rvol(datededepart:Date,date_arrivee:Date,user:any,voyage:any) {
    return this.http.post(`${environment.baseUrl}/gRvoyage/create`,{datededepart,date_arrivee,user,voyage});
  }
}
