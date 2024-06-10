import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUser(){
    return this.http.get(`${environment.baseUrl}/users/getall`);
    }
    getUserById(id:any){
      return this.http.get(`${environment.baseUrl}/users/getbyid/${id}`)
    }
  
  deleteUser(id:any){
    return this.http.delete(`${environment.baseUrl}/users/delete/${id}`)
  }
  getOneUser(id: any) {
    return this.http.get(`${environment.baseUrl}/users/getbyid/${id}`);
  }
  updateuser(id:any){
    return this.http.put(`${environment.baseUrl}/users/status/`,{id})
  }
}
