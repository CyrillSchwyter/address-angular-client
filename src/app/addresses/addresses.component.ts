import {Component, OnInit} from '@angular/core';
import {AddressService} from '../AddressService';
import {Address} from '../Address';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  addresses: Address[];

  selectedAddress: Address;

  constructor(private addressService: AddressService) {

  }

  ngOnInit(): void {
    this.fillModel();
    this.newAddress();
  }

  getAddresses() {
    this.addressService.getAllAddresses().subscribe(
      data => {
        this.addresses = data;
        console.log(this.addresses);
      });

  }

  onSelect(address: Address): void {
    this.selectedAddress = address;
  }

  onSaved(address: Address) {
    this.selectedAddress = address;
    this.getAddresses();
  }


  private fillModel() {

    this.getAddresses();

  }

  deleteAddress(id: number) {
    console.log('delete');
    this.addressService.delete(id).subscribe(() => {
      this.getAddresses();
      this.selectedAddress = null;
    });

  }

  newAddress() {
    this.selectedAddress = new Address();

  }

}
