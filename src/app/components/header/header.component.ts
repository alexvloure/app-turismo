import { Component, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openMenu', [
      state(
        'open',
        style({
          opacity: 1,
          backgroundColor: '#faf7f0',
        })
      ),
      state(
        'closed',
        style({
          right: '-1000px',
          opacity: 0,
          backgroundColor: 'black',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
