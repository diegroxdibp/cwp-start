import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NavigationButtons,
  emptyNavigationButtons,
} from '../../../cwp-flow/models/navigation-buttons.model';
import { CWPFlowStepsSequence } from '../../../cwp-flow/enums/cwp-flow-steps-sequence.enum';
import { CwpFlowControlService } from '../../../cwp-flow/services/cwp-flow-control.service';
import { CWPFlowNavigationButtons } from '../../../cwp-flow/enums/cwp-flow-navigation-buttons.enum copy';
import { ScreenSizeService } from '../../services/screen-size.service';
import { CwpFormControlService } from 'src/app/cwp-flow/services/cwp-form-control.service';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss'],
})
export class NavigationButtonsComponent {
  @Input() buttonType: CWPFlowNavigationButtons = CWPFlowNavigationButtons.next;
  @Input() navigation: NavigationButtons = emptyNavigationButtons;
  @Input() activeStep: CWPFlowStepsSequence =
    CWPFlowStepsSequence.personalData_salutationAndNamePage;

  readonly CWPFlowStepsSequence = CWPFlowStepsSequence;
  readonly navigationButtons = CWPFlowNavigationButtons;
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService,
    public screenSizeService: ScreenSizeService
  ) {}

  onNext() {
    if (this.CwpFormService.validation() === true) {
      this.CwpFlowService.stepForwards();
    }
  }

  onBack() {
    this.CwpFlowService.stepBackwards();
  }
}
