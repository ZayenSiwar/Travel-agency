import { Component, OnInit } from '@angular/core';
import { VoitureService } from 'src/app/services//voiture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  id=this.ActivatedRoute.snapshot.params["id"]
listvoiture:any

  constructor(private voitureService: VoitureService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllVoiture()
    
  }
  getAllVoiture() {
    this.voitureService.getVoiture().subscribe((res: any) => {
      this.listvoiture = res.data;
      console.log('liste voiture', this.listvoiture);
    })
  }
}
