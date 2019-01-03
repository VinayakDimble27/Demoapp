import { Component } from '@angular/core';

@Component({
    selector : 'app-event-bind',
    templateUrl : './event-bind.component.html'
})

export class EventBindComponent {
  public data = 'Vinayak ';

 public foo() {
    this.data = 'Vinayak is here';
 }

 public eventgenerate(value) {

  console.log(value);
 }

 public gun(val)
 {
   this.data = val;
 }
}