import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArrangementService {

  constructor(private http: HttpClient) { }
  getSuArrangement() {
    return this.http.get(`${environment.baseUrl}/Arrangement/getall`);
  }
}
