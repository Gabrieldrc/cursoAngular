import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailRoutingModule } from './product-detail-routing.module';



@NgModule({
  declarations: [
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailRoutingModule,
  ]
})
export class ProductDetailModule { }
