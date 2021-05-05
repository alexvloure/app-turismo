import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientosComponent } from './pages/alojamientos/alojamientos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'alojamientos/:lugar/:numero/:fecha',
    component: AlojamientosComponent,
  },
  {
    path: 'alojamientos',
    component: AlojamientosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  // import { HomeComponent } from './pages/home/home.component';
  exports: [RouterModule]
})
export class AppRoutingModule { }
