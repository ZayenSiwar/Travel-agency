import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DetailsHotelComponent } from './components/details-hotel/details-hotel.component';
import { ListHotelComponent } from './components/list-hotel/list-hotel.component';
import { ConnecteeComponent } from './components/connectee/connectee.component';
import { RegistreComponent } from './components/registre/registre.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { DetailleVoitureComponent } from './components/detaille-voiture/detaille-voiture.component';
import { VolComponent } from './components/vol/vol.component';
import { DetailleVolComponent } from './components/detaille-vol/detaille-vol.component';
import { ChambreComponent } from './components/chambre/chambre.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsChambreComponent } from './components/details-chambre/details-chambre.component';
import { OmraComponent } from './components/omra/omra.component';
import { AgenceComponent } from './components/agence/agence.component';
import { ExcursionComponent } from './components/excursion/excursion.component';
import { DetaileeExcursionComponent } from './components/detailee-excursion/detailee-excursion.component';
import { PayementComponent } from './components/payement/payement.component';
import { TransfertComponent } from './components/transfert/transfert.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: LayoutComponent },
      { path: 'detailshotel/:id', component: DetailsHotelComponent },
      { path: 'list-hotel', component: ListHotelComponent },
      {path:"Connecter",component:ConnecteeComponent},
      {path:"registre",component:RegistreComponent},
      {path:"voiture",component:VoitureComponent},
      {path:"detailleVoiture/:id",component:DetailleVoitureComponent},
      {path: "vol",component:VolComponent},
      {path:"detailleVol/:id",component:DetailleVolComponent},
      {path:"hotel",component:HotelComponent},
      {path:"chambre",component:ChambreComponent},
      {path:"contact",component:ContactComponent},
      {path:"detailleChambre/:id",component:DetailsChambreComponent},
      {path:"omra",component:OmraComponent},
      {path:"agence",component:AgenceComponent},
      {path:"contrat",component:ContactComponent},
      {path:"excursion",component:ExcursionComponent},
      {path:"detailleExcursion/:id",component:DetaileeExcursionComponent},
      {path:"payement",component:PayementComponent},
      {path:'transfert',component:TransfertComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
