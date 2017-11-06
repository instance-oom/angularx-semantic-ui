import { Component, Input } from '@angular/core';

@Component({
  selector: "lsu-tab",
  styles: [
    `.ui.bottom.attached.tab.segment.active {
      border-top: none;
    }
    .ui.tab {
      margin: 0;
      width: 100%;
    }`
  ],
  template: `
    <div class="ui tab" [ngClass]="getCls()">
      <ng-content></ng-content>
    </div>
  `
})

export class TabComponent {

  @Input()
  public headerText: string = "";

  @Input()
  public active: boolean = false;

  @Input()
  public useSegment: boolean = false;

  public type: string;

  constructor() {

  }

  getCls() {
    return {
      active: this.active,
      segment: this.useSegment,
      bottom: this.type === 'tabular',
      attached: this.type === 'tabular'
    }
  }
}
