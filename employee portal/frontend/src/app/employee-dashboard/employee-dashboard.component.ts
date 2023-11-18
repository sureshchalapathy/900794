import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { jsPDF} from "jspdf";
import { HttpClient } from '@angular/common/http';
// import { ClogService } from 'src/app/service/clog.service';
//import "jspdf-autotable";
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  TogFLag:boolean=false 
  TogDiv:any;
  navigation:any;
  emppro:any; 
  empslip:any;
  empleave:any;


  constructor(private api:DataService,private http:HttpClient, private srv:DataService,private router: Router) { }

  ngOnInit(): void {
    this.empprofile()
    this.emppayslip()
    this.empleavedata()
  }

  empprofile()
 {

  this.api.employeeprofile().subscribe((data)=>{
    console.warn(" Employee data",data);
    this.emppro=data;
})

}

emppayslip()
{
  this.api.employeepayslip().subscribe((data)=>{
    console.warn(" Employee payslip data",data);
    this.empslip=data;
})
}

empleavedata()
{
  this.api.employeeleavedata().subscribe((data)=>{
    console.warn(" Employee leave data",data);
    this.empleave=data;
})
}
pdf2(event:any):void

{

  //var cno=localStorage.getItem("username")
var cno=3;
    const custno={"cnum":cno};

    console.log(event.innerText);

    let a = parseInt(event.innerText,10).toString();

   

  this.srv.paypdf().subscribe((response)=>{

    console.log(response);

   

    const linkSource = 'data:application/pdf;base64,' + response;

    const downloadLink = document.createElement("a");

    var filename = localStorage.getItem("CUSTOMER_ID") +"-"+"Invoice";

    downloadLink.href = linkSource;

    downloadLink.download = filename;

    downloadLink.click();

  })

}
  
makePDF(){
  let pdf = new jsPDF();
  pdf.text("Hello ", 10,10);
  pdf.save();
}









  toggle(){
    this.TogDiv =document.getElementById("tog"); 
    this.navigation = document.querySelector('.navigation'); 
    this.navigation.classList.toggle('active')
   
  }
  downloadPdf() 
  { this.http.get('http://localhost:4000/employee/payslip').subscribe((response) => 
    { 
      // create a new pdf document
      const doc = new jsPDF(); 
      // convert the response object to a string 
      let y=10;
      
      // convert the response object to a string
      const responseString = JSON.stringify(response);
      // parse the string back to an object
      const responseObject = JSON.parse(responseString);
      // loop through the object properties
      for (const key in responseObject) 
      {
        if (responseObject.hasOwnProperty(key)) 
        {
          // check if the property is an object
          if (typeof responseObject[key] === 'object') 
          {
            // loop through the nested object properties
            for (const nestedKey in responseObject[key]) 
            {
              if (responseObject[key].hasOwnProperty(nestedKey)) 
              {
                // add the key and value to the pdf on a new line
                doc.text(nestedKey + ": " + responseObject[key][nestedKey], 10, y);
                y += 10;
              }
            }
          } else 
          {
            // add the key and value to the pdf on a new line
            doc.text(key + ": " + responseObject[key], 10, y);
            y += 10;
           }
        }
      } 
      doc.save('payslip.pdf') 
    })
  }
}
  

