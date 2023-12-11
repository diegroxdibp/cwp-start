import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerAddressComponent } from './employer-address.component';

describe('EmployerAddressComponent', () => {
  let component: EmployerAddressComponent;
  let fixture: ComponentFixture<EmployerAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerAddressComponent]
    });
    fixture = TestBed.createComponent(EmployerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
