import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ProgressComponent } from './progress.component';

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressComponent
  ]
})
export class L_ProgressModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_ProgressModule };
  }
}
