import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWorkingForCurrentEmployerComponent } from './time-working-for-current-employer.component';

describe('TimeWorkingForCurrentEmployerComponent', () => {
  let component: TimeWorkingForCurrentEmployerComponent;
  let fixture: ComponentFixture<TimeWorkingForCurrentEmployerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeWorkingForCurrentEmployerComponent]
    });
    fixture = TestBed.createComponent(TimeWorkingForCurrentEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
