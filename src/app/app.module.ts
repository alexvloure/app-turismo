import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//FORMS
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

//FIRESTORE
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//SERVICIO JSON
import { InformationService } from './services/informacion.services';

import { HttpClientModule } from '@angular/common/http';

import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscadorDestinosComponent } from './components/buscador-destinos/buscador-destinos.component';
import { ContentComponent } from './components/content/content.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { SliderComponent } from './components/slider/slider.component';
import { ButtonModComponent } from './components/button-mod/button-mod.component';
import { RecomendadosComponent } from './components/recomendados/recomendados.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BuscadorDestinosComponent,
    ContentComponent,
    OfertasComponent,
    SliderComponent,
    ButtonModComponent,
    RecomendadosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    CarouselModule,
    WavesModule,
    MatFormFieldModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    ClickOutsideModule,
  ],
  providers: [InformationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
