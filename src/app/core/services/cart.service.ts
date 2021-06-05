import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
  addFromCart(id: string) {
    let product = this.products.find(product => {
      return product.id === id
    });
    this.products = [...this.products, product];
    this.cart.next(this.products)
  }
  removeFromCart(id: string) {
    let index = this.products.findIndex(product => {
      return product.id === id
    });
    if (index !== -1) {
      this.products.splice(index, 1)
      this.products = [...this.products];
      this.cart.next(this.products);
    }
  }
  deleteProduct(id: string) {
    this.products = this.products.filter(product => {
      return product.id !== id
    });
    this.cart.next(this.products);
  }
}
