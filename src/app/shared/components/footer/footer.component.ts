import { Component } from '@angular/core';

@Component({
  selector: 'cwp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  url1 = 'https://www.google.com';
  url2 = 'https://www.google.com';

  openLinkInNewTab(url: string): void {
    window.open(url, '_blank');
  }
}
