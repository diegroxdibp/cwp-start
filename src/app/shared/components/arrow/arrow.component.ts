import { Component, Input } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent {
  @Input() color: string = 'black';
  constructor(public screenSizeService: ScreenSizeService) {
    if (screenSizeService.isDesktop.value) {
      this.color = '#00965E';
    }
  }
}
