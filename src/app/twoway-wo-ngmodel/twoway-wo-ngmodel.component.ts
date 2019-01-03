import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-wo-ngmodel',
  templateUrl: './twoway-wo-ngmodel.component.html',
  styleUrls: ['./twoway-wo-ngmodel.component.css']
})
export class TwowayWoNgmodelComponent implements OnInit {

  public userName = "";
  constructor() { }

  ngOnInit() {
  }

  public foo(event)
  {
    this.userName = event.target.value;
  }
}
