import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExcursionService {

  constructor(private http: HttpClient) { }
  getExcursion() {
    return this.http.get(`${environment.baseUrl}/gExcursion/getall`);
  }
  getOneExcursion(id: any) {
    return this.http.get(`${environment.baseUrl}/gExcursion/getbyid/${id}`);
  }

  deleteExcursion(id: any) {
    return this.http.delete(`${environment.baseUrl}/gExcursion/delete/${id}`)
  }
  AddExcursion(ex: any) {
    return this.http.post(`${environment.baseUrl}/gExcursion/create/`, ex);
  }
  updateExcursion(voiture:any,id: any) {
    return this.http.put(`${environment.baseUrl}/gExcursion/update/${id}`, voiture)
  }
  Rexcursion(datededepart:Date,user:any,excursion:any) {
    return this.http.post(`${environment.baseUrl}/Rexcursion/create`,{datededepart,user,excursion});
  }
}