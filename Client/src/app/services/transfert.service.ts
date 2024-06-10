import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  constructor(private http: HttpClient) { }
  gettransfert() {
    return this.http.get(`${environment.baseUrl}/transfert/getall`);
  }
  getOnetransfert(id: any) {
    return this.http.get(`${environment.baseUrl}/transfert/getbyid/${id}`);
  }

  deletetransfert(id: any) {
    return this.http.delete(`${environment.baseUrl}/transfert/delete/${id}`)
  }
  Addtransfert(transfert: any) {
    return this.http.post(`${environment.baseUrl}/transfert/create/`, transfert);
  }
  updatetransfert(transfert:any,id: any) {
    return this.http.put(`${environment.baseUrl}/transfert/update/${id}`, transfert)
  }
}
