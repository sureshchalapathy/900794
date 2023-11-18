import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  onClick : Function;

  constructor(private api:DataService, private router: Router) { }

  ngOnInit() 
  {
        this.api.employeelogin().subscribe((data)=>{
        console.warn(" login api data",data);
      
        this.onClick = () => 
        {

          let name = (document.getElementById("user") as HTMLInputElement).value;
          let pass = (document.getElementById("pass") as HTMLInputElement).value;
          
          if(data==1 ) 
         
         {
            this.router.navigate(['./empdash']);
            swal.fire("Login successful", "Welcome to Employee Portal",'success');
          }
        else{
            
               swal.fire('Unable to sign in', 'Fill in the required fields' , 'error');
           } 
   }
     })    
  }

}
