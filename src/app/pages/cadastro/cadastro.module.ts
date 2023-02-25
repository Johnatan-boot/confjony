import { CadastroComponent } from './components/cadastro';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRoutingModule } from './cadastro-routing.module';



@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
  ]
})
export class CadastroModule { }
