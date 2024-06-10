import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any
  term: any
  listContact: any
  id = this.ActivatedRoute.snapshot.params["id"]
  p: number = 1;
  contactForm!:FormGroup
  constructor(private contactService: ContactService, private ActivatedRoute: ActivatedRoute,private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getAllContact()
    this.contactForm = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      modele: ['', Validators.required],
      prix: ['', Validators.required],

    })
  }
  getAllContact() {
    this.contactService.getContact().subscribe((res: any) => {
      this.listContact = res.data;
      console.log('list contact', this.listContact);
    })
  }
  getOneContact(id:any){
    this.contactService.getOneContact(id).subscribe(
      (res:any)=>{
        this.contact=res["data"]
        console.log("id",id)

        this.contactForm.patchValue({
          emailClient:this.contact.emailClient,
          nomClient:this.contact.nomClient,
          messageClient:this.contact.messageClient,
          adresse:this.contact.adresse,
          num:this.contact.num,
          email:this.contact.email,
        }
        )
        console.log("contact",this.contact)
      }
    )
  }
  onsubmit(): void {
    
     
    this.contactService.Add(this.contactForm.value).subscribe(
      (res :any)=>{
      console.log('Admin',res)
    })
  }
}
