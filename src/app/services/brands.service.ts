import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  brands = [
    {
      id: 1,
      name: 'Amiri',
      image: 'assets/img/brands-icons/logos/amiri-logo.png',
      large_image: 'assets/img/brand-icons/large-logos/amiri-large-logo.png',
    },
    {
      id: 2,
      name: 'Gucci',
      image: 'assets/img/brands-icons/logos/gucci-logo.png',
      large_image: 'assets/img/brand-icons/large-logos/gucci-large-logo.png',
    },
    {
      id: 3,
      name: 'Burberry',
      image: 'assets/img/brands-icons/logos/burberry-logo.png',
      large_image: 'assets/img/brand-icons/large-logos/burberry-large-logo.png',
    },
  ];

  constructor() { }

  getBrands() {
    return this.brands;
  }

  getBrandById(brandId: number) {
    return this.brands.find(brand => brand.id === brandId);
  }
}
