import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { PopupDirective } from './popup.directive';

@NgModule({
  declarations: [
    PopupDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopupDirective
  ]
})
export class L_PopupModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_PopupModule };
  }
}
