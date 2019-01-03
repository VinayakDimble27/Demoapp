import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refer',
  templateUrl: './template-refer.component.html',
  styleUrls: ['./template-refer.component.css']
})
export class TemplateReferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public foo(value)
{
  console.log(value);
}
}
