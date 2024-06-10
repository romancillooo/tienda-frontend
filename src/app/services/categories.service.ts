import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = `${environment.apiHost}${environment.categoriesEp}`;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCategoryById(categoryId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${categoryId}`);
  }
}
