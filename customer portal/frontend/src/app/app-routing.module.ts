import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerDashboardComponent} from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileviewComponent} from './customer-profileview/customer-profileview.component';
import { CustomerFinancialsheetComponent} from './customer-financialsheet/customer-financialsheet.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';

import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { VendorFinancialsheetComponent } from './vendor-financialsheet/vendor-financialsheet.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import {EmployeeDashboardComponent} from './employee-dashboard/employee-dashboard.component'
const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'customerlogin', component : CustomerLoginComponent},
  {path: 'custpro',component : CustomerProfileviewComponent},
  {path: 'custfin', component : CustomerFinancialsheetComponent},
  { path: 'custdash' , component : CustomerDashboardComponent},
  { path: 'vendorlogin', component : VendorLoginComponent},
  {path: 'vendash' , component : VendorDashboardComponent },
  {path: 'venpro', component: VendorProfileComponent},
  {path: 'venfin',component : VendorFinancialsheetComponent},
  { path: 'employeelogin', component : EmployeeLoginComponent},
  {path: 'empdash', component : EmployeeDashboardComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }