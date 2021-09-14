import { Component, OnInit } from '@angular/core';
import Schema from "../schemes/schemaForm.json";
import Data from "../schemes/data.json";
@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.scss']
})
export class FormdemoComponent implements OnInit {
  lastSelected = [];
  mySchema = {};
  myData = {};
  constructor() { }

  ngOnInit(): void {
    this.mySchema = Schema;
    this.myData = Data;
    console.log(this.mySchema);
    console.log(Data);
  }
  handleEvent(event: any){
    console.log(event);
    this.lastSelected = event.value[0];
  }
}
