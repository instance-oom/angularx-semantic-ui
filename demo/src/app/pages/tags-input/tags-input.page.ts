import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'tagsInput-demo',
  templateUrl: './tags-input.html'
})
export class TagsInputDemoPage {

  tags: Array<string>;
  validators: Array<any>;

  constructor() {

  }

  ngOnInit() {
    this.validators = [Validators.minLength(2)];
  }
}
