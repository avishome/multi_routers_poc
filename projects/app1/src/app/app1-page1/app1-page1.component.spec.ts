import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App1Page1Component } from './app1-page1.component';

describe('App1Page1Component', () => {
  let component: App1Page1Component;
  let fixture: ComponentFixture<App1Page1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App1Page1Component]
    });
    fixture = TestBed.createComponent(App1Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
