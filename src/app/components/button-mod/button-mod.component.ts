import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-mod',
  templateUrl: './button-mod.component.html',
  styleUrls: ['./button-mod.component.scss']
})
export class ButtonModComponent implements OnInit {

  @Input() textoBoton: string;
  @Input() claseBoton: string;
  @Input() tamañoBoton: string;

  get clases(){
    return `btn ${this.claseBoton} ${this.tamañoBoton}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
