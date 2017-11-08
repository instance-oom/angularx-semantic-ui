import { Component } from '@angular/core';

@Component({
  selector: 'pagination-demo',
  templateUrl: './pagination.html'
})
export class PaginatinDemoPage {

  totalCount: number;
  pageSize: number = 10;
  currentPage: number;
  maxSize: number = 10;
  pagerDisabled: boolean = false;
  pageOptions: any;

  mockDatas: Array<any> = [];
  data: Array<any> = [];

  activeLoader: boolean = false;

  constructor() {

  }

  ngOnInit() {
    for (let i = 0; i < 87; i++) {
      this.mockDatas.push({
        "ID": i + 1,
        "Name": "Name_" + i.toFixed(2),
        "Age": Math.floor(Math.random() * 100),
        "OrderNo": Math.floor(Math.random() * 100000000)
      })
    }
    this.totalCount = this.mockDatas.length;
    this.currentPage = 1;
    this.pageOptions = {
      "color": "default",
      "hidenLabel": false,
      "boundaryLinks": false,
      "firstText": "First",
      "lastText": "Last",
      "directionLinks": true,
      "prevText": "Prev",
      "nextText": "Next"
    }
    this.data = this.getData(this.currentPage, this.pageSize);
  }

  getData(pageIndex: number, pageSize: number): Array<any> {
    var start = (pageIndex - 1) * pageSize;
    let data: Array<any> = [];
    for (let i = start; i < pageIndex * pageSize && i < this.totalCount; i++) {
      data.push(this.mockDatas[i]);
    }
    return data;
  }

  onSelectPage(pageIndex: number): void {
    this.activeLoader = true;
    this.pagerDisabled = true;
    setTimeout(() => {
      this.data = this.getData(pageIndex, this.pageSize);
      this.activeLoader = false;
      this.pagerDisabled = false;
    }, Math.floor(Math.random() * 1500))
  }

  togglePagerDisable(): void {
    this.pagerDisabled = !this.pagerDisabled;
  }
}
