import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProductsService } from '@core/services/product/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  form: FormGroup;

  image$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage,
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
  uploadFile(event) {
    const file = event.target.files[0];
    const name = 'image.jpg';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => {
            console.log(url);
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }
}
