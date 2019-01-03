import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ng-model-demo',
  templateUrl: './ng-model-demo.component.html',
  styleUrls: ['./ng-model-demo.component.css']
})
export class NgModelDemoComponent implements OnInit {

  public userName = "Vinayak";
  constructor() { }

  ngOnInit() {
  }

 
}
