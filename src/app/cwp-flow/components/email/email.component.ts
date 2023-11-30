import { Component } from '@angular/core';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent {
  isSubmited: boolean = false;
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ) {}
}
