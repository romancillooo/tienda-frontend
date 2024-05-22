import { Component, OnInit } from '@angular/core';
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

  constructor(
    public sideMenuService: SideMenuService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
  }

  toggleSideMenu(): void {
    console.log('SideMenu Abierto');
    this.sideMenuService.toggle();
  }

  toggleCart() {
    console.log('Carrito Abierto');
    this.cartService.toggle();
  }
}
