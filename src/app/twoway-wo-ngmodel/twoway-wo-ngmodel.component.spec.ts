import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayWoNgmodelComponent } from './twoway-wo-ngmodel.component';

describe('TwowayWoNgmodelComponent', () => {
  let component: TwowayWoNgmodelComponent;
  let fixture: ComponentFixture<TwowayWoNgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowayWoNgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayWoNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
