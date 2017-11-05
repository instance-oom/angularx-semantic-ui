import { Component, ViewChild, ElementRef } from '@angular/core';

declare let jQuery: any;

@Component({
  selector: 'demo-layout',
  styleUrls: ['./_layout.scss'],
  templateUrl: './_layout.html'
})
export class LsuDemoLayoutPage {

  @ViewChild('sidebar')
  sidebar: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {

  }
}
