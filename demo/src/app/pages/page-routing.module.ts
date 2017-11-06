import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LsuDemoLayoutPage } from './_layout/_layout.page';
import { HomePage } from './home/home.page';
import { AccordionDemoPage } from './accordion/accordion.page';
import { CheckBoxDemoPage } from './checkbox/checkbox.page';
import { DimmerDemoPage } from './dimmer/dimmer.page';
import { DropdownDemoPage } from './dropdown/dropdown.page';

import { TabDemoPage } from './tab/tab.page';

const routes: Routes = [
  {
    path: '', component: LsuDemoLayoutPage, children:
    [
      { path: '', component: HomePage },
      { path: 'accordion', component: AccordionDemoPage },
      { path: 'checkbox', component: CheckBoxDemoPage },
      { path: 'dimmer', component: DimmerDemoPage },
      { path: 'dropdown', component: DropdownDemoPage },

      { path: 'tab', component: TabDemoPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
