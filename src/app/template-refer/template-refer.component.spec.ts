import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferComponent } from './template-refer.component';

describe('TemplateReferComponent', () => {
  let component: TemplateReferComponent;
  let fixture: ComponentFixture<TemplateReferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
