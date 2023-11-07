import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CWPFlowStepsSequence } from '../enums/cwp-flow-steps-sequence.enum';

@Injectable({
  providedIn: 'root',
})
export class CwpFlowControlService {
  CWPFlowStepActive = new BehaviorSubject<CWPFlowStepsSequence>(
    CWPFlowStepsSequence.personalData
  );
  constructor() {}

  stepForwards() {
    this.CWPFlowStepActive.next(
      Math.min(CWPFlowStepsSequence.overallOverview, this.CWPFlowStepActive.value + 1)
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
}
