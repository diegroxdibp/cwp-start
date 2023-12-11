import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoDoYouLiveWithComponent } from './who-do-you-live-with.component';

describe('WhoDoYouLiveWithComponent', () => {
  let component: WhoDoYouLiveWithComponent;
  let fixture: ComponentFixture<WhoDoYouLiveWithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoDoYouLiveWithComponent]
    });
    fixture = TestBed.createComponent(WhoDoYouLiveWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
