import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import '@angular/localize/init';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wish-list/wish-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Importar el componente de registro
import { ProductComponent } from './product/product.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping, faCreditCard, faDollarSign, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    RegisterComponent, // Asegúrate de que RegisterComponent esté declarado
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, // Asegúrate de que FormsModule esté importado
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass, faUser, faCartShopping, faCreditCard, faDollarSign, faTruckFast);
  }
}
