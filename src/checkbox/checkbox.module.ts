import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CheckBoxComponent } from './checkbox.component';

@NgModule({
  declarations: [
    CheckBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CheckBoxComponent
  ]
})
export class L_CheckboxModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_CheckboxModule };
  }
}
