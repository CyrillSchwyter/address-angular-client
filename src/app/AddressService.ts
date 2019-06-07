import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Address} from './Address';

const endpoint = 'http://localhost:8080/addresses/';
const httpOptions = {
  headers: new HttpHeaders({
    accept: 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private http: HttpClient) {
  }


  getAllAddresses() {

    return this.http.get<Address[]>(endpoint);
  }

  public getTest() {
    return this.http.get<string>(endpoint + 'test').subscribe(value => console.log(value));
  }

  delete(id: number) {
    const url = `${endpoint}${id}`;
    return this.http.delete(url).pipe();
  }

  save(address: Address) {
    return this.http.put<Address>(endpoint, address);
  }
}
