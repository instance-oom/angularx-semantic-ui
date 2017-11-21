import { Component } from '@angular/core';

@Component({
  selector: 'rating-demo',
  templateUrl: './rating.html'
})
export class RatingDemoPage {

  rating: number = 3;

  type: string = 'star';
  size: string = "default";

  sizes: Array<string> = [];
  maxRating: string = '10';

  constructor() {
  }

  ngOnInit() {
    for (let i = 5; i < 15; i++) {
      this.sizes.push(i + '');
    }
  }

  getMaxRating(): number {
    return parseInt(this.maxRating);
  }

  setType(type: string): void {
    this.type = type;
  }

  setSize(size: string): void {
    this.size = size;
  }
}
