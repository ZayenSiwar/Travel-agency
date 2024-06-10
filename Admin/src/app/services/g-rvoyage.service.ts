import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GRvoyageService {

  constructor(private http: HttpClient) { }

getRVoyage(){
  return this.http.get(`${environment.baseUrl}/gRvoyage/getall`);
  }

deleteRvoyage(id:any){
  return this.http.delete(`${environment.baseUrl}/gRvoyage/delete/${id}`)
}
getOneRVoyage(id: any) {
  return this.http.get(`${environment.baseUrl}/gRvoyage/getbyid/${id}`);
}
AddRVoyage(Voyage:any){
  return this.http.post(`${environment.baseUrl}/gRvoyage/create`,Voyage);
}
updateRvoyage(voyage:any,id: any) {
  return this.http.put(`${environment.baseUrl}/gRvoyage/update/${id}`, voyage)
}
}