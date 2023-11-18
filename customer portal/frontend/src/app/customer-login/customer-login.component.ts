import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import swal from 'sweetalert2';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})


export class CustomerLoginComponent implements OnInit {
  
  onClick : Function;  
  
  constructor(private api:DataService, private router: Router) { }
    

  ngOnInit() 
  {
        this.api.logincall().subscribe((data)=>{
        console.warn(" login api data",data);
      
        this.onClick = () => 
        {
          
          let name = (document.getElementById("user") as HTMLInputElement).value;
          let pass = (document.getElementById("pass") as HTMLInputElement).value;
          //console.log(Object(data)[0]["CUSTOMER_ID"])
          if((name == Object(data)[0]["CUSTOMER_ID"] && pass == Object(data)[0]["PASSWORD"] ) ||(name == Object(data)[1]["CUSTOMER_ID"] && pass == Object(data)[1]["PASSWORD"])||
          (name == Object(data)[2]["CUSTOMER_ID"] && pass == Object(data)[2]["PASSWORD"])||(name == Object(data)[3]["CUSTOMER_ID"] && pass == Object(data)[3]["PASSWORD"] )||
          (name == Object(data)[4]["CUSTOMER_ID"] && pass == Object(data)[4]["PASSWORD"] )||(name == Object(data)[5]["CUSTOMER_ID"] && pass == Object(data)[5]["PASSWORD"] ))
          
          {
            this.router.navigate(['./custdash']);
            swal.fire("Login successful", "Welcome to Customer Portal",'success');
          }
        else{
            
               swal.fire('Unable to sign in', 'Fill in the required fields' , 'error');
           } 
   }
     })    
  }
}
