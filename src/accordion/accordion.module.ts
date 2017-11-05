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
export class AccordionModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: AccordionModule };
  }
}
