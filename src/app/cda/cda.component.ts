import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cda',
  template: `
    <cda-component
      *axLazyElement="elementUrl"
      [open]="open"
      (validateCDA)="handleValidateCDA($event)"
    >
    </cda-component>
  `,
})
export class CdaComponent {

  elementUrl = 'http://localhost:9080/main.js';
  result: any;

  @Input()
  open: boolean = false;

  @Output()
  validateCDA = new EventEmitter();

  handleValidateCDA(result: any){
    this.result = result;
    this.validateCDA.emit(result.detail);
  }
}
