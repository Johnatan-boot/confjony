import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPedidosRoutingModule } from './list-pedidos-routing.module';
import { ListPedidosComponent } from './components/list-pedidos.component';
import { ListPedidosService } from 'src/app/services/list-pedidos/list-pedidos.service';


@NgModule({
  declarations: [
    ListPedidosComponent,
  ],
  imports: [
    CommonModule,
    ListPedidosRoutingModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers:[
    ListPedidosService,
  ]
})
export class ListPedidosModule { }
