import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "ngx-schema-form";
import { WidgetRegistryService } from "./customWidgetRegistry";
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { WidgetComponent } from './widget/widget.component';


@NgModule({
  declarations: [
    AppComponent,
    FormdemoComponent,
    WidgetComponent
  ],
  imports: [
    SchemaFormModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule 
  ],
  providers: [{provide: WidgetRegistry, useClass: WidgetRegistryService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
