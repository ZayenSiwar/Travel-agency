import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratService {


  constructor(private http: HttpClient) { }
  getContrat() {
    return this.http.get(`${environment.baseUrl}/Contrat/getall`);
  }
  getOneContrat(id: any) {
    return this.http.get(`${environment.baseUrl}/Contrat/getbyid/${id}`);
  }

  deleteContrat(id: any) {
    return this.http.delete(`${environment.baseUrl}/Contrat/delete/${id}`)
  }
  AddContrat(normal: any) {
    return this.http.post(`${environment.baseUrl}/Contrat/create/`, normal);
  }
  updateContrat(normal:any,id: any) {
    return this.http.put(`${environment.baseUrl}/Contrat/update/${id}`, normal)
  }
  getContratPromo() {
    return this.http.get(`${environment.baseUrl}/ContratPromo/getall`);
  }
  getOneContratPromo(id: any) {
    return this.http.get(`${environment.baseUrl}/ContratPromo/getbyid/${id}`);
  }

  deleteContratPromo(id: any) {
    return this.http.delete(`${environment.baseUrl}/ContratPromo/delete/${id}`)
  }
  AddContratPromo(promo: any) {
    return this.http.post(`${environment.baseUrl}/ContratPromo/create/`, promo);
  }
  updateContratPromo(promo:any,id: any) {
    return this.http.put(`${environment.baseUrl}/ContratPromo/update/${id}`, promo)
  }
  getContratEarly() {
    return this.http.get(`${environment.baseUrl}/ContratEarly/getall`);
  }
  getOneContratEarly(id: any) {
    return this.http.get(`${environment.baseUrl}/ContratEarly/getbyid/${id}`);
  }

  deleteContratEarly(id: any) {
    return this.http.delete(`${environment.baseUrl}/ContratEarly/delete/${id}`)
  }
  AddContratEarly(Early: any) {
    return this.http.post(`${environment.baseUrl}/ContratEarly/create/`, Early);
  }
  updateContratEarly(Early:any,id: any) {
    return this.http.put(`${environment.baseUrl}/ContratEarly/update/${id}`, Early)
  }
}
