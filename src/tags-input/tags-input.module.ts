import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TagsInputComponent } from './tags-input.component';

@NgModule({
  declarations: [
    TagsInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TagsInputComponent
  ]
})
export class L_TagsInputModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_TagsInputModule };
  }
}
