import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  alerta:string = 'warning'

  cambiar(){
    switch (this.alerta) {
      case 'warning':
        this.alerta = 'success'
        break;

      case 'success':
        this.alerta = 'info'
        break;

      case 'info':
        this.alerta = 'danger'
        break;

      case 'danger':
        this.alerta = 'warning'
        break;

      default:
        break;
    }

  }

}
