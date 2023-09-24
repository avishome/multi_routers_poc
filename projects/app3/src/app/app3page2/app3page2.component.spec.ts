import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App3page2Component } from './app3page2.component';

describe('App3page2Component', () => {
  let component: App3page2Component;
  let fixture: ComponentFixture<App3page2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App3page2Component]
    });
    fixture = TestBed.createComponent(App3page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
