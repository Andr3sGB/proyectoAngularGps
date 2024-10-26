import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/autenticar/signin/signin.component';
import { SignupComponent } from './components/autenticar/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ProductoListComponent,
    ProductoItemComponent,
    ProductoComponent,
    PaymentCardComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
