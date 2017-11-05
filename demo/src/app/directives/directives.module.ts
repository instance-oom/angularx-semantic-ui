import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeBlockDirective } from './code-block.directive';

const DEMO_DIRECTIVES: Array<any> = [
  CodeBlockDirective
]

@NgModule({
  declarations: [
    ...DEMO_DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DEMO_DIRECTIVES
  ]
})
export class DirectivesModule {

}
