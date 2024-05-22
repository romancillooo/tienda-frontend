import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;
  isOpen = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.isCartOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
      if (isOpen) {
        this.getCartItems();
        this.calculateCartTotal();
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  getCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.cartTotal = 0;
  }

  deleteProduct(id: number): void {
    this.cartService.deleteProduct(id);
    this.calculateCartTotal();
  }

  calculateCartTotal(): void {
    this.cartTotal = this.cartItems.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  decreaseQuantity(item: any): void {
    this.cartService.decreaseQuantity(item);
    this.calculateCartTotal();
  }

  increaseQuantity(item: any): void {
    this.cartService.increaseQuantity(item);
    this.calculateCartTotal();
  }

  closeCart() {
    console.log('Carrito Cerrado');
    this.cartService.close();
  }
}
