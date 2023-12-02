import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { CWPFlowEmploymentRelationship } from '../../enums/employment-relationship.enum';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  employmentRelationshipOptionControl = new FormControl(null);
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ) {
    this.employmentRelationshipOptionControl.valueChanges.subscribe(
      (value: CWPFlowEmploymentRelationship | null) => {
        this.CwpFlowService.employmentRelationship.next(value);
      }
    );
  }
}
