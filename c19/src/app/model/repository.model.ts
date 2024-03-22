import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { SimpleDataSource } from "./datasource.model";

@Injectable()
export class Model {
  private products: Product[];

  constructor(private dataSource: SimpleDataSource) {
    this.products = new Array<Product>();
    this.dataSource.getData().forEach((p) => this.products.push(p));
  }

  swapProduct() {
    const p = this.products.shift();
    if (p != null) {
      this.products.push(new Product(p.id, p.name, p.category, p.price));
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((p) => this.locator(p, id));
  }

  saveProduct(product: Product) {
    if (product.id === 0 || product.id == null) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      const index = this.products.findIndex((p) => this.locator(p, product.id));
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((p) => this.locator(p, id));
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  private locator = (p: Product, id: number | any) => p.id === id;

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
