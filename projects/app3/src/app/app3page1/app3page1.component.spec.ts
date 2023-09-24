import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App3page1Component } from './app3page1.component';

describe('App3page1Component', () => {
  let component: App3page1Component;
  let fixture: ComponentFixture<App3page1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App3page1Component]
    });
    fixture = TestBed.createComponent(App3page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
