import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App1Page2Component } from './app1-page2.component';

describe('App1Page2Component', () => {
  let component: App1Page2Component;
  let fixture: ComponentFixture<App1Page2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App1Page2Component]
    });
    fixture = TestBed.createComponent(App1Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
