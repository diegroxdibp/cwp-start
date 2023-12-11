import { Component } from '@angular/core';
import { CWP_URLS } from '../../constants/app.constants';

@Component({
  selector: 'cwp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  dataProtectionURL = CWP_URLS.DATA_PROTECTION;
  inprintURL = CWP_URLS.INPRINT;

  openLinkInNewTab(url: string): void {
    window.open(url, '_blank');
  }
}
