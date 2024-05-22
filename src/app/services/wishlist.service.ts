import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];

  constructor() { }

  addToWishlist(product: any): void {
    if (!this.isInWishlist(product)) {
      this.wishlist.push(product);
    }
  }

  removeFromWishlist(product: any): void {
    const index = this.wishlist.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.wishlist.splice(index, 1);
    }
  }

  getWishlist(): any[] {
    return this.wishlist;
  }

  isInWishlist(product: any): boolean {
    return this.wishlist.some(item => item.id === product.id);
  }
}
