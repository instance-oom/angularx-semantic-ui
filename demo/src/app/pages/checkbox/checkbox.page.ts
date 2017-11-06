import { Component } from '@angular/core';

@Component({
  selector: 'checkbox-demo',
  templateUrl: './checkbox.html'
})

export class CheckBoxDemoPage {

  isChecked = true;
  isChecked1 = true;
  isChecked2 = true;
  isChecked3 = true;

  constructor() {

  }

  ngOnInit() {
    this.isChecked = false;
    this.isChecked2 = true;
  }
}
