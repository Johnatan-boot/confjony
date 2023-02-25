import { MatCardModule } from '@angular/material/card';
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
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ListPedidosModule, ListPedidosRoutingModule } from './pages/list-pedidos';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PerfilComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
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
    ListPedidosModule,
    ListPedidosRoutingModule,
   





    AppRoutingModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
