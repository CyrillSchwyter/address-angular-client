import {Component, OnInit} from '@angular/core';
import {Address} from './Address';
import {AddressService} from './AddressService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;


  constructor() {
    this.title = 'Address';
  }
}
