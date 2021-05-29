import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.models';
@Component({
  selector: 'app-product',
  templateUrl: './producto.component.html',
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor() {
    console.log('constructor')
  }
  addCart() {
    console.log("AÑADIR AL CARRITO")
    this.productClicked.emit(this.product.id)
  }
}
