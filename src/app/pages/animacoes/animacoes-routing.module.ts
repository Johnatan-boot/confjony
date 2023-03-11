import { AnimacoesComponent } from './components';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path:'animacoes', component: AnimacoesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class animacoesRoutingModule { }



