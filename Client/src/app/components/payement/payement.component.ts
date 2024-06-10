import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    Swal.fire(
      'reservation envoyer',
      'success'
    )
  }

}
