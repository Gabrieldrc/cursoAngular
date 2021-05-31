import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ]
})
export class ProductsModule { }
