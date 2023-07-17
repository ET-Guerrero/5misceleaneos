import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
  <p [style.fontSize.px]="tamanio">
    funciona
  </p>

  <button class="btn btn-primary" (click)="tamanio = tamanio + 5">
    <i class="fa fa-plus"></i>
  </button>

  <button class="btn btn-primary " (click)="tamanio = tamanio - 5">
    <i class="fa fa-minus"></i>
  </button>
  `,

  styles: [`

  p {
    color: red;
    font-size: 20px;
  }

  `]
})
export class CssComponent {

  tamanio:number = 30

  constructor() {

  }

}
