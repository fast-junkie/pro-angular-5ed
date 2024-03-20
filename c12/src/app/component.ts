import { ApplicationRef, Component } from "@angular/core";

import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
  selector: "app",
  templateUrl: "template.html"
})

export class ProductComponent {
  model: Model = new Model();
  targetName = "Kayak";
  counter: number = 1;

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  get nextProduct(): Product | undefined {
    return this.model.getProducts().shift();
  }

  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index)?.price ?? 0);
  }

  getKey(index: number, product: Product): number | undefined {
    return product.id;
  }

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    console.debug('getProducts...');
    return this.model.getProducts();
  }

  getProductCount(): number {
    return this.getProducts().length;
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    const product = this.getProductByPosition(position);
    return "p-2 " + ((product?.price ?? 0) < 50 ? "bg-dark" : "bg-warning");
  }

  getClasses(key: number): string {
    const product = this.model.getProduct(key);
    return "p-3 " + ((product?.price ?? 0) < 50 ? "bg-secondary" : "bg-warning");
  }
}
