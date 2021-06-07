import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private cartService: CartService,
  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }
  addProduct(id: string) {
    this.cartService.addFromCart(id);
  }
  substractProduct(id: string) {
    this.cartService.removeFromCart(id);
  }
  deleteProduct(id: string) {
    this.cartService.deleteProduct(id);
  }
}
