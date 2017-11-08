import { Component, Input, ElementRef, ViewChild, Renderer } from '@angular/core'

@Component({
  selector: 'lsu-dimmer',
  template: `
    <div #dimmerDiv class="ui dimmer" [ngClass]="{'active': active}">
      <div class="content">
        <div class="center">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})

export class DimmerComponent {

  @ViewChild("dimmerDiv")
  dimmerDiv: ElementRef;

  parentEle: any

  @Input()
  public set active(val: boolean) {
    this._active = val;
    this.toggleDimmer()
  }
  public get active(): boolean {
    return this._active;
  }
  _active: boolean;

  constructor(
    private _renderer: Renderer) {
  }

  ngAfterViewInit() {
    if (!this.parentEle) {
      this.parentEle = this.dimmerDiv.nativeElement.parentElement.parentElement;
    }
    this.toggleDimmer();
  }

  toggleDimmer() {
    if (!this.parentEle) return;
    this._renderer.setElementClass(this.parentEle, 'dimmable', this.active);
    this._renderer.setElementClass(this.parentEle, 'dimmed', this.active);
  }

  show() {
    this.active = true;
    this.toggleDimmer();
  }

  hide() {
    this.active = false;
    this.toggleDimmer();
  }
}
