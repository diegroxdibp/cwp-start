import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAddressComponent } from './current-address.component';

describe('CurrentAddressComponent', () => {
  let component: CurrentAddressComponent;
  let fixture: ComponentFixture<CurrentAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentAddressComponent]
    });
    fixture = TestBed.createComponent(CurrentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
