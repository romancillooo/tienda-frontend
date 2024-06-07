import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../services/side-menu.service';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isOpen = false;
  userEmail: string | null = null;

  constructor(
    public sideMenuService: SideMenuService,
    public authService: AuthService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.sideMenuService.isSideMenuOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
      if (isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    });

    this.authService.userEmail$.subscribe(email => {
      this.userEmail = email;
    });
  }

  closeSideMenu() {
    console.log('SideMenu Cerrado');
    this.sideMenuService.close();
  }

  toggleCart() {
    console.log('Carrito Abierto');
    this.cartService.toggle();
  }

  logOut() {
    this.authService.logout();
    this.closeSideMenu();
  }
}
