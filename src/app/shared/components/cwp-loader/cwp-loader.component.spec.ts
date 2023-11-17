import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwpLoaderComponent } from './cwp-loader.component';

describe('CwpLoaderComponent', () => {
  let component: CwpLoaderComponent;
  let fixture: ComponentFixture<CwpLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CwpLoaderComponent]
    });
    fixture = TestBed.createComponent(CwpLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
