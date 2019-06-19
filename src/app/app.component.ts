import {Component} from '@angular/core';
import {Address} from './Address';

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
