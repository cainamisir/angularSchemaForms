import { Component, OnInit } from '@angular/core';
import { FormProperty, StringWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-agent-selector',
  templateUrl: './agent-selector.component.html',
  styleUrls: ['./agent-selector.component.scss']
})
export class AgentSelectorComponent extends StringWidget  implements OnInit {
  selectedAgents = [] as any;
  agents: any;
  ngOnInit(): void {
    this.agents = this.formProperty.findRoot().getProperty("agent-selector").schema.people;
    console.log("ok");
  }
  handleClick(): void{
    this.agents.push("Salut");
    this.formProperty.findRoot().getProperty("agent-selector").setValue(this.agents , false);
  }
  handleSelected(agent: any): void{
    if(this.selectedAgents.find((value: any) =>  value == agent))
    {
      console.log("sters");
      this.selectedAgents =  this.selectedAgents.filter((value: any) => {
        console.log(value, agent);
        return value !== agent}
        );
    }
    else{
      console.log("adaugat");
      this.selectedAgents.push(agent);
    }
  }
  logAgents(){
    console.log(this.selectedAgents);
  }  

}
