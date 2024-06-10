import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  constructor(private http: HttpClient) { }
  getParametre() {
    return this.http.get(`${environment.baseUrl}/parametre/getall`);
  }
  updateParametre(parametre:any,id: any) {
    return this.http.put(`${environment.baseUrl}/parametre/update/${id}`, parametre)
  }

    getOneparametre(id: any) {
      return this.http.get(`${environment.baseUrl}/parametre/getbyid/${id}`);
    }
    updatepara(id:any){
      return this.http.put(`${environment.baseUrl}/users/update/`,{id})
    }
}
