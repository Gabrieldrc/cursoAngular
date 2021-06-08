import {
  Component,
  Input,
  Output,
  EventEmitter,
  } from '@angular/core';
import { CartService } from '@core/services/cart.service';

import { Product } from '@core/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor(
    private cartService: CartService,
  ) {}

  addCart() {
    console.log("AÑADIR AL CARRITO")
    this.cartService.addCart(this.product);
  }
}
