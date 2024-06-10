import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  authReq : any ; 
 constructor(private token: TokenStorageService) { }
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.authReq = req;
   const token = this.token.getToken();
   console.log('token,', token);

   if (token != null) {
     
     // for Node.js Express back-end
     this.authReq = req.clone({ headers: req.headers.set("authorization", token) });
   }
   return next.handle(this.authReq);
 }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
];
