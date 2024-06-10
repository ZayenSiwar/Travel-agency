import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmraService {
  onsubmit(omra:any){
    return this.http.post(`${environment.baseUrl}/gOmra/create`,omra);
  }

  constructor(private http: HttpClient) { }
  getOmra() {
    return this.http.get(`${environment.baseUrl}/gOmra/getall`);
  }
  getOneOmra(id: any) {
    return this.http.get(`${environment.baseUrl}/gOmra/getbyid/${id}`);
  }
  Romra(nom:any,numero:any,email:any,ville:any,user:any,) {
    return this.http.post(`${environment.baseUrl}/gRomra/create`,{nom,numero,email,ville,user});
  }
}
