import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CountryService } from 'src/app/shared/services/country.service';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CountryModel } from 'src/app/shared/models/country.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumberComponent implements AfterViewChecked {
  @ViewChild('prefix', { read: ElementRef }) prefix: ElementRef | undefined;
  @ViewChild('phoneNumberInput', { read: ElementRef }) phoneNumberInput:
    | ElementRef
    | undefined;
  countrySelectionIsOpen: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isHovered: boolean = false;
  phoneInputmaxLength: number = 15;

  constructor(
    public countryService: CountryService,
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService,
    private cdr: ChangeDetectorRef
  ) {
    this.countryService.currentCountryPhone.subscribe(
      (country: CountryModel) => {
        this.clearInput();
        this.calcMaxLength(country['length_of_international_area_code_+_00']);
        this.setMaxLength();
        this.updateOffset();
        this.cdr.markForCheck();
      }
    );
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

  clearInput(): void {
    if (this.phoneNumberInput) this.phoneNumberInput.nativeElement.value = '';
  }
  onPhoneInput(event: Event): void {
    this.countrySelectionIsOpen.next(false);

    // Get the input value
    const inputValue = (event.target as HTMLInputElement).value;

    // Filter out non-numeric characters
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    // Limit the length of the input
    const limitedValue = numericValue.substring(0, this.phoneInputmaxLength);

    // Update the input value
    this.phoneNumberInput!.nativeElement.value = limitedValue;
  }

  calcMaxLength(offset: number = 15): void {
    this.phoneInputmaxLength = Math.max(15 - offset, 1);
  }

  setMaxLength(): void {
    if (this.phoneNumberInput) {
      this.phoneNumberInput.nativeElement.maxLength = this.phoneInputmaxLength;
    }
  }
}
