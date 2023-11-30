import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  emailValidator,
  phoneNumberValidation,
} from 'src/app/shared/utils/validation';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CWPFlowEmploymentRelationship } from '../../enums/employment-relationship.enum';

import { scrollToTop } from 'src/app/shared/utils/scroll-to-top.util';
import { CwpFormControlService } from '../../services/cwp-form-control.service';

@Component({
  selector: 'app-cwp-flow',
  templateUrl: './cwp-flow.component.html',
  styleUrls: ['./cwp-flow.component.scss'],
})
export class CwpFlowComponent {
  employmentRelationshipOptionControl = new FormControl(null);
  condition = true;

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

  // get isCurrentStepValid() {
  //   return this.checkIfValid(this.CwpFlowService.CWPFlowStepActive.value);
  // }

  // get isNextValid() {
  //   return this.checkIfValid(this.CwpFlowService.CWPFlowStepActive.value);
  // }

  // private checkIfValid(step: CWPFlowStepsSequence) {
  //   switch (step) {
  //     case CWPFlowStepsSequence.personalData:
  //       return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.contactDetails:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.nationality:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.bankDetails:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.employmentDetails:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.regularExpenses:
  //     //   return this.salutationControl.valid;
  //     case CWPFlowStepsSequence.overallOverview:
  //     //   return this.salutationControl.valid;
  //     default:
  //       return false;
  //   }
  // }

  onNext() {
    // this.isSubmited = true;

    // if (
    //   this.personalDataControl.controls['firstName'].invalid ||
    //   this.personalDataControl.controls['lastName'].invalid
    // ) {
    //   console.log('ola');
    //   return;
    // } else {
    // }
    this.CwpFlowService.stepForwards();
    scrollToTop();
    // this.isSubmited = false;
  }
}
