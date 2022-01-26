import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  boxes: any;
  constructor() {
    this.boxes = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU']
   }

  ngOnInit(): void {
  }

}
