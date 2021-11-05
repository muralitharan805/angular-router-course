import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModule2Component } from './demo-module2.component';

describe('DemoModule2Component', () => {
  let component: DemoModule2Component;
  let fixture: ComponentFixture<DemoModule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoModule2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
