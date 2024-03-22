import { Component } from "@angular/core";
import { DiscountService } from "../common/discount.service";

@Component({
  selector: "paDiscountDisplay",
  template: `
    <div class="alert alert-success my-3">
      Discount is {{discounter.discount}}
    </div>`
})

export class PaDiscountDisplayComponent {
  constructor(public discounter: DiscountService) {}
}
