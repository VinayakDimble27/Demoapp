import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {
@Input() public vin;
@Output() public data = new EventEmitter();
@Input() public dtaval;

  constructor() { 

  
  }

  ngOnInit() {
  }

  public foo()
 {
  this.data.emit("child to parent hello");
 }
}
