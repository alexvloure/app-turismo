import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//FORMS
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

//FIRESTORE
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//SERVICIO JSON
import { InformationService } from './services/informacion.services';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscadorDestinosComponent } from './components/home-components/buscador-destinos/buscador-destinos.component';
import { ContentHomeComponent } from './components/home-components/content-home/content-home.component';
import { OfertasComponent } from './components/home-components/ofertas/ofertas.component';
import { SliderComponent } from './components/home-components/slider/slider.component';
import { ButtonModComponent } from './components/button-mod/button-mod.component';
import { RecomendadosComponent } from './components/home-components/recomendados/recomendados.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlojamientosComponent } from './pages/alojamientos/alojamientos.component';
import { ContentAlojamientosComponent } from './components/alojamientos-components/content-alojamientos/content-alojamientos.component';
import { ListadoComponent } from './components/alojamientos-components/listado/listado.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BuscadorDestinosComponent,
    ContentHomeComponent,
    OfertasComponent,
    SliderComponent,
    ButtonModComponent,
    RecomendadosComponent,
    FooterComponent,
    AlojamientosComponent,
    ContentAlojamientosComponent,
    ListadoComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCheckboxModule,
    CarouselModule,
    WavesModule,
    MatFormFieldModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    MatSliderModule,
    MatIconModule
  ],
  providers: [InformationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
