import { Pipe, PipeTransform } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Product } from '@core/models/product.models';

@Pipe({
  name: 'productQuantity'
})
export class ProductQuantityPipe implements PipeTransform {
  constructor(
    private cartService: CartService,
  ) {}
  transform(products: Product[]) {
    let productsCounted = [];
    products.map(product => {
      if (!this.isCounted(product, productsCounted)) {
        let quantity = this.countHowMany(product, products);
        productsCounted = [
          ...productsCounted,
          {
            ...product,
            quantity: quantity,
          }
        ]
      }
    });
    return productsCounted;
  }
  private isCounted(product: Product, listOfProducts) {
    return listOfProducts.find(element => element.id === product.id);
  }
  private countHowMany(product: Product, listOfProducts: Product[]) {
    return listOfProducts.filter(element => element.id === product.id).length;
  }
}
