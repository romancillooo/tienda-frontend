import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { BrandsService } from '../services/brands.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showCarousel: boolean = true;
  products: any[] = [];
  brands: any[] = [];

  constructor(
    private productsService: ProductsService,
    private brandsService: BrandsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data) => {
        this.products = data.sort((a: any, b: any) => b.id - a.id);
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );

    this.fetchBrands();
  }

  fetchBrands(): void {
    this.brandsService.getBrands().subscribe(
      (data) => {
        this.brands = data;
        this.brands.forEach(brand => {
          this.fetchProductsByBrand(brand);
        });
      },
      (error) => {
        console.error('Error fetching brands', error);
      }
    );
  }

  fetchProductsByBrand(brand: any): void {
    this.productsService.getProductsByBrand(brand.id).subscribe(
      (data) => {
        brand.products = data
          .sort((a: any, b: any) => b.id - a.id)
          .slice(0, 4)
          .map(product => ({
            ...product,
            currentImageUrl: this.getProductImageUrl(product.image)
          }));
      },
      (error) => {
        console.error(`Error fetching products for brand ${brand.id}`, error);
      }
    );
  }

  navigateToBrand(brandId: number): void {
    this.router.navigateByUrl(`brand/${brandId}`).catch(() => null);
  }

  navigateToProduct(productId: number): void {
    this.router.navigateByUrl(`product/${productId}`).catch(() => null);
  }

  getBrandsBannerImageUrl(brand: any): string {
    return `${environment.assetsBasePath}/brands-banners/${brand.banner}`;
  }

  getBrandsImageUrl(brand: any): string {
    return `${environment.assetsBasePath}/brands-logos/${brand.image}`;
  }

  getProductImageUrl(image: string): string {
    return `${environment.assetsBasePath}/products-images/${image}`;
  }

  onMouseEnter(product: any): void {
    product.currentImageUrl = this.getProductImageUrl(product.image2);
  }

  onMouseLeave(product: any): void {
    product.currentImageUrl = this.getProductImageUrl(product.image);
  }
}
