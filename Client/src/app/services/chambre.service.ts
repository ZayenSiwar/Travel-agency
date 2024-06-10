import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private http: HttpClient) { }
  getChambreByHotel(id:string){
    return this.http.get(`${environment.baseUrl}/Chambre/getbyhotel/${id}`);
  }
  getChambre(){
    return this.http.get(`${environment.baseUrl}/Chambre/getall`);
    }
    getOneChambre(id: any) {
      return this.http.get(`${environment.baseUrl}/Chambre/getbyid/${id}`);
    }
    getPrix(){
      return this.http.get(`${environment.baseUrl}/ChambrePrix/getall`);
      }

      getContratEarly() {
        return this.http.get(`${environment.baseUrl}/ContratEarly/getall`);
      }
      getContratPromo() {
        return this.http.get(`${environment.baseUrl}/ContratPromo/getall`);
      }  
      Rchambre(datededepart:Date,date_arrivee:Date,user:any,chambre:any) {
        return this.http.post(`${environment.baseUrl}/grhotel/create`,{datededepart,date_arrivee,user,chambre});
      }
 
}
