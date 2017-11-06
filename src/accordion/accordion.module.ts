import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    AccordionPanelComponent
  ]
})
export class L_AccordionModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_AccordionModule };
  }
}
