import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  TogFLag:boolean=false 
  TogDiv:any;
  navigation:any; 
  rfq:any;
  purchaseorder:any;
  goodsreceipt:any;
  products = [
    { name: 'Product 1', quantity: 10, price: 50 },
    { name: 'Product 2', quantity: 5, price: 30 },
    { name: 'Product 3', quantity: 20, price: 60 }
  ];
  sortBy = 'purchaseNumber';
  sortOrder = 1;
  sortPOIcon: string;
  sortPO: string;
  sortKey = '';
  sortDirection = 'asc';

  sort(key: string) {
    this.sortKey = key;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.purchaseorder.sort((a:any, b:any) => {
      if (a[key] < b[key]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  constructor(private api:DataService, private router: Router) { }
  spinner = false;
  ngOnInit(): void {
    this.spinner=true;
    this.vendorreqforquo()
    this.venpurchaseord()
    this.vendorgoodsrec()
    this.spinner=false;
    
    this.purchaseorder = [
      { PO_NUMBER: 1, PO_ITEM: 'item 1', STORE_LOC: 'location 1', DISP_QUAN: 10, NET_PRICE: 100, SHORT_TEXT: 'text 1' },
      { PO_NUMBER: 2, PO_ITEM: 'item 2', STORE_LOC: 'location 2', DISP_QUAN: 20, NET_PRICE: 200, SHORT_TEXT: 'text 2' },
      { PO_NUMBER: 3, PO_ITEM: 'item 3', STORE_LOC: 'location 3', DISP_QUAN: 30, NET_PRICE: 300, SHORT_TEXT: 'text 3' }
    ];
    this.sortPO = 'asc';
    this.sortPOIcon = '▲';
    
  }
  
  sortPurchases(sortBy: string) {
    if (this.sortBy === sortBy) {
      this.sortOrder = -this.sortOrder;
    } else {
      this.sortBy = sortBy;
      this.sortOrder = 1;
    }

    switch (sortBy) {
      case 'purchaseNumber':
        this.purchaseorder.sort((a: any, b: any) => (a.PO_NUMBER - b.PO_NUMBER) * this.sortOrder);
        break;
        case 'productPurchased':
          this.purchaseorder.sort((a: any, b: any) => {
            if (a.PO_ITEM < b.PO_ITEM) {
              return -1 * this.sortOrder;
            }
            if (a.PO_ITEM > b.PO_ITEM) {
              return 1 * this.sortOrder;
            }
            return 0;
          });
          break;
        case 'quantity':
          this.purchaseorder.sort((a: any, b: any) => (a.DISP_QUAN - b.DISP_QUAN) * this.sortOrder);
          break;
        case 'price':
          this.purchaseorder.sort((a: any, b: any) => (a.NET_PRICE - b.NET_PRICE) * this.sortOrder);
          break;
          case 'shorttext':
            this.purchaseorder.sort((a: any, b: any) => {
              const x = a.SHORT_TEXT.toLowerCase();
              const y = b.SHORT_TEXT.toLowerCase();
              if (x < y) {
                return this.sortOrder * -1;
              }
              if (x > y) {
                return this.sortOrder;
              }
              return 0;
            });
  

    }
  }
  


  getSortArrow() {
    return this.sortOrder === 1 ? '⬆️' : '⬇️';
  }
  
  vendorreqforquo()
  {
    this.api.vendorrfq().subscribe((data)=>{
      console.warn(" vendor RFQ",data);
      this.rfq=data;
  })


  }
  
  venpurchaseord()
  {
    this.api.vendorpurchaseOrder().subscribe((data)=>{
      console.warn(" vendor purchase order",data);
      this.purchaseorder=data;
  })

  }
  vendorgoodsrec()
  {
    this.api.vendorgs().subscribe((data)=>{
      console.warn(" vendor goodsreceipt",data);
      this.goodsreceipt=data;
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
