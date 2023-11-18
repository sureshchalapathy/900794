import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-profileview',
  templateUrl: './customer-profileview.component.html',
  styleUrls: ['./customer-profileview.component.css']
})
export class CustomerProfileviewComponent implements OnInit {
  custpro:any;
  TogFLag:boolean=false 
  TogDiv:any;
  navigation:any; 

  constructor(private api:DataService, private router: Router) { }

  ngOnInit() {
    this.custprofile();
    }
 custprofile()
 {

  this.api.custprocall().subscribe((data)=>{
    console.warn(" profile data",data);
    this.custpro=data;
}
)}


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

custdash(){
  this.router.navigate(['custdash'])
}

}
