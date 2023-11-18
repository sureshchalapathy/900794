import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-financialsheet',
  templateUrl: './customer-financialsheet.component.html',
  styleUrls: ['./customer-financialsheet.component.css']
})
export class CustomerFinancialsheetComponent implements OnInit {

  TogFLag:boolean=false 
  TogDiv:any;
  navigation:any; 
  creditData:any;
  debitData:any;
  paymentData:any;
  invoiceData:any;

  constructor(private api:DataService, private router: Router) { }

  ngOnInit(): void {
    this.credit();
    this.debit();
    this.payment();
    this.invoice();
  }

  credit()
{
  this.api.credit().subscribe((data)=>{
    console.warn(" credit data",data);
    this.creditData=data;
})   
}

debit()
{
  this.api.debit().subscribe((data)=>{
    console.warn(" debit data",data);
    this.debitData=data;
})   
}

invoice()
{
  this.api.invoice().subscribe((data)=>{
    console.warn(" invoice data",data);
    this.invoiceData=data;
})   
}

payment()
{
  this.api.payment().subscribe((data)=>{
    console.warn(" payment data",data);
    this.paymentData=data;
}) 

}




  toggle(){
    this.TogDiv =document.getElementById("tog"); 
    this.navigation = document.querySelector('.navigation'); 
    this.navigation.classList.toggle('active')
   
  }

  FinSheet(){
    this.router.navigate(['custfin'])
  }
  
  custproview()
  {
    this.router.navigate(['custpro'])
  }
  custdash()
  {
    this.router.navigate(['custdash'])
  }
  }











