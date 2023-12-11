import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';

@Component({
  selector: 'app-current-address',
  templateUrl: './current-address.component.html',
  styleUrls: ['./current-address.component.scss'],
})
export class CurrentAddressComponent {
  constructor(public CwpFlowService: CwpFlowControlService) {}
}
