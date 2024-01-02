import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CwpFlowControlService } from 'src/app/cwp-flow/services/cwp-flow-control.service';
import { CwpFormControlService } from 'src/app/cwp-flow/services/cwp-form-control.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() id: string = '';
  @Input() typeInput: string = 'text'; // Valor padrão é 'text'
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() message: string = '';
  @Input() mandatoyMessage: any;
  @Input() errorMessage: any;
  @Input() msgError: string = '';
  @Input() msgSuccess: any;
  @Input() isSubmited: any;
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ) {
    console.log(this.msgSuccess);
  }
}
