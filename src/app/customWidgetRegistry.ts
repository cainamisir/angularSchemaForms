import { WidgetRegistry, DefaultWidgetRegistry } from "ngx-schema-form"
import { AgentSelectorComponent } from "./agent-selector/agent-selector.component";

export class WidgetRegistryService extends DefaultWidgetRegistry {
  constructor() {
    super();
    this.register('agent-selector', AgentSelectorComponent);
  }
}