import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import swal from 'sweetalert2';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  onClick : Function;  

  constructor(private api:DataService, private router: Router) { }

  ngOnInit() 
  {
        this.api.vendorlogin().subscribe((data)=>{
        console.warn(" login api data",data);
      
        this.onClick = () => 
        {

          let name = (document.getElementById("user") as HTMLInputElement).value;
          let pass = (document.getElementById("pass") as HTMLInputElement).value;
          if(data==0) 
          
          {
            this.router.navigate(['./vendash']);
            swal.fire("Login successful", "Welcome to Vendor Portal",'success');
          }
        else{
            
               swal.fire('Unable to sign in', 'Fill in the required fields' , 'error');
           } 
   }
     })    
  }

}
