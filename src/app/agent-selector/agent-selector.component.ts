import { Component, OnInit } from '@angular/core';
import { FormProperty, StringWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-agent-selector',
  templateUrl: './agent-selector.component.html',
  styleUrls: ['./agent-selector.component.scss']
})
export class AgentSelectorComponent extends StringWidget  implements OnInit {
 
  agents: any;
  ngOnInit(): void {
    this.agents = this.formProperty.findRoot().getProperty("agent-selector").schema.people;
    console.log("ok");
  }
  handleClick(): void{
    this.agents.push("Salut");
    this.formProperty.findRoot().getProperty("agent-selector").setValue(this.agents , false);
  }

}
