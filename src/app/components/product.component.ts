import { Component, Input } from '@angular/core';
import { Product } from '../product.models';
@Component({
  selector: 'app-product',
  templateUrl: './producto.component.html',
})
export class ProductComponent {
  @Input() product: Product;
  addCart() {
    console.log("AÑADIR AL CARRITO")
  }
}
