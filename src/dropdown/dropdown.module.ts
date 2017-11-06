import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class L_DropdownModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_DropdownModule };
  }
}
