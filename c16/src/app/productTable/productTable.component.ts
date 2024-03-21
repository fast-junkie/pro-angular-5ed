import { Component, Input } from "@angular/core";
import { Model } from "../repository.model";
import { Product } from "../product.model";

@Component({
  selector: "paProductTable",
  templateUrl: "productTable.component.html"
})

export class ProductTableComponent {
  @Input("model")
  dataModel: Model | undefined;

  getProduct(key: number): Product | undefined {
    return this.dataModel?.getProduct(key);
  }

  getProducts(): Product[] | undefined {
    return this.dataModel?.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel?.deleteProduct(key);
  }

  showTable: boolean = true;
}
