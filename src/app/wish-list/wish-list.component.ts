import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistProducts: any[] = [];
  isMouseOverList: boolean[] = []; // Array para rastrear si el mouse está sobre cada tarjeta individualmente

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.getWishlistProducts();
  }

  getWishlistProducts(): void {
    this.wishlistProducts = this.wishlistService.getWishlist();
    // Inicializar el array con false para cada producto
    this.isMouseOverList = Array(this.wishlistProducts.length).fill(false);
  }

  removeFromWishlist(product: any): void {
    this.wishlistService.removeFromWishlist(product);
    this.getWishlistProducts();
  }

  setMouseOver(index: number, value: boolean): void {
    this.isMouseOverList[index] = value;
  }

  isMouseOver(index: number): boolean {
    return this.isMouseOverList[index];
  }

  toggleTrashIcon(index: number, value: boolean): void {
    this.isMouseOverList[index] = value;
  }
}
