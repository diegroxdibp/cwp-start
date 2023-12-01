import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
} from 'rxjs';

@Component({
  selector: 'app-intro-image',
  templateUrl: './intro-image.component.html',
  styleUrls: ['./intro-image.component.scss'],
})
export class IntroImageComponent implements OnInit, OnDestroy {
  isMobile = false;
  isTablet = false;
  isDesktop = false;

  resizeSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {
    this.setupResizeListener();
    this.handleScreenSizeChange(); // Initial check
  }

  ngOnDestroy(): void {
    // Clean up the subscription when the component is destroyed
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  private setupResizeListener(): void {
    const resizeObservable = fromEvent(window, 'resize').pipe(
      debounceTime(200), // Debounce for 200 milliseconds
      distinctUntilChanged() // Only emit when the size actually changes
    );

    this.resizeSubscription = resizeObservable.subscribe(() => {
      this.handleScreenSizeChange();
    });
  }

  private handleScreenSizeChange(): void {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const tabletQuery = window.matchMedia(
      '(min-width: 768px) and (max-width: 991px)'
    );
    const desktopQuery = window.matchMedia('(min-width: 992px)');

    this.isMobile = mobileQuery.matches;
    this.isTablet = tabletQuery.matches;
    this.isDesktop = desktopQuery.matches;
  }
}
