import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "ngx-schema-form";
import { AgentSelectorComponent } from './agent-selector/agent-selector.component';
import { WidgetRegistryService } from "./customWidgetRegistry";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormdemoComponent,
    AgentSelectorComponent
  ],
  imports: [
    SchemaFormModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [{provide: WidgetRegistry, useClass: WidgetRegistryService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
