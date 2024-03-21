import { Component } from "@angular/core";

import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
  selector: "app-template",
  templateUrl: "template.html"
})

export class ProductComponent {
  model: Model = new Model();

  addProduct(p: Product): void {
    this.model.saveProduct(p);
  }
}
