import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalutationAndNameComponent } from './salutation-and-name.component';

describe('SalutationAndNameComponent', () => {
  let component: SalutationAndNameComponent;
  let fixture: ComponentFixture<SalutationAndNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalutationAndNameComponent]
    });
    fixture = TestBed.createComponent(SalutationAndNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
