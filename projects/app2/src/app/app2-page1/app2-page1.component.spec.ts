import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2Page1Component } from './app2-page1.component';

describe('App2Page1Component', () => {
  let component: App2Page1Component;
  let fixture: ComponentFixture<App2Page1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App2Page1Component]
    });
    fixture = TestBed.createComponent(App2Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
