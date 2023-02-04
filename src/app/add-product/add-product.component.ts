import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName: any;
  price: any;
  quantity = 1

  products: any[] = [];

  constructor(private router: Router) {
    this.products = JSON.parse(localStorage.getItem('products') ?? '[]');
  }

  addProduct() {
    this.products.push({ name: this.productName, price: this.price, quantity: this.quantity });
    localStorage.setItem('products', JSON.stringify(this.products));
    this.productName = '';
    this.price = null;
  }
  viewProducts() {
    this.router.navigate(['/products']);
  }
}
