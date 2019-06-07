import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Address} from '../Address';
import {AddressService} from '../AddressService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addresse-detail',
  templateUrl: './addresse-detail.component.html',
  styleUrls: ['./addresse-detail.component.css']
})
export class AddresseDetailComponent implements OnInit {
  @Input() address: Address;
  @Output() saved = new EventEmitter<Address>();

  constructor(private addressService: AddressService, private  router: Router) {
  }

  ngOnInit() {
  }

  save(address: Address) {
    this.addressService.save(address).subscribe((saved) =>
      this.saved.emit(saved)
    );
  }
}
