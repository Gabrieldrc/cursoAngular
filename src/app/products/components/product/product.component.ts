import {
  Component,
  Input,
  Output,
  EventEmitter,
  } from '@angular/core';

import { Product } from '../../../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor() {}

  addCart() {
    console.log("AÑADIR AL CARRITO")
    this.productClicked.emit(this.product.id)
  }
}
