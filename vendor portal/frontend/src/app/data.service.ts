import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) {

   }
   logincall()
   {
    return this.http.get('http://localhost:4000/customer/customerlogin')
   }
   custprocall()
   {
    return this.http.get('http://localhost:4000/customer/customerprofile')
   }
   sales()
   {
    return this.http.get('http://localhost:4000/customer/sales');
   }
   delivery()
   {
    return this.http.get('http://localhost:4000/customer/delivery');
   }
   inquiry()
   {
    return this.http.get('http://localhost:4000/customer/inquiry');
   }
   credit()
   {
    return this.http.get('http://localhost:4000/customer/credit');
   }
   debit()
   {
    return this.http.get('http://localhost:4000/customer/debit');
   }
   payment()
   {
    return this.http.get('http://localhost:4000/customer/payment');
   }
   invoice()
   {
    return this.http.get('http://localhost:4000/customer/invoice');
   }
 
   vendorrfq()
   {
    return this.http.get('http://localhost:4000/vendor/rfq');
   }
   vendorcredit()
   {
    return this.http.get('http://localhost:4000/vendor/credit');
   }
   vendordebit()
   {
    return this.http.get('http://localhost:4000/vendor/debit');
   }
   vendorpro()
   {
    return this.http.get('http://localhost:4000/vendor/vendorProfile'); 
   }
   vendorgs()
   {
    return this.http.get('http://localhost:4000/vendor/goodsreceipt'); 
   }
   vendorinvoice()
   {
    return this.http.get('http://localhost:4000/vendor/invoice'); 
   }
   vendorpayment()
   {
    return this.http.get('http://localhost:4000/vendor/payment'); 
   }
   vendorlogin()
   {
    return this.http.get('http://localhost:4000/vendor/vendorlogin');
   }
   vendorpurchaseOrder()
   {
    return this.http.get('http://localhost:4000/vendor/purchaseOrder'); 
   }
   
   employeeprofile()
   {
    return this.http.get('http://localhost:4000/employee/profile'); 
   }
   employeepayslip()
   {
    return this.http.get('http://localhost:4000/employee/payslip'); 
   }
   employeeleavedata()
   {
    return this.http.get('http://localhost:4000/employee/leavedata');
   }
   employeelogin()
   {
    return this.http.get('http://localhost:4000/employee/employeelogin');
   }
   paypdf()
   {
    return this.http.get('http://localhost:4000/employee/payslip');
   }
   



}
