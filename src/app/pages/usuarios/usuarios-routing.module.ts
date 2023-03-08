import { UsuariosListComponent } from './components/usuarios-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



export const ClientesRoutes: Routes = [
	{
		path: 'list-usuarios',
		component: UsuariosListComponent,

	},

];

@NgModule({
  imports: [
  	RouterModule.forChild(ClientesRoutes)
  ],
  exports: [
    RouterModule,

  ]
})
export class UsuariosRoutingModule { }
