import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DimmerComponent } from './dimmer.component';

@NgModule({
  declarations: [
    DimmerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DimmerComponent
  ]
})
export class L_DimmerModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_DimmerModule };
  }
}
