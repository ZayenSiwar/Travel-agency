import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-client',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  id = this.ActivatedRoute.snapshot.params["id"]

  listUser:any
  term:any
  p: number = 1;
  constructor(private userService: UsersService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getAllUser()
  }

  getAllUser(){
    this.userService.getUser().subscribe((res:any)=>{
      this.listUser = res.data
      console.log('listUser',this.listUser)
    })
  }
  deleteUser(id:any){
    this. userService.deleteUser(id).subscribe((res:any)=>{
      console.log("User supprimée")
     
      this.getAllUser()
    })
    
  }
}
