import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
/*export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent  {
  
   
  constructor() {}

  isShowDivIf = false;  
    
  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf;  
  }

  /*onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }*/
   
  array:any =[
    {Name:"A",Address:"pune",MobileNo:9865446},
{Name:"B",Address:"mumbai",MobileNo:98645546}
  ];
  tabKey:any = [];
  tabValue:any = [];
  getData(){
    this.array.array.forEach((element:any) => {
console.log(element)

      
    });
  }
}