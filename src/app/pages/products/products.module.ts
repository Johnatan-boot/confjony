import { FilterPipe } from './../../shared/pipes/filter.pipe';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components';






@NgModule({
  declarations: [
   ProductsComponent,
   FilterPipe,


  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    RouterModule,

  ],
  exports:[
   ProductsComponent
  ]
})
export class ProductsModule { }
