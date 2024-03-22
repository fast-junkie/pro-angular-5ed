import { Component, Input } from "@angular/core";

import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";

@Component({
  selector: "paProductTable",
  templateUrl: "productTable.component.html"
})

export class ProductTableComponent {
  constructor(private dataModel: Model) {}
  taxRate: number = 0;
  categoryFilter: string | undefined;
  itemCount: number = 3;

  getProduct(key: number): Product | undefined {
    return this.dataModel?.getProduct(key);
  }

  getProducts(): Product[] | undefined {
    return this.dataModel?.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel?.deleteProduct(key);
  }
}
