import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any[] = [];
  cart: any[] = [];
  i: any;

  constructor(private router: Router) {
    this.products = JSON.parse(localStorage.getItem('products') ?? '[]');
    this.cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
  }

  addToCart(product: any) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeSelectedProduct(index: any) {
    this.products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  viewcart() {
    this.router.navigate(['/cart'])
  }
  addProduct() {
    this.router.navigate(['/addProduct'])
  }

}
