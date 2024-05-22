import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);
  isCartOpen$ = this.isCartOpenSubject.asObservable();
  private cartTotal = new BehaviorSubject<number>(0);

  constructor() {}

  toggle(): void {
    this.isCartOpenSubject.next(!this.isCartOpenSubject.value);
  }

  close(): void {
    this.isCartOpenSubject.next(false);
  }

  addToCart(product: any): void {
    const existingItemIndex = this.cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity++;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
    this.isCartOpenSubject.next(true);
    this.calculateCartTotal();
  }

  deleteProduct(id: number): void {
    const index = this.cartItems.findIndex((product) => product.id === id);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
      console.log(`Producto con ID ${id} eliminado del carrito`);
    } else {
      console.log(`No se encontró ningún producto con ID ${id}`);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartTotal.next(0);
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateCartTotal();
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.calculateCartTotal();
  }

  private calculateCartTotal(): void {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    this.cartTotal.next(total);
  }

  getCartTotal() {
    return this.cartTotal.asObservable();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}
