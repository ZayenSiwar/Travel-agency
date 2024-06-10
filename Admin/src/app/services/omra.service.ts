import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmraService {

  constructor(private http: HttpClient) { }
  getOmra(){
    return this.http.get(`${environment.baseUrl}/gOmra/getall`);
    }
  
  deleteOmra(id:any){
    return this.http.delete(`${environment.baseUrl}/gOmra/delete/${id}`)
  }
  AddOmra(Omra:any){
    return this.http.post(`${environment.baseUrl}/gOmra/create/`,Omra);
  }
  UpdateOmra(id:any, omra:any){
    return this.http.put(`${environment.baseUrl}/gOmra/update/${id}`, omra)
  }
  getROmra(){
    return this.http.get(`${environment.baseUrl}/gRomra/getall`);
    }
  
  deleteROmra(id:any){
    return this.http.delete(`${environment.baseUrl}/gRomra/delete/${id}`)
  }
  AddROmra(ROmra:any){
    return this.http.post(`${environment.baseUrl}/gRomra/create/`,ROmra);
  }
  UpdateROmra(id:any, ROmra:any){
    return this.http.put(`${environment.baseUrl}/gRomra/update/${id}`, ROmra)
  }
}
