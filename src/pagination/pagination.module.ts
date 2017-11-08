import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class L_PaginationModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_PaginationModule };
  }
}
