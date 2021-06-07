import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private service = 'products/';
  constructor(
    private http: HttpClient,
  ){}
  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api + this.service);
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}${this.service}${id}`);
  }
  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}${this.service}`, product);
  }
  updateProduct(id: string, change: Partial<Product>) {
    return this.http.put(`${environment.url_api}${this.service}${id}`, change);
  }
  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}${this.service}${id}`);
  }
}
