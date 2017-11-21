import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'modal-demo',
  templateUrl: './modal.html'
})
export class ModalDemoPage {

  @ViewChild('demoModal')
  demoModal: any;

  modalOptions: any;
  active: boolean;

  constructor() {

  }

  ngOnInit() {
    this.modalOptions = {
      "size": "small",
      "type": "default",
      "closeable": true
    }
  }

  showModal() {
    this.demoModal.show();
  }

  hideModal() {
    this.demoModal.hide();
  }

  setType(type: string): void {
    this.modalOptions.type = type;
    this.showModal();
  }

  setSize(size: string): void {
    this.modalOptions.size = size;
    this.showModal();
  }
}
