import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsHotelComponent } from './components/details-hotel/details-hotel.component';
import { ListHotelComponent } from './components/list-hotel/list-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistreComponent } from './components/registre/registre.component';
import { ConnecteeComponent } from './components/connectee/connectee.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { DetailleVoitureComponent } from './components/detaille-voiture/detaille-voiture.component';
import { VolComponent } from './components/vol/vol.component';
import { DetailleVolComponent } from './components/detaille-vol/detaille-vol.component';
import { authInterceptorProviders } from './services/auth-interceptor.service';
import { ChambreComponent } from './components/chambre/chambre.component';
import { Ng5SliderModule } from 'ng5-slider';
import { RecherchePipe } from './pipes/recherche.pipe';
import { Recherche1Pipe } from './pipes/recherche1.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsChambreComponent } from './components/details-chambre/details-chambre.component';
import { OmraComponent } from './components/omra/omra.component';
import { AgenceComponent } from './components/agence/agence.component';
import { ContratComponent } from './components/contrat/contrat.component';
import { ExcursionComponent } from './components/excursion/excursion.component';
import { DetaileeExcursionComponent } from './components/detailee-excursion/detailee-excursion.component';
import { PayementComponent } from './components/payement/payement.component';
import { TransfertComponent } from './components/transfert/transfert.component';






@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HotelComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DetailsHotelComponent,
    ListHotelComponent,
    RegistreComponent,
    ConnecteeComponent,
    VoitureComponent,
    DetailleVoitureComponent,
    VolComponent,
    DetailleVolComponent,
    ChambreComponent,
    RecherchePipe,
    Recherche1Pipe,
    ContactComponent,
    DetailsChambreComponent,
    OmraComponent,
    AgenceComponent,
    ContratComponent,
    ExcursionComponent,
    DetaileeExcursionComponent,
    PayementComponent,
    TransfertComponent,
  
   
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng5SliderModule
   

  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
