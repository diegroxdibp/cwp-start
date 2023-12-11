import { Component } from '@angular/core';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { BehaviorSubject } from 'rxjs';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';

@Component({
  selector: 'app-salutation-and-name',
  templateUrl: './salutation-and-name.component.html',
  styleUrls: ['./salutation-and-name.component.scss'],
})
export class SalutationAndNameComponent {
  salutation = new BehaviorSubject<string[]>(['Frau', 'Herr', 'Divers/Offen']);

  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ) {}
}
