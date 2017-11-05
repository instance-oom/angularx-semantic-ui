import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AccordionModule } from './accordion/accordion.module';

export {
  AccordionComponent,
  AccordionPanelComponent,
  AccordionModule
} from './accordion';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports: [
    AccordionModule
  ]
})
export class L_SEMANTIC_UI_MODULE {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_SEMANTIC_UI_MODULE };
  }
}
