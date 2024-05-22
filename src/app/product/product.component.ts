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
  selectedColorId: number | null = null;
  selectedColorName: string = '';
  productImages: string[] = [];
  selectedImage: string = '';
  colors: any[] = [];

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
    this.product = this.productsService.getProductById(this.productId);
    this.brand = this.brandsService.getBrandById(this.product.brand_id);
    this.category = this.categoriesService.getCategoryById(this.product.category_id);
    this.isInWishlist = this.wishlistService.isInWishlist(this.product);
    this.updateButtonText();
    this.loadProductImages();
    this.loadColors();
  }

  loadProductImages(): void {
    this.productImages = this.productColorsService.getProductImages(this.productId);
    if (this.productImages.length > 0) {
      this.selectedImage = this.productImages[0];
    }
  }

  loadColors(): void {
    const productColors = this.productColorsService.productColors.filter(pc => pc.product_id === this.productId);
    const availableColorIds = productColors.map(pc => pc.color_id);
    this.colors = this.colorsService.colors.filter(color => availableColorIds.includes(color.id));

    if (this.colors.length > 0) {
      const firstColor = this.colors[0];
      this.selectedColorName = firstColor.name;
      this.selectedColorId = firstColor.id;

      if (this.selectedColorId !== null) {
        this.productImages = this.productColorsService.getProductImagesByColor(this.productId, this.selectedColorId);

        if (this.productImages.length > 0) {
          this.selectedImage = this.productImages[0];
        }
      }
    }
  }



  selectColor(colorId: number): void {
    this.selectedColorId = colorId;
    this.selectedColorName = this.getColorName(colorId);
    this.productImages = this.productColorsService.getProductImagesByColor(this.productId, colorId);
    if (this.productImages.length > 0) {
      this.selectedImage = this.productImages[0];
    }
  }

  getColorName(colorId: number): string {
    const color = this.colorsService.getColorById(colorId);
    return color ? color.name : '';
  }

  selectImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
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
