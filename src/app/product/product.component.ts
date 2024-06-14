import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { BrandsService } from '../services/brands.service';
import { CategoriesService } from '../services/categories.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId!: number;
  product: any = {};
  brand: any = {};
  category: any = {};
  addToWishlistText: string = 'Añadir a lista de deseos';
  isInWishlist: boolean = false;
  selectedColor: any = {};
  selectedSize: string = '';
  quantity: number = 1;
  productImages: string[] = [];
  selectedImage: string = '';
  animationClass: string = '';
  visibleSections: { [key: string]: boolean } = {};
  assetsBasePath: string = environment.assetsBasePath;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private brandsService: BrandsService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['productId'];
      this.loadProductDetails();
      this.scrollToTop();
    });
  }

  loadProductDetails(): void {
    this.productsService.getProductById(this.productId).subscribe((product: any) => {
      this.product = product;
      if (this.product) {
        this.selectedColor = this.product.colors[0] || {};
        this.selectedSize = this.selectedColor.sizes ? this.selectedColor.sizes[0] : '';
        this.loadProductImages();
        if (this.product.brand_id) {
          this.brandsService.getBrandById(this.product.brand_id).subscribe(brand => this.brand = brand);
        }
        if (this.product.category_id) {
          this.categoriesService.getCategoryById(this.product.category_id).subscribe(category => this.category = category);
        }
        this.isInWishlist = this.wishlistService.isInWishlist(this.product);
        this.updateButtonText();
      }
    });
  }

  loadProductImages(): void {
    this.productImages = this.selectedColor.galleryImages || [];
    this.selectedImage = this.productImages[0] || '';
  }

  selectColor(color: any): void {
    this.selectedColor = color;
    this.selectedSize = this.selectedColor.sizes ? this.selectedColor.sizes[0] : '';
    this.loadProductImages();
  }

  selectImage(imageUrl: string, index: number): void {
    this.animationClass = index > this.productImages.indexOf(this.selectedImage) ? 'animate-up' : 'animate-down';
    this.selectedImage = imageUrl;
  }

  onAnimationEnd(): void {
    this.animationClass = '';
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  increment(): void {
    this.quantity++;
  }

  decrement(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    const productToCart = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      color: this.selectedColor.color_name,
      size: this.selectedSize,
      image: this.selectedColor.galleryImages ? this.selectedColor.galleryImages[0] : '',
      quantity: this.quantity
    };
    this.cartService.addToCart(productToCart);
  }

  addToWishlist(): void {
    if (!this.isInWishlist) {
      this.wishlistService.addToWishlist(this.product);
    } else {
      this.wishlistService.removeFromWishlist(this.product);
    }
    this.isInWishlist = !this.isInWishlist;
    this.updateButtonText();
  }

  updateButtonText(): void {
    this.addToWishlistText = this.isInWishlist ? 'Añadido a lista de deseos!' : 'Añadir a lista de deseos';
  }

  toggleSection(section: string): void {
    this.visibleSections[section] = !this.visibleSections[section];
  }

  isSectionVisible(section: string): boolean {
    return this.visibleSections[section];
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
