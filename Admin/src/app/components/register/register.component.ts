import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm :any
  fileToUpload: Array<File> = [];
  constructor(
    private formbuilder:FormBuilder,
    private authservice: AuthService
  
  ) { }

  ngOnInit(): void {
    {
      this.RegisterForm = this.formbuilder.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
       motdepasse: ['', [Validators.required, Validators.minLength(6)]],
       num: ['', Validators.required],
      });
    } }
    // handleFileInput(files:any) {
    //   this.fileToUpload = <Array<File>>files.target.files;
    //   console.log(this.fileToUpload);
    // }
    onsubmit(): void {
    
     
      // console.log('Client',this.RegisterForm.value)
      this.authservice.register(this.RegisterForm.value).subscribe(
        (res :any)=>{
        console.log('Admin',res)
      })
      
    }
}
