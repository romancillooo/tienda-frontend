import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiHost}${environment.authEp}`;
  private userEmailSubject = new BehaviorSubject<string | null>(null);
  userEmail$ = this.userEmailSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.userEmailSubject.next(email);
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userEmail', email);
          this.userEmailSubject.next(email);
        })
      );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    this.userEmailSubject.next(null);
    // this.router.navigate(['/login']);
    this.router.navigate(['']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
