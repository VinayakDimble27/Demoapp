import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent implements OnInit {
@Output() public childparent = new EventEmitter();
public siblings = ["vinayak", "vik", "ash"];
  constructor() { }

  ngOnInit() {
  }
public foo()
{
  this.childparent.emit(this.siblings);
}
}
