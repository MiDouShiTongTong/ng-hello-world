import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bind1Component } from './bind1.component';

describe('Bind1Component', () => {
  let component: Bind1Component;
  let fixture: ComponentFixture<Bind1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bind1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bind1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
