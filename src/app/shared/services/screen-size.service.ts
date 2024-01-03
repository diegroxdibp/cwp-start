import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  isMobile = new BehaviorSubject<boolean>(false);
  isTablet = new BehaviorSubject<boolean>(false);
  isDesktop = new BehaviorSubject<boolean>(false);
  resizeSubscription: Subscription | undefined;

  constructor() {
    this.setupResizeListener();
    this.handleScreenSizeChange();
  }

  private setupResizeListener(): void {
    const resizeObservable = fromEvent(window, 'resize').pipe(
      debounceTime(200),
      distinctUntilChanged()
    );

    this.resizeSubscription = resizeObservable.subscribe(() => {
      this.handleScreenSizeChange();
    });
  }

  private handleScreenSizeChange(): void {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
    const desktopQuery = window.matchMedia('(min-width: 992px)');

    this.isMobile.next(mobileQuery.matches);
    this.isTablet.next(tabletQuery.matches);
    this.isDesktop.next(desktopQuery.matches);
  }
}
