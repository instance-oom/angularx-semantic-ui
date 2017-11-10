import { Component } from '@angular/core';

@Component({
  selector: 'progress-demo',
  templateUrl: './progress.html'
})
export class ProgressDemoPage {

  label: string = "Uploading...";
  text: string;
  color: string = "teal";
  size: string = "standard";
  percent: number = 0;

  timer: any;

  constructor() {

  }

  ngOnInit() {
    this.animation();
  }

  animation(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.percent += Math.floor(Math.random() * 10 + 10);
      if (this.percent > 100) {
        this.percent = 0;
      }
    }, 500)
  }

  setSize(size: string): void {
    this.size = size;
  }
}
