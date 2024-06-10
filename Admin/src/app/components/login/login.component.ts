import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm :any
  fileToUpload: Array<File> = [];
  token:string;
  constructor(
    private formbuilder:FormBuilder,
    private authservice: AuthService,
    private tokenStorage:TokenStorageService
  
  ) { }
  ngOnInit(): void {
    {
      this.LoginForm = this.formbuilder.group({
        email: ['', [Validators.required, Validators.email]],
        motdepasse: ['', [Validators.required, Validators.minLength(6)]],
      });
    } }
  
  onsubmit(): void {
    // console.log('Client',this.RegisterForm.value)
    this.authservice.login(this.LoginForm.value).subscribe(
      (res:any) =>{
        localStorage.setItem(("userconnect"),JSON.stringify(res["data"]))
        localStorage.setItem(("token"),JSON.stringify(res.AccessToken))
        localStorage.setItem(("refreshtoken"),JSON.stringify(res.RefreshToken))
 
      
    })
    
  }
}
