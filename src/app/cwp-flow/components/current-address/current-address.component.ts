import { Component } from '@angular/core';
import { CwpFlowControlService } from '../../services/cwp-flow-control.service';
import { CwpFormControlService } from '../../services/cwp-form-control.service';

@Component({
  selector: 'app-current-address',
  templateUrl: './current-address.component.html',
  styleUrls: ['./current-address.component.scss'],
})
export class CurrentAddressComponent {
  isSubmited: boolean = false; 
  visible: boolean = false;
  year: number | string = 'JJJJ';
  month: number | string = 'MM';
  day: number | string = 'TT';
  constructor(
    public CwpFlowService: CwpFlowControlService,
    public CwpFormService: CwpFormControlService
  ) {
    
  }
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
    this.CwpFormService.CWPForm.get('contactDetails.residentDateSince')?.setValue(this.concatenatedValue);
    this.isUserAtLeast2Years();
  }
  openCalendar() {
    this.visible = !this.visible;
    //  console.log(this.visible);
    if (this.visible === true) {
      this.CwpFormService.CWPForm.get('contactDetails.residentDateSince')?.disable();
    } else {
      this.CwpFormService.CWPForm.get('contactDetails.residentDateSince')?.enable();
    }
  }
  isUserAtLeast2Years() {
    const currentDate = new Date();
    const selectedDate = new Date(`${this.year}-${this.month}-${this.day}`);
    const differenceInMilliseconds =
      currentDate.getTime() - selectedDate.getTime();

    // Convert the difference to years
    const differenceInYears =
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    console.log('Difference in years:', differenceInYears);
    console.log(differenceInYears)
    // Check if the difference is less than 18 years
    if (differenceInYears < 2) {
      this.CwpFlowService.residentLessThenTwoYears.next(true);
    } else {
      this.CwpFlowService.residentLessThenTwoYears.next(false);
    }
  }
}
