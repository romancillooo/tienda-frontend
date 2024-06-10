import { Component, OnInit, HostListener } from '@angular/core';
import { SideMenuService } from '../services/side-menu.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isSideMenuOpen: boolean = false;
  isCartOpen: boolean = false;
  isHidden: boolean = false;
  lastScrollTop: number = 0;

  constructor(
    public sideMenuService: SideMenuService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {}

  toggleSideMenu(): void {
    console.log('SideMenu Abierto');
    this.sideMenuService.toggle();
  }

  toggleCart() {
    console.log('Carrito Abierto');
    this.cartService.toggle();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop) {
      // Scroll hacia abajo
      this.isHidden = true;
    } else {
      // Scroll hacia arriba
      this.isHidden = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
  }
}
