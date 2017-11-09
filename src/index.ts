import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { L_AccordionModule } from './accordion/accordion.module';
import { L_CheckboxModule } from './checkbox/checkbox.module';
import { L_DimmerModule } from './dimmer/dimmer.module';
import { L_DropdownModule } from './dropdown/dropdown.module';
import { L_LoaderModule } from './loader/loader.module';
import { L_ModalModule } from './modal/modal.module';
import { L_PaginationModule } from './pagination/pagination.module';
import { L_PopupModule } from './popup/popup.module';
import { L_ProgressModule } from './progress/progress.module';
import { L_RatingModule } from './rating/rating.module';

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
  PaginationComponent,
  L_PaginationModule
} from './pagination';

export {
  PopupDirective,
  L_PopupModule
} from './popup';

export {
  ProgressComponent,
  L_ProgressModule
} from './progress';

export {
  RatingComponent,
  L_RatingModule
} from './rating';

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
  L_PaginationModule,
  L_PopupModule,
  L_ProgressModule,
  L_RatingModule,

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
