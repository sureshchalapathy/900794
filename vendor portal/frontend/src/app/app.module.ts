import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileviewComponent } from './customer-profileview/customer-profileview.component';
import { CustomerFinancialsheetComponent } from './customer-financialsheet/customer-financialsheet.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { VendorFinancialsheetComponent } from './vendor-financialsheet/vendor-financialsheet.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeDashboardComponent,
    CustomerLoginComponent,
    CustomerDashboardComponent,
    CustomerFinancialsheetComponent,
    CustomerProfileviewComponent,
    VendorProfileComponent,
    VendorFinancialsheetComponent,
    VendorDashboardComponent,
    VendorLoginComponent,

    
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
