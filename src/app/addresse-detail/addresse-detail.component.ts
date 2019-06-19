import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Address} from '../Address';

@Component({
  selector: 'app-addresse-detail',
  templateUrl: './addresse-detail.component.html',
  styleUrls: ['./addresse-detail.component.css']
})
export class AddresseDetailComponent implements OnInit {
  @Input() address: Address;
  @Output() save = new EventEmitter<Address>();

  constructor() {
  }

  ngOnInit() {
  }

  onSave(address: Address) {

    this.save.emit(address);
  }

}
