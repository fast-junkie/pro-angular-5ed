import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './component';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { PaStructureDirective } from './structure.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { ProductFormComponent } from './productForm/productForm.component';
import { ProductTableComponent } from './productTable/productTable.component';
import { PaToggleView } from './toggleView/toggleView.component';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { PaDiscountDisplayComponent } from './discount/discountDisplay.component';
import { PaDiscountEditorComponent } from './discount/discountEditor.component';
import { DiscountService } from './discount/discount.service';
import { PaDiscountPipe } from './discount/discount.pipe';
import { PaDiscountAmountDirective } from './discount/discountAmount.directive';
import { SimpleDataSource } from './datasource.model';
import { Model } from './repository.model';

@NgModule({
  declarations: [
    ProductComponent,
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductFormComponent,
    ProductTableComponent,
    PaToggleView,
    PaAddTaxPipe,
    PaCategoryFilterPipe,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    PaDiscountPipe,
    PaDiscountAmountDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [DiscountService, SimpleDataSource, Model],
  bootstrap: [ProductComponent]
})
export class AppModule {}
