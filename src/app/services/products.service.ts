import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.apiHost}${environment.productsEp}`;
  private products = [
    {
      id: 1,
      name: 'FOGGY PA T-SHIRT',
      price: 1099.00,
      description: 'EMBLEMS AND IMAGES EXPRESSING A SENSE OF IDENTITY. MENS BLACK SHORT-SLEEVED T-SHIRT WITH SMOKE EFFECT PRINT IN WHITE ON THE FRONT AND GOLD METAL MONOGRAM PATCH ON THE BACK.',
      availableColors: ['black', 'blue', 'red', 'yellow', 'pink'],
      availableSizes: ['S', 'M', 'L', 'XL'],
      images: [
        'assets/img/palm-angels-foggy-pa-t-shirt_21773706_51846941_2048.jpg',
        'assets/img/palm-angels-foggy-pa-t-shirt_21773706_51846951_2048.jpg',
        'assets/img/products/amiri/shirts/jpg/palm-angels-foggy-pa-t-shirt_21773706_51846948_2048.jpg',
        'assets/img/products/amiri/shirts/jpg/palm-angels-foggy-pa-t-shirt_21773706_51846960_2048.jpg',
        'assets/img/products/amiri/shirts/jpg/palm-angels-foggy-pa-t-shirt_21773706_51846965_800.jpg',
        'assets/img/products/amiri/shirts/jpg/palm-angels-foggy-pa-t-shirt_21773706_51846966_800.jpg'
      ],
      new: true
    },
    // Agrega más productos según sea necesario
  ];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductsByBrand(brandId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/brand/${brandId}`);
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }
}
