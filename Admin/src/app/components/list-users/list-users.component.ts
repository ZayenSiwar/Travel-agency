import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ListUsersService } from 'src/app/services/list-users.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
listUsers:any
term:any
user:any
UserForm: FormGroup
p: number = 1;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.usersService.getUser().subscribe((res:any)=>{
      this.listUsers=res.data
      console.log('list Users',this.listUsers)
    })
  }
  getOneUsers(id: any) {
    this.usersService.getOneUser(id).subscribe(
      (res: any) => {
        this.user = res["data"]
        console.log("id", id)
        this.UserForm.patchValue({
          nom: this.user.nom,
          telephone: this.user.telephone,
          categorie: this.user.categorie,
          adresseHotel: this.user.adresseHotel,
          map: this.user.map
        }
        )
        console.log("liste des clients", this.user)
      }
    )
  }
  deleteUser(id: any) {
    this.usersService.deleteUser(id).subscribe((res: any) => {
      console.log("client delated")
Swal.fire(" voila!", "client est supprimer !", "success")
      this.getAllUsers()
    })
  }
  approveUser(id:any){
    this.usersService.updateuser(id).subscribe((res: any) => {
      console.log("client approuver",res)
      Swal.fire(" voila!", "client est approuver !")
      this.getAllUsers()
    })
  }
}
