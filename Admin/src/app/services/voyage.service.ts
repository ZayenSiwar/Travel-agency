import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private http: HttpClient) { }

  getVoyage(){
    return this.http.get(`${environment.baseUrl}/gVoyage/getall`);
    }
    getOneVoyage(id: any) {
      return this.http.get(`${environment.baseUrl}/gVoyage/getbyid/${id}`);
    }
  
  deletevoyage(id:any){
    return this.http.delete(`${environment.baseUrl}/gVoyage/delete/${id}`)
  }
  AddVoyage(Voyage:any){
    return this.http.post(`${environment.baseUrl}/gVoyage/create`,Voyage);
  }
  updateVoyage(voyage:any,id: any) {
    return this.http.put(`${environment.baseUrl}/gVoyage/update/${id}`, voyage)
  }
 
}
