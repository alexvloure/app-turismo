import { Component, OnInit } from '@angular/core';
import { InformationService } from './../../services/informacion.services';
import { element } from 'protractor';

@Component({
  selector: 'app-recomendados',
  templateUrl: './recomendados.component.html',
  styleUrls: ['./recomendados.component.scss'],
})
export class RecomendadosComponent implements OnInit {
  alojamientos = [];
  active = 0;

  constructor(public _is: InformationService) {}

  ngOnInit(): void {
    this._is.sendGetRequest().subscribe((data: any[]) => {
      this.alojamientos = data;
      for (var i: number = 0; i < this.alojamientos.length; i++) {
        this.alojamientos[i].precio_noche = Number(
          this.alojamientos[i].precio_noche
        );
      }
    });
  }
}
