import { Component } from '@angular/core';

@Component({
  selector: 'loader-demo',
  templateUrl: './loader.html'
})
export class LoaderDemoPage {

  activeLoader: boolean;
  loaderSize: string = "medium";
  loaderText: string;

  constructor() {
  }

  ngOnInit() {
    this.activeLoader = true;
  }

  toggle(): void {
    this.activeLoader = !this.activeLoader;
  }

  setSize(size: string): void {
    this.loaderSize = size;
  }
}
