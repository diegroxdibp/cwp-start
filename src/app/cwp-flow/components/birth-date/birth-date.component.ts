import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.component.html',
  styleUrls: ['./birth-date.component.scss'],
})
export class BirthDateComponent {
  visible: boolean = false;
  less18Years: boolean = false;
  year: number | string = 'JJJJ';
  month: number | string = 'MM';
  day: number | string = 'TT';
  birthDate: any;
  currentDate = new Date();
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ) {}

  getYear(year: number): void {
    this.year = year;
    this.updateFormControl();
  }
  getMonth(month: number): void {
    this.month = month < 10 ? `0${month}` : `${month}`;
    this.updateFormControl();
  }
  getDay(day: number) {
    this.day = day < 10 ? `0${day}` : `${day}`;
    this.updateFormControl();
  }
  concatenatedValue: any;
  updateFormControl() {
    this.concatenatedValue = `${this.day}.${this.month}.${this.year}`;

    this.CwpFormService.CWPForm.get('personalData.birthDate')?.setValue(
      this.concatenatedValue
    );

    this.isUserAtLeast18YearsOld();
  }
  openCalendar() {
    this.visible = !this.visible;
    if (this.visible === true) {
      this.CwpFormService.CWPForm.get('personalData.birthDate')?.disable();
    } else {
      this.CwpFormService.CWPForm.get('personalData.birthDate')?.enable();
    }
  }
  isUserAtLeast18YearsOld() {
    const selectedDate = new Date(`${this.year}-${this.month}-${this.day}`);
    const differenceInMilliseconds =
      this.currentDate.getTime() - selectedDate.getTime();

    // Convert the difference to years
    const differenceInYears =
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    // Check if the difference is less than 18 years
    if (differenceInYears < 18) {
      this.CwpFlowService.ageLessThen18Years.next(true);
      this.less18Years = true;
    } else {
      this.CwpFlowService.ageLessThen18Years.next(false);
      this.less18Years = false;
    }
  }

  getValue() {
    this.birthDate = this.CwpFormService.CWPForm.get(
      'personalData.birthDate'
    )?.value;

   this.birthDate = this.CwpFormService.CWPForm.get('personalData.birthDate')?.value;
    console.log(this.birthDate);
  
   
    if (this.birthDate && this.birthDate.length === 8) {
      const day = this.birthDate.substring(0, 2);
      const month = this.birthDate.substring(2, 4);
      const year = this.birthDate.substring(4, 8);

      const dateInserted = new Date(`${year}-${month}-${day}`);
      const date = `${day}.${month}.${year}`;
      this.CwpFormService.CWPForm.get('personalData.birthDate')?.setValue(date);
      const differenceInMilliseconds =
        this.currentDate.getTime() - dateInserted.getTime();

      // Convert the difference to years
      const differenceInYears =
        differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      if (differenceInYears < 18) {
        this.CwpFlowService.ageLessThen18Years.next(true);
        this.less18Years = true;
      } else {
        this.CwpFlowService.ageLessThen18Years.next(false);
        this.less18Years = false;
      }
    }
  }
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value.replace(/[^0-9]/g, '');
  
    if (inputValue.length > 8) {
      inputValue = inputValue.substring(0, 8);
    }
  
    if (inputValue.length >= 2) {
      inputValue = `${inputValue.substring(0, 2)}.${inputValue.substring(2)}`;
    }
  
    if (inputValue.length >= 5) {
      inputValue = `${inputValue.substring(0, 5)}.${inputValue.substring(5)}`;
    }
  
    inputElement.value = inputValue;
    this.CwpFormService.birthDateControl.setValue(inputValue);
  }
}
