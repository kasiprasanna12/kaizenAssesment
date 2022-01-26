import { Component, OnInit } from '@angular/core';
import { CustomerService } from '././customerservice';
import { Customer } from '././customer';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [MessageService],
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  customers: any;

   

  constructor(
    private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
    this.customerService.getCustomersMedium().then(data => {
      console.log(data)
        this.customers = data
    });
}

back(){
  this.router.navigateByUrl('/entry')
}

}
