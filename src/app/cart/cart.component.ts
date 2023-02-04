import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any[] = JSON.parse(localStorage.getItem('cart') ?? '[]') || [];
  quantity: any;
  total: any = 0;
  totalQuantity = 0;

  constructor(private router: Router) {
    this.totalPrice();
  }

  ngOnInit() {
    this.calculateTotalQuantity();
  }

  increaseQuantity(product: any) {
    product.quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.totalPrice();
    this.calculateTotalQuantity();
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.totalPrice();
      this.calculateTotalQuantity();
    }
  }

  removeFromCart(product: any) {
    this.cart = this.cart.filter(p => p !== product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  checkout() {
    alert("Producted Added")
    localStorage.clear()
    this.router.navigate(['/'])
  }

  totalPrice() {
    this.total = 0;
    this.cart.forEach(product => {
      this.total += product.price * product.quantity;
    });
  }

  calculateTotalQuantity() {
    this.totalQuantity = this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  back() {
    this.router.navigate(['/products'])

  }

}

