# Popup Usage
<a href="https://github.com/lon-yang/angular2-semantic-ui/blob/master/components/popup/README_CN.md">简体中文</a>

```typesctript
  import { POPUP_DIRECTIVES } from 'angular2-semantic-ui/compangular2-semantic-uionents'
```
```html
  <button type="button" class="ui button" lsu-popup [trigger]="'click'" [content]="'Popup One.'">
    Click to show popup
  </button>
  <button type="button" class="ui teal button" lsu-popup [trigger]="'hover'" [content]="'Popup Two.'">
    Hover to show popup
  </button>
  <div class="ui input">
    <input type="text" placeholder="Search..." lsu-popup [trigger]="'focus'" [content]="'Please input key word...'">
  </div>
```

# Options
- trigger:  Optional. The way to trigger Popup ` [ hover | click | docus] `, Default is hover
- content:  Optional. Popup's text
