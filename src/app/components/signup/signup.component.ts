import { Component, OnInit } from '@angular/core';
import { setupTestingRouter } from '@angular/router/testing';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide1: boolean = true;
  hide2: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
