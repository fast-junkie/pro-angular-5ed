import { Directive, ElementRef, Input, SimpleChanges, Output, EventEmitter, SimpleChange, HostListener, HostBinding } from "@angular/core";
import { Product } from "../model/product.model";

@Directive({
  selector: "[pa-attr]"
})

export class PaAttrDirective {
  // constructor(private element: ElementRef) {
  //   this.element.nativeElement.addEventListener("click", () => {
  //     if (this.product != null) {
  //         this.click.emit(this.product.category);
  //     }
  //   });
  // }

  @HostBinding("class")

  @Input("pa-attr")
    bgClass: string | null = "";

  @Input("pa-product")
    product: Product = new Product();

  @Output("pa-category")
    click: EventEmitter<string> = new EventEmitter<string>();

  // ngOnChanges(changes: SimpleChanges) {
  //   const change: SimpleChange = changes["bgClass"];
  //   const classList: any = this.element.nativeElement.classList;
  //   if (!change.isFirstChange() && classList.contains(change.previousValue)) {
  //     classList.remove(change.previousValue);
  //   }
  //   if (!classList.contains(change.currentValue)) {
  //     classList.add(change.currentValue);
  //   }
  // }

  @HostListener("click")
  triggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }
}
