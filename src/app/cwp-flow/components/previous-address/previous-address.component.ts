import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';

@Component({
  selector: 'app-previous-address',
  templateUrl: './previous-address.component.html',
  styleUrls: ['./previous-address.component.scss'],
})
export class PreviousAddressComponent {
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ) {}
}
