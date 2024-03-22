import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './component';
import { ModelModule } from './model/model.module';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';
import { ProductFormComponent } from './components/productForm.component';
import { ProductTableComponent } from './components/productTable.component';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ModelModule,
    CommonModule,
    ComponentsModule
  ],
  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule {}
