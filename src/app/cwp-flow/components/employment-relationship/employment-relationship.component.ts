import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { BehaviorSubject } from 'rxjs';
import { EmploymentStatusService } from 'src/app/shared/services/employment-status.service';

@Component({
  selector: 'app-employment-relationship',
  templateUrl: './employment-relationship.component.html',
  styleUrls: ['./employment-relationship.component.scss'],
})
export class EmploymentRelationshipComponent {
  groupOfProfessionSelectionIsOpen: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService,
    public employmentStatusService: EmploymentStatusService
  ) {}

  toggleGroupOfProfessionSelection(): void {
    this.groupOfProfessionSelectionIsOpen.next(
      !this.groupOfProfessionSelectionIsOpen.value
    );
  }
}
