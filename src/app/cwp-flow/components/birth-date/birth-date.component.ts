import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';
import { birthDate } from 'src/app/shared/constants/app.constants';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.component.html',
  styleUrls: ['./birth-date.component.scss'],
})
export class BirthDateComponent {
  isSubmited: boolean = false;
  visible: boolean = false;
  less18Years :boolean = false
  year: number | string = 'JJJJ';
  month: number | string = 'MM';
  day: number | string = 'TT';
  birthDate: any;
  currentDate = new Date();
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ) {}
  ngOnInit() {}

  getYear(year: number): void {
    this.year = year;
    console.log(`Year clicked: ${year}`);
    console.log(this.year);
    this.updateFormControl();
  }
  getMonth(month: number): void {
    this.month = month < 10 ? `0${month}` : `${month}`;

    console.log(`Month clicked: ${month}`);
    console.log(this.month);
    this.updateFormControl();
  }
  getDay(day: number) {
    this.day = day < 10 ? `0${day}` : `${day}`;
    console.log(this.day);
    console.log(`Year clicked: ${day}`);
    this.updateFormControl();
  }
  concatenatedValue: any;
  updateFormControl() {
    this.concatenatedValue = `${this.day}.${this.month}.${this.year}`;

    console.log(this.concatenatedValue);
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

    console.log('Difference in years:', differenceInYears);
    console.log(differenceInYears);
    // Check if the difference is less than 18 years
    if (differenceInYears < 18) {
      this.CwpFlowService.ageLessThen18Years.next(true);
     this.less18Years = true;
     console.log(this.less18Years);
    } else {
      this.CwpFlowService.ageLessThen18Years.next(false);
      this.less18Years = false;
    }
  }

 getValue() {
    
    this.birthDate = this.CwpFormService.CWPForm.get(
      'personalData.birthDate'
    )?.value;

    if (this.birthDate && this.birthDate.length === 8) {
      const day = this.birthDate.substring(0, 2);
      const month = this.birthDate.substring(2, 4);
      const year = this.birthDate.substring(4, 8);

      const dateInserted = new Date(`${year}-${month}-${day}`);
      const date = `${day}.${month}.${year}`;
      console.log(date);
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
}
