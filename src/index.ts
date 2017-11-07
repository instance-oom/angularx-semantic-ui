import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { L_AccordionModule } from './accordion/accordion.module';
import { L_CheckboxModule } from './checkbox/checkbox.module';
import { L_DimmerModule } from './dimmer/dimmer.module';
import { L_DropdownModule } from './dropdown/dropdown.module';
import { L_LoaderModule } from './loader/loader.module';
import { L_ModalModule } from './modal/modal.module';

import { L_TabModule } from './tab/tab.module';

export {
  AccordionComponent,
  AccordionPanelComponent,
  L_AccordionModule
} from './accordion';

export {
  CheckBoxComponent,
  L_CheckboxModule
} from './checkbox';

export {
  DimmerComponent,
  L_DimmerModule
} from './dimmer';

export {
  DropdownComponent,
  L_DropdownModule
} from './dropdown';

export {
  LoaderComponent,
  L_LoaderModule
} from './loader';

export {
  ModalComponent,
  L_ModalModule
} from './modal';

export {
  TabComponent,
  TabSetComponent,
  L_TabModule
} from './tab';

let modules: Array<any> = [
  L_AccordionModule,
  L_CheckboxModule,
  L_DimmerModule,
  L_DropdownModule,
  L_LoaderModule,
  L_ModalModule,

  L_TabModule
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class L_SEMANTIC_UI_MODULE {
  static forRoot(): ModuleWithProviders {
    return { ngModule: L_SEMANTIC_UI_MODULE };
  }
}
