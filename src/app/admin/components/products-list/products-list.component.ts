import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/product/products.service';
import { Product } from '@core/models/product.models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'price',
    'action'
  ];
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      })
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(response => {
        console.log(response);
        this.fetchProducts();

      })
  }
}
