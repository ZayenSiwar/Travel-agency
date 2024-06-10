import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get(`${environment.baseUrl}/users/getall`);
    }
  
  deleteUser(id:any){
    return this.http.delete(`${environment.baseUrl}/users/delete/${id}`)
  }

}
