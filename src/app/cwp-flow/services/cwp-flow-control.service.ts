import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CWPFlowStepsSequence } from '../enums/cwp-flow-steps-sequence.enum';
import { CWPFlowNavigationButtons } from '../enums/cwp-flow-navigation-buttons.enum copy';
import { CWPFlowSteps } from '../enums/cwp-flow-steps.enum';

@Injectable({
  providedIn: 'root',
})
export class CwpFlowControlService {
  readonly CWPFlowSteps = CWPFlowSteps;
  readonly CWPFlowStepsSequence = CWPFlowStepsSequence;
  readonly CWPFlowNavigationButtons = CWPFlowNavigationButtons;
  CWPFlowStepActive = new BehaviorSubject<CWPFlowStepsSequence>(
    CWPFlowStepsSequence.personalData
  );

  constructor() {}

  stepForwards() {
    this.CWPFlowStepActive.next(
      Math.min(
        CWPFlowStepsSequence.overallOverview,
        this.CWPFlowStepActive.value + 1
      )
    );
  }

  stepBackwards() {
    this.CWPFlowStepActive.next(
      Math.max(
        CWPFlowStepsSequence.personalData,
        this.CWPFlowStepActive.value - 1
      )
    );
  }

  get CWPFlowStepActiveName() {
    const key : string = this.CWPFlowStepNameByStepNumber(this.CWPFlowStepActive.value);
    const CWPFlowStepActiveName = this.CWPFlowSteps[key as keyof typeof CWPFlowSteps];
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
}
