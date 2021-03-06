import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { QrscanComponent } from './components/Qrscan/qrscan.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { ProfileComponent } from './components/profile/profile.component';

import { CustomerListComponent} from './components/customer-list/customer-list.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'qrscan', component: QrscanComponent },
  { path: 'qrgen', component: GeneratorComponent },
  { path: 'customer_list', component: CustomerListComponent},
  { path: 'profile', component:ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
