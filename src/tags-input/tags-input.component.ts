import { Component, Input, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR, Validators, ValidatorFn, FormControl } from '@angular/forms';

@Component({
  selector: 'lsu-tagsInput',
  styleUrls: ['./tags-input.css'],
  templateUrl: './tags-input.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagsInputComponent),
    multi: true
  }]
})
export class TagsInputComponent implements ControlValueAccessor {

  @ViewChild('rootEleRef') rootEleRef: ElementRef;

  @Input()
  placeholder: string = 'Add Tag';

  @Input()
  invalidMsg: string = 'Value is invalid';

  tags: Array<string> = [];
  delTarget: string;
  rootEle: HTMLDivElement;
  isBackspaceDown: boolean = false;

  submitted: boolean = false;

  _onChange = (_: any) => { };
  _onTouched = () => { };

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!this.rootEle) {
      this.rootEle = this.rootEleRef.nativeElement;
    }
  }

  writeValue(value: any): void {
    this.tags = value || [];
    this._onChange(this.tags);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  topKeyup(event: any) {
    if (event.keyCode === 8 && this.delTarget) {
      let index = this.tags.indexOf(this.delTarget);
      if (index !== -1) {
        this.tags.splice(index, 1);
      }
      this.delTarget = '';
    }
  }

  setDeltarget(tag: string, evnet: any) {
    this.delTarget = tag;
    event.stopPropagation();
  }

  remove(index: number, evnet: any) {
    this.tags.splice(index, 1);
    event.stopPropagation();
  }

  tagInputOnFocus(event: any) {
    this.submitted = !!event.srcElement.value;
    this.delTarget = '';
  }

  tagInputKeyPress(event: any) {
    let value = event.srcElement.value;
    if (event.keyCode === 13 && value) {
      this.submitted = true;
      if (this.tags.indexOf(value) === -1) {
        this.tags.push(value);
      }
      event.srcElement.value = '';
      this.submitted = false;
      event.preventDefault();
    }
  }

  tagInputKeyDown(event: any) {
    let value = event.srcElement.value;
    if (event.keyCode === 8 && !value) {
      this.isBackspaceDown = true;
    } else {
      this.isBackspaceDown = false;
    }
  }

  tagInputKeyUp(event: any) {
    let value = event.srcElement.value;
    if (event.keyCode === 8 && !value && this.tags.length > 0 && this.isBackspaceDown) {
      this.delTarget = this.tags[this.tags.length - 1];
      event.stopPropagation();
      this.rootEle.focus();
    }
  }
}
