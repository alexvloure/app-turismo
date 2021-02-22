import { Component, OnInit } from '@angular/core';
import { InformationService } from './../../../services/informacion.services';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  alojamientos = [];

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

  comparePricesAsc(a, b) {
    return a.precio_noche - b.precio_noche;
  }
  comparePricesDesc(a, b) {
    return b.precio_noche - a.precio_noche;
  }
  compareVal(a, b) {
    return b.valoracion - a.valoracion;
  }
  sort(a) {
    if (a === "asc"){
      this.alojamientos = this.alojamientos.sort(this.comparePricesAsc);
    }else if (a === "desc"){
      this.alojamientos = this.alojamientos.sort(this.comparePricesDesc);
    }else if (a === "val"){
      this.alojamientos = this.alojamientos.sort(this.compareVal);
    }
  }
}
