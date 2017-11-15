# Modal Usage

```typesctript
  import { MODAL_DIRECTIVES } from 'angularx-semantic-ui'
```
```html
  <lsu-modal [active]="" [options]="modalOptions">
    <div class="header">
      Profile Picture
    </div>
    <div class="image content">
      <div class="description">
        <div class="ui header">We've auto-chosen a profile image for you.</div>
        <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated
          with your registered e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </div>
    </div>
    <div class="actions">
      <div class="ui black deny button" (click)="cancel()">
        Nope
      </div>
      <div class="ui positive right labeled icon button">
        Yep, that's me
        <i class="checkmark icon"></i>
      </div>
    </div>
  </lsu-modal>
  <button class="ui button" (click)="activeModal()">Active Modal</button>
```
```typescript

  @ViewChild('demoModal') demoModal: any;

  actived = false;

  modalOptions = {
    "size": "small",
    "type": "basic",
    "closeable": true
  }
  
  activeModal(): void {
    this.actived = true;
    // OR this.demoModal.show();
  }

  cancel(): void {
    this.actived = false;
    // OR this.demoModal.hide();
  }
```

# Options
- active: 可选，控制modal显隐
- modalOptions: 可选，Modal配置 <a href="http://semantic-ui.com/modules/modal.html#/settings">Semantic-ui Modal Setting</a>
  - size: 可选. Modal尺寸 ` [ small | large | fullscreen] `
  - type: 可选. Modal类型 ` [ basic | default ]`
  - closeable: 可选. 点击遮罩关闭Modal

# Methods
- show: 显示modal 
- hide: 隐藏modal
