import { Component, OnInit } from '@angular/core';
import { InformationService } from './../../../services/informacion.services';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  alojamientosOg = [];
  alojamientos = [];
  alojamientosFiltered = [];
  alojamientosFilteredPrice = [];
  precio = "";
  filters = [
    { name: 'Aire acondicionado', value: 'aire', checked: false },
    { name: 'Wi-Fi', value: 'wifi', checked: false },
    { name: 'TV', value: 'tv', checked: false },
    { name: 'Cocina', value: 'cocina', checked: false },
    { name: 'Desayuno incluído', value: 'desayuno', checked: false },
    { name: 'Restaurante', value: 'restaurante', checked: false },
    { name: 'Bar', value: 'bar', checked: false },
    { name: 'Jardín', value: 'jardin', checked: false },
    { name: 'Parking', value: 'parking', checked: false },
    { name: 'Gimnasio', value: 'gym', checked: false },
    { name: 'Spa', value: 'spa', checked: false },
    { name: 'Sauna', value: 'sauna', checked: false },
    { name: 'Solarium', value: 'solarium', checked: false },
    { name: 'Hidromasaje', value: 'hidromasaje', checked: false },
    { name: 'Piscina', value: 'piscina', checked: false },
    { name: 'Embarcadero', value: 'embarcadero', checked: false },
    { name: 'Check-in express', value: 'express', checked: false },
    { name: 'Recepcion 24h', value: '24h', checked: false },
  ];

  constructor(public _is: InformationService) {}

  ngOnInit(): void {
    this._is.sendGetRequest().subscribe((data: any[]) => {
      this.alojamientos = data;
      for (var i: number = 0; i < this.alojamientos.length; i++) {
        this.alojamientos[i].precio_noche = Number(this.alojamientos[i].precio_noche);
        this.alojamientos[i].caracteristicas = this.alojamientos[i].caracteristicas.split(' ').sort(this.ordenarCaracteristicas);
      }
      this.alojamientosOg = this.alojamientos;
    });
  }

  /**
   * Función que ordena las caracteristicas de un alojamiento por orden alfabético
   * @param a
   * @param b
   */
  ordenarCaracteristicas(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }
  /**
   * Función que ordena los alojamientos por precio de menor a mayor
   * @param a alojamiento a
   * @param b alojamiento b
   */
  comparePricesAsc(a, b) {
    return a.precio_noche - b.precio_noche;
  }
  /**
   * Función que ordena los alojamientos por precio de mayor a menor
   * @param a alojamiento a
   * @param b alojamiento b
   */
  comparePricesDesc(a, b) {
    return b.precio_noche - a.precio_noche;
  }
  /**
   * Función que ordena los alojamientos por su valoración de mayor a menor
   * @param a alojamiento a
   * @param b alojamiento b
   */
  compareVal(a, b) {
    return b.valoracion - a.valoracion;
  }
  /**
   * Función que dependiendo del valor del string que se le pase por parámetro ordenará los alojamientos de diferentes formas.
   * @param a String con el valor
   */
  sort(a: String) {
    if (this.alojamientosFiltered.length > 0) {
      this.alojamientos = this.alojamientosFiltered;
      if (this.alojamientosFilteredPrice.length > 0){
        this.alojamientos = this.alojamientosFilteredPrice;
      }
    }
    switch (a) {
      case 'asc': {
        this.alojamientos = this.alojamientos.sort(this.comparePricesAsc);
        break;
      }
      case 'desc': {
        this.alojamientos = this.alojamientos.sort(this.comparePricesDesc);
        break;
      }
      case 'val': {
        this.alojamientos = this.alojamientos.sort(this.compareVal);
        break;
      }
    }
  }

  /**
   * Función que filtra los alojamientos dependiendo de los filtros seleccionados
   */
  filtered() {
    this.alojamientosFiltered = [];

    var selectedFilters: string[] = this.filters.filter((x) => x.checked === true).map((x) => x.value);

    // if(this.alojamientosFilteredPrice.length<0){

    // }
    for (var i = 0; i < this.alojamientosOg.length; i++) {
      let arr_caracteristicas = this.alojamientosOg[i].caracteristicas;
      if (selectedFilters.every((x) => arr_caracteristicas.includes(x))) {
        this.alojamientosFiltered.push(this.alojamientosOg[i]);
      }
    }
    if(this.precio != ""){
      this.priceFilter(this.precio);
    }else {
      this.alojamientos = this.alojamientosFiltered;
    }
  }

  /**
   * Función que filtra los alojamientos dependiendo del precio
   */
  priceFilter(precio) {
    if (this.alojamientosFiltered.length > 0) {
      this.alojamientos = this.alojamientosFiltered;
    }else{
      this.alojamientos = this.alojamientosOg;
    }
    this.alojamientosFilteredPrice = [];
    for(var i=0; i<this.alojamientos.length; i++){
      if(this.alojamientos[i].precio_noche > precio){
        this.alojamientosFilteredPrice.push(this.alojamientos[i]);
      }
    }
    this.alojamientos = this.alojamientosFilteredPrice;
  }

  formatLabel(value: number) {
    return value + '€';
  }
}
