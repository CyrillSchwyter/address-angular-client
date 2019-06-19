import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddressesComponent} from './addresses/addresses.component';
import {NewsComponent} from './news/news.component';

const routes: Routes = [
  { path: '', redirectTo: '/addresses', pathMatch: 'full' },
  { path: 'addresses', component: AddressesComponent},
  { path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
