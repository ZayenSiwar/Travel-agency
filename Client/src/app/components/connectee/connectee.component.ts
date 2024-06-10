import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
  import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connectee',
  templateUrl: './connectee.component.html',
  styleUrls: ['./connectee.component.css']
})
export class ConnecteeComponent implements OnInit {

  loginForm :any
  fileToUpload: Array<File> = [];
  constructor(
    private formbuilder:FormBuilder,
    private authservice: AuthService,
    private route: Router
  ) { }
  ngOnInit(): void {
    {
      this.loginForm = this.formbuilder.group({
        email: ['', [Validators.required, Validators.email]],
        motdepasse: ['', [Validators.required, Validators.minLength(6)]],
    
      });
    } }
  
  onsubmit(): void {
    
     
    // console.log('Client',this.RegisterForm.value)
    this.authservice.login(this.loginForm.value).subscribe(
     (res:any) =>{
       console.log(res["data"])
       localStorage.setItem(("userconnect"),JSON.stringify(res["data"]))
       localStorage.setItem(("token"),JSON.stringify(res.AccessToken))
       localStorage.setItem(("refreshtoken"),JSON.stringify(res.RefreshToken))


      // this.tokenStorage.saveToken(res.AccessToken);
      // this.tokenStorage.saveToken(res.data)
      console.log('Login',res.data)
      Swal.fire("login success!!!")
      this.route.navigateByUrl("/")
      
    })
    
  }

}
