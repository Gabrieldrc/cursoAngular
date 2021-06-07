import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProductQuantityPipe } from './pipe/product-quantity.pipe';


@NgModule({
  declarations: [
    OrderComponent,
    ProductQuantityPipe
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class OrderModule { }
