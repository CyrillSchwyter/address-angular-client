import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddressService} from './AddressService';
import {HttpClientModule} from '@angular/common/http';
import { AddressesComponent } from './addresses/addresses.component';
import { AddresseDetailComponent } from './addresse-detail/addresse-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent,
    AddresseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
