import { Component, EventEmitter, Output, ViewEncapsulation } from "@angular/core";
import { Product } from "../product.model";
import { Model } from "../repository.model";

@Component({
  selector: "pa-productform",
  templateUrl: "productForm.component.html",
})

export class ProductFormComponent {
  newProduct: Product = new Product();

  constructor(private model: Model) {}

  submitForm(form: any) {
    this.model.saveProduct(this.newProduct);
    this.newProduct = new Product();
    form.resetForm();
  }
}
