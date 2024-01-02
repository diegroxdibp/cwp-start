import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';

@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: ['./marital-status.component.scss']
})
export class MaritalStatusComponent {
  isSubmited:boolean = false; 
  maritalStatus = new BehaviorSubject<string[]>(['Ledig', 
  'Lebensgemeinschaft', "Verheiratet", "Getrennt lebend", "Geschieden", "Verwitwet"]);

  
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ){}
}
