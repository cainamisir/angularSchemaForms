import { Component, OnInit } from '@angular/core';
import { StringWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent extends StringWidget implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
