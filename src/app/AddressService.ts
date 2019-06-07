import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Address} from './Address';

const endpoint = 'http://localhost:8088/addresses/';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private http: HttpClient) {
  }


  getAllAddresses() {

    return this.http.get<Address[]>(endpoint);
  }

  delete(id: number) {
    const url = `${endpoint}${id}`;
    return this.http.delete(url).pipe();
  }

  create(address: Address) {
    return this.http.post<Address>(endpoint, address);
  }

  update(address: Address) {
    const url = `${endpoint}${address.id}`;
    return this.http.put<Address>(url, address);

  }
}
