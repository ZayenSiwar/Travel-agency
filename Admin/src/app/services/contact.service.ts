import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient ) {}
  getContact(){
    return this.http.get(`${environment.baseUrl}/Contact/getall`);
    }
    getOneContact(id: any) {
      return this.http.get(`${environment.baseUrl}/Contact/getbyid/${id}`);
    }
    AddRContact(contact: any) {
      return this.http.post(`${environment.baseUrl}/Contact/create`, contact);
    }
    updateContact(contact:any,id: any) {
      return this.http.put(`${environment.baseUrl}Contact/update/${id}`, contact)
    }
  deleteContact(id:any){
    return this.http.delete(`${environment.baseUrl}/Contact/delete/${id}`)
  }
  Add(contact:any){
    return this.http.post(`${environment.baseUrl}/Contact/create`,contact);
  }
  }

