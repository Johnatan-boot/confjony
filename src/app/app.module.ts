import { CadastroModule } from './pages/cadastro/cadastro.module';

import { CartRoutingModule } from './pages/cart/cart-routing.module';
import { SharedModule } from './shared/shared.module';
import { LoginRoutingModule } from './pages/autenticacao/login/login-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './pages/home/home-houting.module';
import { HomeModule } from './pages/home.module';
import { LoginModule, ProductsModule, ProductsRoutingModule } from './pages';
import { CartComponent } from './pages/cart/components';
import { CadastroRoutingModule } from './pages/cadastro';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    LoginModule,
    LoginRoutingModule,
    HomeModule,
    HomeRoutingModule,
    ProductsModule,
    ProductsRoutingModule,
    CartRoutingModule,
    CadastroModule,
    CadastroRoutingModule,
   





    AppRoutingModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
