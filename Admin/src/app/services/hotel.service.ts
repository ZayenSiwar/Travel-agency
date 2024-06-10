import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  getHotel(){
    return this.http.get(`${environment.baseUrl}/gHotel/getall`);
    }
    getOneHotel(id: any) {
      return this.http.get(`${environment.baseUrl}/gHotel/getbyid/${id}`);
    }
  
  deleteHotel(id:any){
    return this.http.delete(`${environment.baseUrl}/gHotel/delete/${id}`)
  }
  AddHotel(hotel:any){
    return this.http.post(`${environment.baseUrl}/gHotel/create`,hotel);
  }
  UpdateHotel(id:any, hotel:any){
    return this.http.put(`${environment.baseUrl}/gHotel/update/${id}`, hotel)
  }
  getcategorie(){
    return this.http.get(`${environment.baseUrl}/categorie/getall`);
    }
    getarrangement(){
      return this.http.get(`${environment.baseUrl}/arrangement/getall`);
      }
      getOnearrangement(id: any) {
        return this.http.get(`${environment.baseUrl}/arrangement/getbyid/${id}`);
      }
    
    deletearrangement(id:any){
      return this.http.delete(`${environment.baseUrl}/arrangement/delete/${id}`)
    }
    Addarrangement(hotel:any){
      return this.http.post(`${environment.baseUrl}/arrangement/create`,hotel);
    }
    Updatearrangement(id:any, hotel:any){
      return this.http.put(`${environment.baseUrl}/arrangement/update/${id}`, hotel)
    }
    getsupplimentaire(){
        return this.http.get(`${environment.baseUrl}/supplementaire/getall`);
        }
     getOnesupplimentaire(id: any) {
          return this.http.get(`${environment.baseUrl}/supplementaire/getbyid/${id}`);
        }
      
      deletesupplimentaire(id:any){
        return this.http.delete(`${environment.baseUrl}/supplementaire/delete/${id}`)
      }
      Addsupplimentaire(hotel:any){
        return this.http.post(`${environment.baseUrl}/supplementaire/create`,hotel);
      }
      Updatesupplimentaire(id:any, hotel:any){
        return this.http.put(`${environment.baseUrl}/supplementaire/update/${id}`, hotel)
      }
      Addchambre(chambre: any) {
        return this.http.post(`${environment.baseUrl}/Chambre/create/`,chambre);
      }
      getChambre(){
        return this.http.get(`${environment.baseUrl}/Chambre/getall`);
        }
        getOneChambre(id: any) {
          return this.http.get(`${environment.baseUrl}/Chambre/getbyid/${id}`);
        }
        deletechambre(id: any) {
          return this.http.delete(`${environment.baseUrl}/Chambre/delete/${id}`)
        }
        






        getRhotel(){
          return this.http.get(`${environment.baseUrl}/grhotel/getall`);
          }
          getOneRhotel(id: any) {
            return this.http.get(`${environment.baseUrl}/grhotel/getbyid/${id}`);
          }
          AddRhotel(Voiture: any) {
            return this.http.post(`${environment.baseUrl}/grhotel/create`, Voiture);
          }
          updateRhotel(voiture:any,id: any) {
            return this.http.put(`${environment.baseUrl}/grhotel/update/${id}`, voiture)
          }
        deleteRhotel(id:any){
          return this.http.delete(`${environment.baseUrl}/grhotel/delete/${id}`)
        }
}
