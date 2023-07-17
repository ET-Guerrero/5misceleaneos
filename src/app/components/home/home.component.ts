import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck } from '@angular/core';



@Component({
  selector: 'app-home',
  template: `

 <app-ng-style></app-ng-style>

 <app-css></app-css>

 <p>
    Wenas desde app.componnet
  </p>
   <app-clases></app-clases>

  <p appResaltado='red' >
    Wenasf
  </p>

   <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck {
    constructor() {
      console.log('constructor');
    }



  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }

  ngDoCheck() {
    console.log('DoCheck');
  }
}
