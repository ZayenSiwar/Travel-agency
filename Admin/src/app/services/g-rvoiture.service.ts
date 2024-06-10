import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GRvoitureService {


  constructor(private http: HttpClient) { }
getRVoiture(){
  return this.http.get(`${environment.baseUrl}/gRvoiture/getall`);
  }
  getOneRVoiture(id: any) {
    return this.http.get(`${environment.baseUrl}/gRvoiture/getbyid/${id}`);
  }
  AddRVoiture(Voiture: any) {
    return this.http.post(`${environment.baseUrl}/gRvoiture/create`, Voiture);
  }
  updateRVoiture(voiture:any,id: any) {
    return this.http.put(`${environment.baseUrl}/gRvoiture/update/${id}`, voiture)
  }
deleteRVoiture(id:any){
  return this.http.delete(`${environment.baseUrl}/gRvoiture/delete/${id}`)
}
}
