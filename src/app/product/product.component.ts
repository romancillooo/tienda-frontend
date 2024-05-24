import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { BrandsService } from '../services/brands.service';
import { CategoriesService } from '../services/categories.service';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';
import { ProductColorsService } from '../services/product-colors.service';
import { ColorsService } from '../services/colors.service';

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
  addToWishlistText: string = 'Add to Wishlist';
  isInWishlist: boolean = false;
  selectedColor: string = '';
  selectedSize: string = '';
  quantity: number = 1;
  productImages: string[] = [];
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private brandsService: BrandsService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private categoriesService: CategoriesService,
    private productColorsService: ProductColorsService,
    private colorsService: ColorsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['productId'];
      this.loadProductDetails();
    });
  }

  loadProductDetails(): void {
    this.productsService.getProductById(this.productId).subscribe(product => {
      this.product = product;
      if (this.product) {
        this.selectedColor = this.product.availableColors[0];
        this.selectedSize = this.product.availableSizes[0];
        this.productImages = this.product.images;
        this.selectedImage = this.productImages[0];
      }
    });
    this.brand = this.brandsService.getBrandById(this.product.brand_id);
    this.category = this.categoriesService.getCategoryById(this.product.category_id);
    this.isInWishlist = this.wishlistService.isInWishlist(this.product);
    this.updateButtonText();
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  selectImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
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
    this.cartService.addToCart(this.product);
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
    if (this.isInWishlist) {
      this.addToWishlistText = 'Added To Wishlist!';
    } else {
      this.addToWishlistText = 'Add to Wishlist';
    }
  }
}
