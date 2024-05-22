import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { BrandsService } from '../services/brands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showCarousel: boolean = true;
  products: any[] = [];

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
  }

  navigateToProduct(productId: number): void {
    console.log('Product ID:', productId);
    const url = `product/${productId}`;
    console.log('Navigate URL:', url);
    this.router.navigateByUrl(url).catch(() => null);
}

getBrandName(brandId: number): string {
  const brand = this.brandsService.getBrandById(brandId);
  return brand ? brand.name : '';
}


}
