import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from './../directives/directives.module';

import { LsuDemoLayoutPage } from './_layout/_layout.page';
import { HomePage } from './home/home.page';

const DEMO_PAGES: Array<any> = [
  LsuDemoLayoutPage,
  HomePage
]

import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [
    ...DEMO_PAGES
  ],
  imports: [
    CommonModule,
    FormsModule,
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
