import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

  constructor(
    private _router: Router) {

  }

  ngOnInit(){
    this._router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd || evt instanceof NavigationCancel) {
        document.getElementsByTagName('html')[0].scrollTop = 0;
      }
    })
  }

}
