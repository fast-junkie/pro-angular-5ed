import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
  selector: "paDiscountEditor",
  template: `
    <div class="form-group mt-3">
      <label for="discount">Discount</label>
      <input [(ngModel)]="discounter.discount" id="discount" class="form-control" type="number" />
    </div>`
})

export class PaDiscountEditorComponent {
  constructor(public discounter: DiscountService) {}
}
