//import { DataPipe } from './pipes/data.pipe';
//import { TipoPipe } from './pipes/tipo.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { MatPaginatorIntl } from '@angular/material/paginator';

import { MascaraDirective } from './directives/mascara.directive';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  	//MascaraDirective,
  	//TipoPipe,
  	//DataPipe,

  ],
  exports: [
  	//MascaraDirective,
  	//TipoPipe,
    //DataPipe,
  ],
  providers: [
  	//PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
