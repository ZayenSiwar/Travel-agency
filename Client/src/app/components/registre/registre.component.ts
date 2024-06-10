import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  RegistreForm :any
  fileToUpload: Array<File> = [];
  constructor(
    private formbuilder:FormBuilder,
    private authservice: AuthService,
    private route:Router
  ) { }


    ngOnInit(): void {
      {
        this.RegistreForm = this.formbuilder.group({
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
         motdepasse: ['', [Validators.required, Validators.minLength(6)]],
         num: ['', Validators.required],
        ville: ['', Validators.required],
        });
      } }
      onsubmit(): void {
    
     
        // console.log('Client',this.RegisterForm.value)
        this.authservice.register(this.RegistreForm.value).subscribe(
          data =>{
            
            this.route.navigateByUrl("/Connecter")
          console.log('Admin',data)
        })
        
      }

}
