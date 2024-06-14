import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);
  isCartOpen$ = this.isCartOpenSubject.asObservable();
  private cartTotal = new BehaviorSubject<number>(0);

  constructor(private notificationService: NotificationService) {
    this.loadCart();
  }

  private loadCart(): void {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.calculateCartTotal();
    }
  }

  private saveCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  toggle(): void {
    this.isCartOpenSubject.next(!this.isCartOpenSubject.value);
  }

  close(): void {
    this.isCartOpenSubject.next(false);
  }

  addToCart(product: any): void {
    const existingItemIndex = this.cartItems.findIndex(
      (item) => item.id === product.id && item.color === product.color && item.size === product.size
    );
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity++;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
    this.saveCart();
    this.isCartOpenSubject.next(true);
    this.calculateCartTotal();
    this.notificationService.show(`Producto agregado`);
  }

  deleteProduct(id: number): void {
    const index = this.cartItems.findIndex((product) => product.id === id);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
      console.log(`Producto con ID ${id} eliminado del carrito`);
      this.saveCart();
      this.calculateCartTotal();
      this.notificationService.show('Producto eliminado');
    } else {
      console.log(`No se encontró ningún producto con ID ${id}`);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartTotal.next(0);
    localStorage.removeItem('cartItems');
    this.notificationService.show('Has Limpiado tu Carrito');
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.saveCart();
      this.calculateCartTotal();
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.saveCart();
    this.calculateCartTotal();
  }

  private calculateCartTotal(): void {
    let total = 0;
    this.cartItems.forEach((item) => {
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
