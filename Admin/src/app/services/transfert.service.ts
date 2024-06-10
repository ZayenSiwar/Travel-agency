import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  constructor(private http: HttpClient) { }
  getVoiture() {
    return this.http.get(`${environment.baseUrl}/gVoiture/getall`);
  }
  getOneVoiture(id: any) {
    return this.http.get(`${environment.baseUrl}/gVoiture/getbyid/${id}`);
  }

  deleteVoiture(id: any) {
    return this.http.delete(`${environment.baseUrl}/gVoiture/delete/${id}`)
  }
  AddVoiture(Voiture: any) {
    return this.http.post(`${environment.baseUrl}/gVoiture/create/`, Voiture);
  }
  updateVoiture(voiture:any,id: any) {
    return this.http.put(`${environment.baseUrl}/gVoiture/update/${id}`, voiture)
  }
}
