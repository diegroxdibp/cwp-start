import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentRelationshipComponent } from './employment-relationship.component';

describe('EmploymentRelationshipComponent', () => {
  let component: EmploymentRelationshipComponent;
  let fixture: ComponentFixture<EmploymentRelationshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploymentRelationshipComponent]
    });
    fixture = TestBed.createComponent(EmploymentRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
