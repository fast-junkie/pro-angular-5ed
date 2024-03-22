import { Input, Output, EventEmitter, Directive, HostBinding, HostListener, SimpleChange } from "@angular/core";

@Directive({
  selector: "input[paModel]",
  exportAs: "paModel"
})

export class PaModel {
  direction: string = "None";

  @Input("paModel")
  modelProperty: string | undefined = "";

  @HostBinding("value")
  fieldValue: string = "";

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    const change: SimpleChange = changes["modelProperty"];
    if (change.currentValue != this.fieldValue) {
      this.fieldValue = changes["modelProperty"].currentValue || "";
      this.direction = "Model"
    }
  }

  @Output("paModelChange")
  update: EventEmitter<string> = new EventEmitter<string>();

  @HostListener("input", ["$event.target.value"])
  updateValue(newValue: string): void {
      this.fieldValue = newValue;
      this.update.emit(newValue);
      this.direction = "Element";
  }
}
