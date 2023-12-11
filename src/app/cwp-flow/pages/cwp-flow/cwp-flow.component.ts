import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { ScreenSizeService } from 'src/app/shared/services/screen-size.service';

@Component({
  selector: 'app-cwp-flow',
  templateUrl: './cwp-flow.component.html',
  styleUrls: ['./cwp-flow.component.scss'],
})
export class CwpFlowComponent {
  condition = true;

  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService,
    public screenSizeService: ScreenSizeService
  ) {}

}
