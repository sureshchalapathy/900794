import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {

  TogFLag:boolean=false 
  TogDiv:any;
  navigation:any; 
  prodata:any;

  constructor(private api:DataService, private router: Router) { }

  ngOnInit(): void {
    this.vendorprofile()
  }


  vendorprofile()
  {
    this.api.vendorpro().subscribe((data)=>{
      console.warn(" vendor profile",data);
      this.prodata=data;
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
