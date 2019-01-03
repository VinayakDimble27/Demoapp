import { Component } from '@angular/core';

@Component({
    selector : 'app-class-bind',
    styleUrls : ['./class-bind.component.css'],
    templateUrl : './class-bind.component.html'
})

export class ClassBindComponent {

    public className = 'green';
    public isSet = false;
}