import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientosComponent } from './pages/alojamientos/alojamientos.component';
import { HomeComponent } from './pages/home/home.component';

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
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  // import { HomeComponent } from './pages/home/home.component';
  exports: [RouterModule]
})
export class AppRoutingModule { }
