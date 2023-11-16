import { Component } from '@angular/core';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top.util';
import { CWPFlowStepsSequence } from '../../enums/cwp-flow-steps-sequence.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  emailValidator,
  phoneNumberValidation,
} from 'src/app/shared/utils/validation';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';

@Component({
  selector: 'app-cwp-flow',
  templateUrl: './cwp-flow.component.html',
  styleUrls: ['./cwp-flow.component.scss'],
})
export class CwpFlowComponent {

  constructor(
    private fb: FormBuilder,
    public CwpFlowService: CwpFlowControlService
  ) {}

  CWPForm: FormGroup = this.fb.group({
    salutation: this.fb.control(null, Validators.required),
    firstName: this.fb.control(null),
    lastName: this.fb.control(null),
    user: this.fb.group({
      salutation: this.fb.control(null, Validators.required),
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, [Validators.required]),
      phone: this.fb.control(null, [
        Validators.required,
        phoneNumberValidation(),
      ]),
      email: this.fb.control(null, [Validators.required, emailValidator()]),
    }),
  });

  onBack() {
    console.log(this.CwpFlowService.CWPFlowStepActive.value);
    scrollToTop();
    this.CwpFlowService.stepBackwards();
  }

  test(t?: string) {
    t ? console.log(t) : console.log('nada');
  }
  onNext() {
    console.log(this.CwpFlowService.CWPFlowStepActive.value);
    // if (!this.isCurrentStepValid) {
    //   return;
    // }
    scrollToTop();
    if (
      this.CwpFlowService.CWPFlowStepActive.value ===
        CWPFlowStepsSequence.overallOverview &&
      this.CWPForm.valid
    ) {
      this.submitForm();
      return;
    }
    this.CwpFlowService.stepForwards();
  }

  // get isCurrentStepValid() {
  //   return this.checkIfValid(this.CwpFlowService.CWPFlowStepActive.value);
  // }

  // get isNextValid() {
  //   return this.checkIfValid(this.CwpFlowService.CWPFlowStepActive.value);
  // }

  get userForm() {
    return this.CWPForm.get('user') as FormGroup;
  }

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

  private get salutationControl() {
    return this.CWPForm.controls['salutation'];
  }

  private get firstNameControl() {
    return this.CWPForm.controls['firstName'];
  }

  private get lastNameControl() {
    return this.CWPForm.controls['lastName'];
  }

  public get userFormGroup() {
    return this.CWPForm.get('user') as FormGroup;
  }

  private submitForm() {}
}
