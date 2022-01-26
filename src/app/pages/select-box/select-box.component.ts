import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  @Input() boxes:any;
  cities: City[];

  selectedCity1: City | undefined;

  constructor(private router: Router) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    
  }

  ngOnInit(): void {

  }
  onDropDownSelect() {    
    this.router.navigateByUrl('/table')
  }

}
