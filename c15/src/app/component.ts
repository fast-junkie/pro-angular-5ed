import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
  selector: "app-template",
  templateUrl: "template.html"
})

export class ProductComponent {
  model: Model = new Model();
  newProduct: Product = new Product();
  showTable: boolean = false;
  darkColor: boolean = false;

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product): void {
    this.model.saveProduct(p);
  }

  deleteProduct(key: number): void {
    this.model.deleteProduct(key);
  }

  submitForm(form: NgForm) {
    this.addProduct(this.newProduct);
  }
}
