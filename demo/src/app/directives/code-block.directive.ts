import { Directive, Component, Input, ElementRef, ContentChild } from '@angular/core';

declare let Prism: any;

@Directive({ selector: '[lsu-codeblock]' })
export class CodeBlockDirective {

  @Input()
  language: string;

  ele: any;
  constructor(ele: ElementRef) {
    this.ele = ele.nativeElement;
  }

  ngAfterViewInit() {
    let content = this.ele.textContent;
    this.ele.textContent = '';
    content = content.trimLeft();
    content = content.trimRight();

    let codeElement = document.createElement('code');
    codeElement.textContent = content;
    codeElement.classList.add(`language-${this.language}`);
    codeElement.classList.add('line-numbers');
    this.ele.appendChild(codeElement);

    Prism.highlightElement(codeElement);
  }
}
