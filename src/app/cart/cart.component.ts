import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { BrandsService } from '../services/brands.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;
  isOpen = false;
  assetsBasePath: string = environment.assetsBasePath;

  constructor(
    private cartService: CartService,
    private brandsService: BrandsService,
    private router: Router
  ) {}

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

  async getCartItems(): Promise<void> {
    this.cartItems = this.cartService.getCartItems();
    for (const product of this.cartItems) {
      if (!product.brandPath && product.brand_id) {
        const brand = await this.brandsService.getBrandById(product.brand_id).toPromise();
        product.brandPath = this.generateBrandPath(brand.name);
      } else if (!product.brand_id) {
        console.error(`Producto con ID ${product.id} no tiene brand_id`);
      }
    }
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

  goToPayment() {
    this.router.navigate(['/payment']);
    this.closeCart();
  }

  navigateToProduct(brandPath: string, productId: number): void {
    if (brandPath && productId) {
      this.router.navigate([brandPath, productId]).catch(err => {
        console.error('Navigation Error:', err);
      });
    } else {
      console.error('Invalid navigation parameters:', { brandPath, productId });
    }

    this.closeCart();
  }

  private generateBrandPath(name: string): string {
    return name.toLowerCase().replace(/ /g, '-');
  }
}
