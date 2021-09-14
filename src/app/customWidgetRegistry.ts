import { WidgetRegistry, DefaultWidgetRegistry } from "ngx-schema-form"
import { WidgetComponent } from "./widget/widget.component";

export class WidgetRegistryService extends DefaultWidgetRegistry {
  constructor() {
    super();
    this.register('widget', WidgetComponent);
  }
}