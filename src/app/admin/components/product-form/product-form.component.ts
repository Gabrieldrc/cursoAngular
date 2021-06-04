import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/product/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  form: FormGroup;

  hasUnitNumber = false;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      id: [(Math.floor(Math.random() * 30 + 10)).toString(), Validators.required],
      title: ['', Validators.required],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required],
    });
  }
  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService.createProduct(this.form.value)
        .subscribe(response => this.router.navigate(['/admin/products']));
    }
  }
  get priceField() {
    return this.form.get('price');
  }
}
