import { ListorcamentosComponent } from './pages/listorcamentos/listorcamentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrcamentosComponent } from './pages/orcamentos/orcamentos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {path:'perfil', component: PerfilComponent},
  {path:'orcamentos', component: OrcamentosComponent},
  {path:'lista-orcamentos', component: ListorcamentosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
