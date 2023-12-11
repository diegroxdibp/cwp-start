import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { FormControl } from '@angular/forms';
import { CWPFlowEmploymentRelationship } from '../../enums/employment-relationship.enum';

@Component({
  selector: 'app-employment-relationship',
  templateUrl: './employment-relationship.component.html',
  styleUrls: ['./employment-relationship.component.scss'],
})
export class EmploymentRelationshipComponent {
  employmentRelationshipOptionControl = new FormControl(null);

  constructor(public CwpFlowService: CwpFlowControlService) {
    this.employmentRelationshipOptionControl.valueChanges.subscribe(
      (value: CWPFlowEmploymentRelationship | null) => {
        this.CwpFlowService.employmentRelationship.next(value);
      }
    );
  }
}
