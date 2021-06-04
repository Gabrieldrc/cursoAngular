import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/product/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
        .subscribe(product => {
          console.log(product, this.id)
          this.form.patchValue(product);
        });
    });
  }
  private buildForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required],
    });
  }
  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService.updateProduct(this.id, this.form.value)
        .subscribe(response => this.router.navigate(['/admin/products']));
    }
  }
  get priceField() {
    return this.form.get('price');
  }

}
