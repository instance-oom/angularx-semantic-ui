import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LsuDemoLayoutPage } from './_layout/_layout.page';
import { HomePage } from './home/home.page';
import { AccordionDemoPage } from './accordion/accordion.page';

const routes: Routes = [
  {
    path: '', component: LsuDemoLayoutPage, children:
    [
      { path: '', component: HomePage },
      { path: 'accordion', component: AccordionDemoPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
