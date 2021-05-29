import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit} from '@angular/core';
import { Product } from '../product.models';
@Component({
  selector: 'app-product',
  templateUrl: './producto.component.html',
})
export class ProductComponent implements OnChanges, OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor() {
    console.log('1. constructor')
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges', changes)
  }
  ngOnInit() {
    console.log('3. ngOnInit')
  }
  addCart() {
    console.log("AÑADIR AL CARRITO")
    this.productClicked.emit(this.product.id)
  }
}
