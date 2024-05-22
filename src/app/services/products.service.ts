import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.apiHost}${environment.productsEp}`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }
}
