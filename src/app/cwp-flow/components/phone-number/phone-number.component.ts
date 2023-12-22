import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CountryService } from 'src/app/shared/services/country.service';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent implements AfterViewChecked {
  @ViewChild('prefix', { read: ElementRef }) prefix: ElementRef | undefined;
  @ViewChild('phoneNumberInput', { read: ElementRef }) phoneNumberInput:
    | ElementRef
    | undefined;
  countrySelectionIsOpen: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isHovered: boolean = false;

  constructor(
    public countryService: CountryService,
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ) {
    this.countryService.currentCountry.subscribe(() => this.updateOffset());
  }

  ngAfterViewChecked() {
    this.updateOffset();
  }

  getOffset(): number {
    return this.prefix?.nativeElement?.offsetWidth ?? 40;
  }

  updateOffset() {
    const spacing = 24 + this.getOffset() + 'px';
    if (this.phoneNumberInput)
      this.phoneNumberInput.nativeElement.style.paddingLeft = spacing;
  }

  toggleCountrySelection(): void {
    this.countrySelectionIsOpen.next(!this.countrySelectionIsOpen.value);
  }

  onHover(isHovered: boolean): void {
    this.isHovered = isHovered;
  }
}
