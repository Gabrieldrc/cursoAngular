import { Component } from '@angular/core';
import { Product } from '../product.models';
@Component({
  selector: 'app-product',
  templateUrl: './producto.component.html',
})
export class ProductComponent {
  product: Product = {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  };
}