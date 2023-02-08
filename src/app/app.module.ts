import { LoginRoutingModule } from './pages/autenticacao/login/login-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './pages/home/home-houting.module';
import { HomeModule } from './pages/home.module';
import { LoginModule } from './pages';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    NgbModule,
    LoginModule,
    LoginRoutingModule,
    HomeModule,
    HomeRoutingModule,


    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
