import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductColorsService {
  private apiUrl = `${environment.apiHost}${environment.productColorsEp}`;

  constructor(private http: HttpClient) { }

  getProductImagesByColor(productId: number, colorId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/product/${productId}/color/${colorId}/images`);
  }
}
