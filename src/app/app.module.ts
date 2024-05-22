import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import '@angular/localize/init';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wish-list/wish-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    HomeComponent,
    CarouselComponent,
    CartComponent,
    FooterComponent,
    WishlistComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule // Agregar HttpClientModule a la lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
