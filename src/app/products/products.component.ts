import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/product/products.service';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(
    private productsSerivce: ProductsService
  ){
    this.products = productsSerivce.getAllProducts();
  }
  clickedProduct(id: number) {
    console.log('producto', id)
  }

  ngOnInit(): void {
  }

}
