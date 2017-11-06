import { Component } from '@angular/core';

@Component({
  selector: 'dimmer-demo',
  templateUrl: './dimmer.html'
})

export class DimmerDemoPage {

  activeDimmer: boolean;

  constructor() {
  }

  ngOnInit() {
    this.activeDimmer = true;
  }

  toggle(): void {
    this.activeDimmer = !this.activeDimmer;
  }
}
