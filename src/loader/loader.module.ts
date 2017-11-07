import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class L_LoaderModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_LoaderModule };
  }
}
