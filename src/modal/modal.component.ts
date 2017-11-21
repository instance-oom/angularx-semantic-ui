import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'lsu-modal',
  styles: [
    ` .trans-fadeout{
        -webkit-transition:all 0.3s linear;
        -moz-transition:all 0.3s linear;
        -ms-transition:all 0.3s linear;
        -o-transition:all 0.3s linear;
        transition:all 0.3s linear;
      }
    `
  ],
  template: `
    <div class="ui dimmer modals page trans-fadeout" style="display: block !important"
      [style.visibility] = "active ? 'visible' : 'hidden'"
      [style.opacity] = "active ? '1' : '0'"
      (click)="_closeModal()">
      <div #modalContent class="ui {{options.size || ''}} {{options.type || ''}} modal active visibility" (click)="_clickContent($event)">
        <ng-content></ng-content>
      </div>
    </div>
  `
})

export class ModalComponent {

  @Input()
  public options: any = {};

  @ViewChild('modalContent')
  modalContent: ElementRef;

  _active: boolean;
  @Input()
  public set active(val: boolean) {
    this._active = val;
    if (val) {
      this.show();
    } else {
      this.hide();
    }
  }
  public get active(): boolean {
    return this._active;
  }

  element: any;

  constructor(
    private _renderer: Renderer) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this._renderer.setElementClass(document.body, 'dimmable', true);
    this.element = this.modalContent.nativeElement;
  }

  show() {
    this._renderer.setElementClass(document.body, 'dimmed', true);
    setTimeout(() => {
      let windowHeight = document.body.offsetHeight;
      let eleHeight = this.element.offsetHeight;
      let top = (windowHeight - eleHeight) / 2;
      this.element.style.top = top + 'px';
      this._active = true;
    });
  }

  hide() {
    this._active = false;
    this._renderer.setElementClass(document.body, 'dimmed', false);
  }

  _clickContent(event: any): void {
    event.stopPropagation();
  }

  _closeModal(): void {
    if (!this.options.closeable) {
      return;
    }
    this.hide();
  }
}
