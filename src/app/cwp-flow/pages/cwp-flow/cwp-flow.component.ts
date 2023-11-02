import { CWPFlowSteps } from './../../enums/cwp-flow-steps.enum';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CWPFlowStepsModel } from '../../models/cwp-flow-steps.model';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top.util';
import { CWPFlowStepsSequence } from '../../enums/cwp-flow-steps-sequence.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  emailValidator,
  phoneNumberValidation,
} from 'src/app/shared/utils/validation';

@Component({
  selector: 'app-cwp-flow',
  templateUrl: './cwp-flow.component.html',
  styleUrls: ['./cwp-flow.component.scss'],
})
export class CwpFlowComponent {
  CWPFlowStepActive = new BehaviorSubject<CWPFlowStepsSequence>(
    CWPFlowStepsSequence.personalData
  );

  readonly CWPFlowSteps = CWPFlowSteps;
  readonly CWPFlowStepsSequence = CWPFlowStepsSequence;

  constructor(private fb: FormBuilder) {}

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
    scrollToTop();
    this.CWPFlowStepActive.next(
      Math.max(
        CWPFlowStepsSequence.contactDetails,
        this.CWPFlowStepActive.value - 1
      )
    );
  }

  handleSections(index: number) {
    const active = this.CWPFlowStepActive.value;
    const current = index;
    if (current < active) {
      this.CWPFlowStepActive.next(current);
    }
  }

  onNext() {
    if (!this.isCurrentStepValid) {
      return;
    }
    scrollToTop();
    if (
      this.CWPFlowStepActive.value === CWPFlowStepsSequence.overallOverview &&
      this.CWPForm.valid
    ) {
      this.submitForm();
      return;
    }
    this.goToNextStep(this.CWPFlowStepActive.value);
  }

  get isCurrentStepValid() {
    return this.checkIfValid(this.CWPFlowStepActive.value);
  }

  get isNextValid() {
    return this.checkIfValid(this.CWPFlowStepActive.value);
  }

  get userForm() {
    return this.CWPForm.get('user') as FormGroup;
  }

  private goToNextStep(activeStep: CWPFlowStepsSequence) {
    this.CWPFlowStepActive.next(
      Math.min(CWPFlowStepsSequence.overallOverview, activeStep + 1)
    );
  }

  private checkIfValid(step: CWPFlowStepsSequence) {
    switch (step) {
      case CWPFlowStepsSequence.personalData:
        return this.salutationControl.valid;
      case CWPFlowStepsSequence.contactDetails:
      //   return this.salutationControl.valid;
      case CWPFlowStepsSequence.nationality:
      //   return this.salutationControl.valid;
      case CWPFlowStepsSequence.bankDetails:
      //   return this.salutationControl.valid;
      case CWPFlowStepsSequence.employmentDetails:
      //   return this.salutationControl.valid;
      case CWPFlowStepsSequence.regularExpenses:
      //   return this.salutationControl.valid;
      case CWPFlowStepsSequence.overallOverview:
      //   return this.salutationControl.valid;
      default:
        return false;
    }
  }

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
