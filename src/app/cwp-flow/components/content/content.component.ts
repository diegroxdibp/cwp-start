import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { ScreenSizeService } from 'src/app/shared/services/screen-size.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService,
    public screenSizeService: ScreenSizeService
  ) {}
}
