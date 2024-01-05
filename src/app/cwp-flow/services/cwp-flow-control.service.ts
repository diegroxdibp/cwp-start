import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CWPFlowStepsSequence } from '../enums/cwp-flow-steps-sequence.enum';
import { CWPFlowNavigationButtons } from '../enums/cwp-flow-navigation-buttons.enum copy';
import { GroupOfProfessions } from '../enums/group-of-professions.enum';
import { Title } from '@angular/platform-browser';
import { CWPFlowBlocks } from '../enums/cwp-flow-blocks.enum';
import { EmploymentStatusService } from 'src/app/shared/services/employment-status.service';

@Injectable({
  providedIn: 'root',
})
export class CwpFlowControlService {
  readonly CWPFlowBlocks = CWPFlowBlocks;
  readonly CWPFlowStepsSequence = CWPFlowStepsSequence;
  readonly CWPFlowNavigationButtons = CWPFlowNavigationButtons;
  readonly GroupOfProfessions = GroupOfProfessions; // Reference to the enum in the component
  CWPFlowStepActive = new BehaviorSubject<CWPFlowStepsSequence>(
    CWPFlowStepsSequence.contactDetails_phoneNumberPage
  );
  residentLessThenTwoYears = new BehaviorSubject<boolean>(false);
  ageLessThen18Years = new BehaviorSubject<boolean>(false);

  constructor(
    private titleService: Title,
    private employmentStatusService: EmploymentStatusService
  ) {
    this.CWPFlowStepActive.subscribe((data) =>
      this.titleService.setTitle(this.CWPFlowStepActiveName)
    );
  }

  stepForwards(steps: number = 1) {
    //To previous address page
    if (
      this.CWPFlowStepActive.value ===
        CWPFlowStepsSequence.contactDetails_addressCurrentPage &&
      !this.residentLessThenTwoYears.value
    ) {
      this.toStep(CWPFlowStepsSequence.contactDetails_phoneNumberPage);
      return;
    }
    //To employee page
    if (
      this.CWPFlowStepActive.value ===
        CWPFlowStepsSequence.employmentDetails_employmentRelationtshipPage &&
      this.employmentStatusService.currentProfession.value ===
        GroupOfProfessions.employee
    ) {
      this.toStep(CWPFlowStepsSequence.employmentDetails_employee);
      return;
    }
    //To self employed page
    if (
      this.CWPFlowStepActive.value ===
        CWPFlowStepsSequence.employmentDetails_employmentRelationtshipPage &&
      this.employmentStatusService.currentProfession.value ===
        GroupOfProfessions.selfEmployed
    ) {
      this.toStep(
        CWPFlowStepsSequence.employmentDetails_selfEmployed
      );
      return;
    }
    //To executive page
    if (
      this.CWPFlowStepActive.value ===
        CWPFlowStepsSequence.employmentDetails_employmentRelationtshipPage &&
      this.employmentStatusService.currentProfession.value ===
        GroupOfProfessions.executive
    ) {
      this.toStep(
        CWPFlowStepsSequence.employmentDetails_executive
      );
      return;
    }
    //To other employment page
    if (
      this.CWPFlowStepActive.value ===
        CWPFlowStepsSequence.employmentDetails_employmentRelationtshipPage &&
      this.employmentStatusService.currentProfession.value ===
        GroupOfProfessions.other
    ) {
      this.toStep(
        CWPFlowStepsSequence.employmentDetails_other
      );
      return;
    }
    this.CWPFlowStepActive.next(
      Math.min(
        CWPFlowStepsSequence.overallOverview_summaryPage,
        this.CWPFlowStepActive.value + steps
      )
    );
  }

  stepBackwards() {
    if (
      this.CWPFlowStepActive.value ===
        CWPFlowStepsSequence.contactDetails_phoneNumberPage &&
      !this.residentLessThenTwoYears.value
    ) {
      this.toStep(CWPFlowStepsSequence.contactDetails_addressCurrentPage);
      return;
    }

    this.CWPFlowStepActive.next(
      Math.max(
        CWPFlowStepsSequence.personalData_salutationAndNamePage,
        this.CWPFlowStepActive.value - 1
      )
    );
  }

  toStep(step: CWPFlowStepsSequence): void {
    this.CWPFlowStepActive.next(step);
  }

  get CWPFlowStepActiveName() {
    const key: string = this.CWPBlock(this.CWPFlowStepActive.value);
    const CWPFlowStepActiveName =
      this.CWPFlowBlocks[key as keyof typeof CWPFlowBlocks];
    return CWPFlowStepActiveName;
  }

  get CWPFlowStepsSequenceKeysToArray(): string[] {
    return Object.values(CWPFlowStepsSequence).slice(
      0,
      Object.values(CWPFlowStepsSequence).length / 2
    ) as string[];
  }

  get CWPFlowStepsSequenceValuesToArray(): number[] {
    return Object.values(CWPFlowStepsSequence).filter(
      (value) => typeof value === 'number'
    ) as number[];
  }

  CWPFlowStepNameByStepNumber(stepNumber: CWPFlowStepsSequence): string {
    return CWPFlowStepsSequence[stepNumber];
  }

  CWPFlowStepNumberByStepName(stepName: string): number {
    return Object.values(CWPFlowStepsSequence).filter(
      (value) => value === stepName
    )[0] as number;
  }

  CWPBlock(step: CWPFlowStepsSequence): string {
    switch (true) {
      case step >= 1 && step <= 4:
        return 'personalData';
      case step >= 5 && step <= 7:
        return 'contactDetails';
      case step === 8:
        return 'nationality';
      case step === 9:
        return 'bankDetails';
      case step >= 10 && step <= 14:
        return 'employmentDetails';
      case step >= 15 && step <= 16:
        return 'regularExpenses';
      case step === 17:
        return 'overallOverview';
      default:
        return 'unknownGroup';
    }
  }

  get CWPBlockNames(): string[] {
    return Object.values(this.CWPFlowBlocks);
  }

  toggleResidentLessThenTwoYearsStatus(): void {
    this.residentLessThenTwoYears.next(!this.residentLessThenTwoYears.value);
  }
}
