import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  submitted: boolean = false;
  passwordFieldType: string = 'password';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.submitted = true;
    if (this.email === '' || this.password === '') {
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => alert('Login failed')
    });
  }

  togglePasswordVisibility(isVisible: boolean) {
    this.passwordFieldType = isVisible ? 'text' : 'password';
  }
}
