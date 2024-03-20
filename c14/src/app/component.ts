import { Component } from "@angular/core";
import { NgForm, NgModel, ValidationErrors } from "@angular/forms";

import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
  selector: "app-template",
  templateUrl: "template.html"
})

export class ProductComponent {
  model: Model = new Model();
  newProduct: Product = new Product();

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product): void {
    this.model.saveProduct(p);
  }

  submitForm(form: NgForm) {
    this.addProduct(this.newProduct);
  }
}
