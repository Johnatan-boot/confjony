import { CadastroComponent } from './components';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'cadastro', component:CadastroComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
