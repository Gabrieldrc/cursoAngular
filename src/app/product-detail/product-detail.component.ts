import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../models/product.models';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { id } = params;
      this.product = this.productService.getProduct(id);
    });
  }

}
