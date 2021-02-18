import { Component, OnInit } from '@angular/core';
import { InformationService } from './../../services/informacion.services';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {
  alojamientos = [];

  constructor(public _is: InformationService) {}

  ngOnInit() {
    this._is.sendGetRequest().subscribe((data: any[]) => {
      this.alojamientos = data;
      for (var i:number=0; i<this.alojamientos.length; i++) {
        this.alojamientos[i].precio_noche = Number(this.alojamientos[i].precio_noche);
      }
    });
  }
}
