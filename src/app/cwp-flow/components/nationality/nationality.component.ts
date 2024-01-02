import { Component } from '@angular/core';
import { CountryService } from 'src/app/shared/services/country.service';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { BehaviorSubject } from 'rxjs';
import { NationalityService } from 'src/app/shared/services/nationality.service';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.scss'],
})
export class NationalityComponent {
  countrySelectionIsOpen: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  residencePermitSelectionIsOpen: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isHovered: boolean = false;

  constructor(
    public countryService: CountryService,
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService,
    public nationalityService: NationalityService
  ) {}

  toggleCountrySelection(): void {
    this.countrySelectionIsOpen.next(!this.countrySelectionIsOpen.value);
  }

  toggleResidencePermitSelection(): void {
    this.residencePermitSelectionIsOpen.next(!this.residencePermitSelectionIsOpen.value);
    console.log(this.residencePermitSelectionIsOpen.value)
  }
}
