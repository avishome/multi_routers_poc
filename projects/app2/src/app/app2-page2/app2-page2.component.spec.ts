import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2Page2Component } from './app2-page2.component';

describe('App2Page2Component', () => {
  let component: App2Page2Component;
  let fixture: ComponentFixture<App2Page2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App2Page2Component]
    });
    fixture = TestBed.createComponent(App2Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
