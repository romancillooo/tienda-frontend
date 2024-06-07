import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  submitted: boolean = false;
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.submitted = true;
    if (this.email === '' || this.password === '' || this.confirmPassword === '' || this.password !== this.confirmPassword) {
      return;
    }

    this.authService.register(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if (err.status === 201) { // Manejar código de estado 201
          console.log('Registration successful', err);
          this.router.navigate(['/login']);
        } else {
          console.error('Registration failed', err);
          alert('Registration failed');
        }
      }
    });
  }

  togglePasswordVisibility(isVisible: boolean) {
    this.passwordFieldType = isVisible ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility(isVisible: boolean) {
    this.confirmPasswordFieldType = isVisible ? 'text' : 'password';
  }
}
