import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";

@Component({
  selector: "store",
  templateUrl: "store.component.html"
})

export class StoreComponent {
  constructor(private repository: ProductRepository, private cart: Cart, private router: Router) {}
  selectedCategory: string | undefined;
  productsPerPage: number = 4;
  selectedPage: number = 1;
  get products(): Product[] {
    let pageIndex: number = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string): void {
    this.selectedCategory = newCategory;
  }
  changePage(newPage: number): void {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number): void {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
}
