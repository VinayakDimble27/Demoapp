import { Component } from '@angular/core';


@Component({
    selector : 'app-style-bind',
    styleUrls : ['./style-bind.component.css'],
    templateUrl : './style-bind.component.html'
})



export class StyleBindComponent
{

   public MyColor = 'blue';
   public IsSet  =true;
}