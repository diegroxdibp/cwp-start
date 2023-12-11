import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveChildrenWhomYouAreResponsibleComponent } from './have-children-whom-you-are-responsible.component';

describe('HaveChildrenWhomYouAreResponsibleComponent', () => {
  let component: HaveChildrenWhomYouAreResponsibleComponent;
  let fixture: ComponentFixture<HaveChildrenWhomYouAreResponsibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaveChildrenWhomYouAreResponsibleComponent]
    });
    fixture = TestBed.createComponent(HaveChildrenWhomYouAreResponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
