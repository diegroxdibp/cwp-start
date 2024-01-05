import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmployedComponent } from './self-employed.component';

describe('SelfEmployedComponent', () => {
  let component: SelfEmployedComponent;
  let fixture: ComponentFixture<SelfEmployedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelfEmployedComponent]
    });
    fixture = TestBed.createComponent(SelfEmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
