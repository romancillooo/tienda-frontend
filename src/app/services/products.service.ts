import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'ORGANIZED CHAOS PIGMENT T-SHIRT',
      price: 1099.00,
      description: 'A stylish T-shirt.',
      availableColors: ['black', 'white', 'beige', 'yellow', 'pink', 'purple'],
      availableSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      images: [
        'assets/img/palm-angels-foggy-pa-t-shirt_21773706_51846941_2048.jpg',
        'assets/img/palm-angels-foggy-pa-t-shirt_21773706_51846951_2048.jpg'
      ],
      new: true
    },
    // Agrega más productos según sea necesario
  ];

  constructor() { }

  getProducts(): Observable<any> {
    return of(this.products);
  }

  getProductById(productId: number): Observable<any> {
    const product = this.products.find(p => p.id === productId);
    return of(product);
  }
}
