import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RatingComponent
  ]
})
export class L_RatingModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_RatingModule };
  }
}
