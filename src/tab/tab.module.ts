import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TabComponent } from './tab.component';
import { TabSetComponent } from './tab-set.component';

@NgModule({
  declarations: [
    TabComponent,
    TabSetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabComponent,
    TabSetComponent
  ]
})
export class L_TabModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_TabModule };
  }
}
