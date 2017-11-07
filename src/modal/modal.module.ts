import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ]
})
export class L_ModalModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_ModalModule };
  }
}
