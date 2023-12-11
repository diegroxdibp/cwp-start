import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryTypeAndMajoritySalesCountryComponent } from './industry-type-and-majority-sales-country.component';

describe('IndustryTypeAndMajoritySalesCountryComponent', () => {
  let component: IndustryTypeAndMajoritySalesCountryComponent;
  let fixture: ComponentFixture<IndustryTypeAndMajoritySalesCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustryTypeAndMajoritySalesCountryComponent]
    });
    fixture = TestBed.createComponent(IndustryTypeAndMajoritySalesCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
