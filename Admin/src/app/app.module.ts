import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionvoyageComponent } from './components/gestionvoyage/gestionvoyage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { GestionvoitureComponent } from './components/gestionvoiture/gestionvoiture.component';
import { GReservationVoitureComponent } from './components/g-reservation-voiture/g-reservation-voiture.component';
import { LoginComponent } from './components/login/login.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { DetailsvoitureComponent } from './components/detailsvoiture/detailsvoiture.component';
import { AddVoitureComponent } from './components/add-voiture/add-voiture.component';
import { DtailsVoyageComponent } from './components/dtails-voyage/dtails-voyage.component';
import { AddVolComponent } from './components/add-vol/add-vol.component';
import { RecherchePipe } from './pipes/recherche.pipe';
import { GReservationVoyageComponent } from './components/g-reservation-voyage/g-reservation-voyage.component';
import { GOmraComponent } from './components/g-omra/g-omra.component';
import { AddOmraComponent } from './components/add-omra/add-omra.component';
import { DetailsomraComponent } from './components/detailsomra/detailsomra.component';
import { GhotelComponent } from './components/ghotel/ghotel.component';
import { ParametreComponent } from './components/parametre/parametre.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { DetailshotelComponent } from './components/detailshotel/detailshotel.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { DetailleReservationComponent } from './components/detaille-reservation/detaille-reservation.component';
import { ArrangementComponent } from './components/arrangement/arrangement.component';
import { SupplimentaireComponent } from './components/supplimentaire/supplimentaire.component';
import { AddArrangementComponent } from './components/add-arrangement/add-arrangement.component';
import { AddSupplimentaireComponent } from './components/add-supplimentaire/add-supplimentaire.component';
import { AjoutChambreComponent } from './components/ajout-chambre/ajout-chambre.component';
import { ChambreComponent } from './components/chambre/chambre.component';
import { ContratComponent } from './components/contrat/contrat.component';
import { TransfertComponent } from './components/transfert/transfert.component';
import { ExcursionComponent } from './components/excursion/excursion.component';
import { AddExcursionComponent } from './components/add-excursion/add-excursion.component';
import { DetaileeExcursionComponent } from './components/detailee-excursion/detailee-excursion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { GRtransfertComponent } from './components/g-rtransfert/g-rtransfert.component';
import { GRexcursionComponent } from './components/g-rexcursion/g-rexcursion.component';
import { GRomraComponent } from './components/g-romra/g-romra.component';
import { RhotelComponent } from './components/rhotel/rhotel.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    HeaderComponent,
    GestionvoitureComponent,
    GestionvoyageComponent,
    RegisterComponent,
    GReservationVoitureComponent,
    LoginComponent,
    ListUsersComponent,
    DetailsvoitureComponent,
    AddVoitureComponent,
    DtailsVoyageComponent,
    AddVolComponent,
    RecherchePipe,
    GReservationVoyageComponent,
    GOmraComponent,
    AddOmraComponent,
    DetailsomraComponent,
    GhotelComponent,
    ParametreComponent,
    ReservationComponent,
    DetailshotelComponent,
    AddHotelComponent,
    DetailleReservationComponent,
    ArrangementComponent,
    SupplimentaireComponent,
    AddArrangementComponent,
    AddSupplimentaireComponent,
    AjoutChambreComponent,
    ChambreComponent,
    ContratComponent,
    TransfertComponent,
    ExcursionComponent,
    AddExcursionComponent,
    DetaileeExcursionComponent,
    DashboardComponent,
    SignInComponent,
    GRtransfertComponent,
    GRexcursionComponent,
    GRomraComponent,
    RhotelComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ChartsModule,
    WavesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
