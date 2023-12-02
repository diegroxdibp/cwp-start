import { Component } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-intro-image',
  templateUrl: './intro-image.component.html',
  styleUrls: ['./intro-image.component.scss'],
})
export class IntroImageComponent {
  constructor(public screenSizeService: ScreenSizeService) {}
}
