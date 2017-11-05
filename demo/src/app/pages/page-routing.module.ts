import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LsuDemoLayoutPage } from './_layout/_layout.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '', component: LsuDemoLayoutPage, children:
    [
      { path: '', component: HomePage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
