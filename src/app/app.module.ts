import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { ClientesRoutingModule } from './pages/clientes/clientes-routing.module';
import { PagamentosModule } from './pages/pagamentos/pagamentos.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { BodyComponent } from './pages/body/body.component';
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
import { OrcamentosComponent } from './pages/orcamentos/orcamentos.component';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PagamentosRoutingModule } from './pages/pagamentos';
import { ListorcamentosComponent } from './pages/listorcamentos/listorcamentos.component';
import { ClientesModule } from './pages/clientes';
import { UsuariosRoutingModule } from './pages/usuarios';
import { MediaComponent } from './pages/media/media.component';
import { AnimacoesModule, animacoesRoutingModule } from './pages/animacoes';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PerfilComponent,
    OrcamentosComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SettingsComponent,
    ListorcamentosComponent,
    MediaComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
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
    PagamentosModule,
    PagamentosRoutingModule,
    ClientesModule,
    ClientesRoutingModule,
    UsuariosModule,
    UsuariosRoutingModule,
    AnimacoesModule,
    animacoesRoutingModule,
    MatGridListModule,





    AppRoutingModule,

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
