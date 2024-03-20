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
  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.resetForm();
      this.formSubmitted = false;
    }
  }

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  newProduct: Product = new Product();

  get jsonProduct(): string {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product): void {
    console.debug('New Product: %o', this.jsonProduct);
  }

  getMessages(errs : ValidationErrors | null, name: string) : string[] {
    const messages: string[] = [];
    for (let errorName in errs) {
      switch (errorName) {
        case "required":
          messages.push(`You must enter a ${name}`);
          break;
        case "minlength":
          messages.push(`A ${name} must be at least ${errs['minlength'].requiredLength} characters`);
          break;
        case "pattern":
          messages.push(`The ${name} contains illegal characters`);
          break;
      }
    }
    return messages;
  }

  getValidationMessages(state: NgModel, thingName?: string): string[] {
    const thing: string = state.path?.[0] ?? thingName;
    return this.getMessages(state.errors, thing)
  }

  getFormValidationMessages(form: NgForm): string[] {
    const messages: string[] = [];
    Object
      .keys(form.controls)
      .forEach((k) => {
        this
          .getMessages(form.controls[k].errors, k)
          .forEach((m) => messages.push(m));
      });
    return messages;
  }
}
