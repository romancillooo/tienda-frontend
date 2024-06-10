import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private apiUrl = `${environment.apiHost}${environment.brandsEp}`;

  constructor(private http: HttpClient) { }

  getBrands(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(brands => brands.map(brand => ({
        ...brand,
        path: this.generateBrandPath(brand.name)
      })))
    );
  }

  getBrandById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  private generateBrandPath(name: string): string {
    return name.toLowerCase().replace(/ /g, '-');
  }
}
