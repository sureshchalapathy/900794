import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-financialsheet',
  templateUrl: './vendor-financialsheet.component.html',
  styleUrls: ['./vendor-financialsheet.component.css']
})
export class VendorFinancialsheetComponent implements OnInit {

  TogFLag:boolean=false 
  TogDiv:any;
  navigation:any; 
  veninvoice:any;
  venpayment:any;
  vencredit:any;
  vendebit:any;

  constructor(private api:DataService, private router: Router) { }

  ngOnInit(): void {
    this.vendordebit()
    this.vendorcredit()
    this.vendorinvoice()
    this.vendorpayment()
  }

  vendorinvoice()
  {
    this.api.vendorinvoice().subscribe((data)=>{
      console.warn(" vendor invoice",data);
      this.veninvoice=data;
  })

  }
  vendorpayment()
  {
    this.api.vendorpayment().subscribe((data)=>{
      console.warn(" vendor payment",data);
      this.venpayment=data;
  })

  }
  vendorcredit()
  {
    this.api.vendorcredit().subscribe((data)=>{
      console.warn(" vendor credit",data);
      this.vencredit=data;
  })

  }
  vendordebit()
  {
    this.api.vendordebit().subscribe((data)=>{
      console.warn(" vendor debit",data);
      this.vendebit=data;
  })

  }

































  toggle(){
    this.TogDiv =document.getElementById("tog"); 
    this.navigation = document.querySelector('.navigation'); 
    this.navigation.classList.toggle('active')
   
  }

  venproview()
  {
    this.router.navigate(['venpro'])
  }
  vendash()
  {
    this.router.navigate(['vendash'])
  }
  venFinSheet()
  {
    this.router.navigate(['venfin'])
  }
}
