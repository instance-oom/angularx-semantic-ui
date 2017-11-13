import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { L_SEMANTIC_UI_MODULE } from './../../../../src';

import { DirectivesModule } from './../directives/directives.module';

import { LsuDemoLayoutPage } from './_layout/_layout.page';
import { HomePage } from './home/home.page';
import { AccordionDemoPage } from './accordion/accordion.page';
import { CheckBoxDemoPage } from './checkbox/checkbox.page';
import { DimmerDemoPage } from './dimmer/dimmer.page';
import { DropdownDemoPage } from './dropdown/dropdown.page';
import { LoaderDemoPage } from './loader/loader.page';
import { ModalDemoPage } from './modal/modal.page';
import { PaginatinDemoPage } from './pagination/pagination.page';
import { PopupDemoPage } from './popup/popup.page';
import { ProgressDemoPage } from './progress/progress.page';
import { TabDemoPage } from './tab/tab.page';
import { TagsInputDemoPage } from './tags-input/tags-input.page';

const DEMO_PAGES: Array<any> = [
  LsuDemoLayoutPage,
  HomePage,
  AccordionDemoPage,
  CheckBoxDemoPage,
  DimmerDemoPage,
  DropdownDemoPage,
  LoaderDemoPage,
  ModalDemoPage,
  PaginatinDemoPage,
  PopupDemoPage,
  ProgressDemoPage,
  TabDemoPage,
  TagsInputDemoPage
]

import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [
    ...DEMO_PAGES
  ],
  imports: [
    CommonModule,
    FormsModule,
    L_SEMANTIC_UI_MODULE,
    DirectivesModule,
    PageRoutingModule
  ],
  exports: [
    ...DEMO_PAGES
  ],
  entryComponents: [
    ...DEMO_PAGES
  ]
})
export class PageModule {

}
