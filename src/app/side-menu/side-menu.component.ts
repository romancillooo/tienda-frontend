import { Component, OnInit  } from '@angular/core';
import { SideMenuService } from '../services/side-menu.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isOpen = false;

  constructor(
    public sideMenuService: SideMenuService,
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
  }

  closeSideMenu() {
    console.log('SideMenu Cerrado');
    this.sideMenuService.close();
  }

  toggleCart() {
    console.log('Carrito Abierto');
    this.cartService.toggle();
  }

}
