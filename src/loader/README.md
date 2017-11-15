# Loader Usage
<a href="https://github.com/lon-yang/angularx-semantic-ui/blob/master/components/loader/README_CN.md">简体中文</a>

```typesctript
  import { LOADER_DIRECTIVES } from 'angularx-semantic-ui/compangularx-semantic-uionents'
```
```html
  <div (click)="toggleLoader()">
    <lsu-loader [active]="active" [loaderText]="loaderText" [loaderSize]="loaderSize"></lsu-loader>
  </div>
```

# Options
- active:  Optional. Used to control the Loader's explicit
- loaderText: Optional. The text will be displayied in page 
- loaderSize: Optional. Loader's size [mini | small | medium | large]

# Methods
- show: show loader 
- hide: hide loader
