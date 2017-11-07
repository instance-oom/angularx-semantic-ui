import { Component, Input, ElementRef, ViewChild, Renderer } from '@angular/core'

@Component({
  selector: "lsu-loader",
  template: `
    <div #loaderDiv class="ui dimmer" [ngClass]="{'active': active}">
      <div class="ui {{loaderSize}} text loader">{{ loaderText }}</div>
    </div>
  `
})

export class LoaderComponent {

  @ViewChild("loaderDiv")
  loaderDiv: ElementRef;

  _active: boolean;
  @Input()
  public set active(val: boolean) {
    this._active = val;
    this.toggleLoader();
  }
  public get active(): boolean {
    return this._active;
  }

  @Input()
  public loaderText: string

  @Input()
  public loaderSize: string

  parentEle: any

  constructor(
    private _renderer: Renderer) {
  }

  ngAfterViewInit() {
    if (!this.parentEle) {
      this.parentEle = this.loaderDiv.nativeElement.parentElement.parentElement;
    }
  }

  show() {
    this.active = true;
  }

  hide() {
    this.active = false;
  }

  toggleLoader() {
    if (!this.parentEle) return;
    this._renderer.setElementClass(this.parentEle, 'ui', this.active);
    this._renderer.setElementClass(this.parentEle, 'segment', this.active);
  }
}
