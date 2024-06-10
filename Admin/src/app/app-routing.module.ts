import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArrangementComponent } from './components/add-arrangement/add-arrangement.component';
import { AddExcursionComponent } from './components/add-excursion/add-excursion.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { AddOmraComponent } from './components/add-omra/add-omra.component';
import { AddSupplimentaireComponent } from './components/add-supplimentaire/add-supplimentaire.component';
import { AddVoitureComponent } from './components/add-voiture/add-voiture.component';
import { AddVolComponent } from './components/add-vol/add-vol.component';
import { AjoutChambreComponent } from './components/ajout-chambre/ajout-chambre.component';
import { ArrangementComponent } from './components/arrangement/arrangement.component';
import { ChambreComponent } from './components/chambre/chambre.component';
import { ContratComponent } from './components/contrat/contrat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetaileeExcursionComponent } from './components/detailee-excursion/detailee-excursion.component';

import { DetailleReservationComponent } from './components/detaille-reservation/detaille-reservation.component';
import { DetailshotelComponent } from './components/detailshotel/detailshotel.component';
import { DetailsomraComponent } from './components/detailsomra/detailsomra.component';
import { DetailsvoitureComponent } from './components/detailsvoiture/detailsvoiture.component';
import { DtailsVoyageComponent } from './components/dtails-voyage/dtails-voyage.component';
import { ExcursionComponent } from './components/excursion/excursion.component';
import { GOmraComponent } from './components/g-omra/g-omra.component';
import { GReservationVoitureComponent } from './components/g-reservation-voiture/g-reservation-voiture.component';
import { GReservationVoyageComponent } from './components/g-reservation-voyage/g-reservation-voyage.component';
import { GRexcursionComponent } from './components/g-rexcursion/g-rexcursion.component';
import { GRomraComponent } from './components/g-romra/g-romra.component';
import { GRtransfertComponent } from './components/g-rtransfert/g-rtransfert.component';
import { GestionvoitureComponent } from './components/gestionvoiture/gestionvoiture.component';
import { GestionvoyageComponent } from './components/gestionvoyage/gestionvoyage.component';
import { GhotelComponent } from './components/ghotel/ghotel.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { ParametreComponent } from './components/parametre/parametre.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RhotelComponent } from './components/rhotel/rhotel.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SupplimentaireComponent } from './components/supplimentaire/supplimentaire.component';
import { TransfertComponent } from './components/transfert/transfert.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'home', component: LayoutComponent },
      { path: 'gestionVoiture', component: GestionvoitureComponent },
      { path: 'gestionVoyages', component: GestionvoyageComponent },
      { path: 'gReservationVoiture', component: GReservationVoitureComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'listUsers', component: ListUsersComponent },
      { path: 'detailsVoiture/:id', component: DetailsvoitureComponent },
      { path: 'AddVoiture', component: AddVoitureComponent },
      { path: 'detailsVoyage/:id', component: DtailsVoyageComponent },
      { path: 'AddVoyage', component: AddVolComponent },
      { path: 'gReservationVoyage', component: GReservationVoyageComponent },
      { path: 'gomra', component: GOmraComponent },
      { path: 'detailsomra', component: DetailsomraComponent },
      { path: 'AddOmra', component: AddOmraComponent },
      { path: 'gHotel', component: GhotelComponent },
      { path: 'parametre', component: ParametreComponent },
      { path: 'Reservation', component: ReservationComponent },
   
      { path: 'detailshotel/:id', component: DetailshotelComponent },
      { path: 'AddHotel', component: AddHotelComponent },
      {path:'detailleReservation/:id',component:DetailleReservationComponent},
      {path:'arrangement',component:ArrangementComponent},
      {path:'addArrangement',component:AddArrangementComponent},
      {path:'Supplimentaire',component:SupplimentaireComponent},
      {path:'addSupplimentaire',component:AddSupplimentaireComponent},
      {path:'parametre',component:ParametreComponent},
      {path:"ajoutChambre",component:AjoutChambreComponent},
      {path:'chambre',component:ChambreComponent},
      {path:'contrat',component:ContratComponent},
      {path:'transfert',component:TransfertComponent},
      {path:'excursion',component:ExcursionComponent},
      {path:'addExcursion',component:AddExcursionComponent},
      {path:'detailleExcursion/:id',component:DetaileeExcursionComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'signIn',component:SignInComponent},
      {path:'gRtransfert',component:GRtransfertComponent},
      {path:'gRexcursion',component:GRexcursionComponent},
      {path:'gRomra',component:GRomraComponent},
      {path:'Rhotel',component:RhotelComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
