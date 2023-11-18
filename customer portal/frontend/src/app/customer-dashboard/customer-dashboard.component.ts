import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  TogFLag:boolean=false 
  TogDiv:any;
  navigation:any; 
  salesData:any;
  inquiryData:any;
  deliveryData:any;
  constructor(private api:DataService, private router: Router) { }

  ngOnInit(): void {
    this.sales();
    this.inquirt();
    this.delivery();
     
} 
sales()
{
  this.api.sales().subscribe((data)=>{
    console.warn(" sales data",data);
    this.salesData=data;
})  
}
inquirt()
{
  this.api.inquiry().subscribe((data)=>{
    console.warn(" inquiry data",data);
    this.inquiryData=data;
})   
}
delivery()
{
  this.api.delivery().subscribe((data)=>{
    console.warn(" Delivery data",data);
    this.deliveryData=data;
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

}


