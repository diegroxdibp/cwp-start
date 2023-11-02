import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CWPFlowSteps } from '../../enums/cwp-flow-steps.enum';
import {
  NavigationButtons,
  emptyNavigationButtons,
} from '../../models/navigation-buttons.model';
import { CWPFlowStepsSequence } from '../../enums/cwp-flow-steps-sequence.enum';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss'],
})
export class NavigationButtonsComponent {
  @Input() label: string = '';
  @Input() navigation: NavigationButtons = emptyNavigationButtons;
  @Input() nextDisabled = false;
  @Input() activeStep: CWPFlowStepsSequence =
    CWPFlowStepsSequence.contactDetails;

  @Output() backClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();
  @Output() nextHovered = new EventEmitter<boolean>();

  readonly CWPFlowStepsSequence = CWPFlowStepsSequence;

  get last() {
    return this.activeStep === CWPFlowStepsSequence.overallOverview;
  }

  constructor() {}

  onBack() {
    this.backClicked.emit();
  }

  onNext() {
    this.nextClicked.emit();
  }
}
