import { Component, EventEmitter, Output } from '@angular/core';
import data from 'src/assets/months';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @Output() yearSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() monthSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() daySelected: EventEmitter<number> = new EventEmitter<number>();

  selectedYear: number | null = null;
  selectedMonth: number | null = null;
  selectedDay: number | null = null;

  public calendar: { day: number; otherMonth: boolean }[] = [];

  step: number = 1;
  startYear: number = new Date().getFullYear() - 50;
  endYear: number = new Date().getFullYear() + 50;
  yearsPerPage: number = 12;
  rangeStartYear!: number;
  rangeEndYear!: number;
  currentRange: number[] = [];

  listMonths: any = data.months;
  dayWeek = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  currentYearSelected!: number;
  currentMonthSelected!: number;

  constructor() {
    this.initializeCalendar();
    this.getFirstYear();
    this.getLastYear();
  }

  getYear(year: number): void {
    // Emit the clicked day to the parent component
    this.selectedYear = year;
    this.yearSelected.emit(year);
    this.currentYearSelected = year;
    console.log(this.currentYearSelected);
    this.step = 2;
  }

  nameMonthSelected: string = '';

  getMonth(month: number): void {
    this.selectedMonth = month;
    // Emit the clicked day to the parent component
    console.log(month);
    const monthSelected = this.listMonths.find((obj: { id: number }) => {
      console.log(month);
      return obj.id === month;
    });
    this.nameMonthSelected = monthSelected.name;
    this.currentMonthSelected = monthSelected.value + 1;

    this.monthSelected.emit(this.currentMonthSelected);

    this.generateCalendar(this.currentYearSelected, month - 1);
    this.step = 3;
  }
  getDay(day: number) {
    this.selectedDay = day;
    this.daySelected.emit(day);
  }
  initializeCalendar(): void {
    const currentYear = new Date().getFullYear();
    const currentBlockStart =
      Math.floor(currentYear / this.yearsPerPage) * this.yearsPerPage;

    this.currentRange = this.displayYears(
      currentBlockStart,
      currentBlockStart + this.yearsPerPage - 1
    );
    console.log(
      this.currentRange[0],
      this.currentRange[this.currentRange.length - 1]
    );
    // this.selectedYear = currentYear;
  }

  displayYears(startYear: number, endYear: number): number[] {
    let years = [];
    this.rangeStartYear = startYear;
    this.rangeEndYear = endYear;
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
      //console.log(year)
    }
    return years;
  }
  getFirstYear(): number {
    //  console.log(this.currentRange[0])
    return this.currentRange[0];
  }

  getLastYear(): number {
    //  console.log( this.currentRange[this.currentRange.length - 1])
    return this.currentRange[this.currentRange.length - 1];
  }

  getNextBlockYears() {
    console.log('current range' + this.currentRange[0]);
    const newStartYear = Math.min(
      this.currentRange[0] + this.yearsPerPage,
      this.endYear - this.yearsPerPage + 1
    );
    console.log(this.currentRange[0] + this.yearsPerPage);
    console.log(this.rangeStartYear);

    const newEndYear = Math.min(
      this.currentRange[0] + 2 * this.yearsPerPage - 1,
      this.endYear
    );

    this.currentRange = this.displayYears(newStartYear, newEndYear);
    console.log(this.currentRange);
    console.log(this.currentRange);
  }

  getPreviousBlockYears() {
    const newStartYear = Math.max(
      this.currentRange[0] - this.yearsPerPage,
      this.startYear
    );
    const newEndYear = Math.max(this.currentRange[0] - 1, this.startYear - 1);
    this.currentRange = this.displayYears(newStartYear, newEndYear);
  }
  goBack(currentStep: number) {
    this.step = currentStep - 1;
  }

  generateCalendar(currentYear: number, currentMonth: number) {
    this.calendar = [];
    console.log(currentYear, currentMonth);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(
      currentYear,
      currentMonth,
      daysInMonth
    ).getDay();

    // Dias do mês anterior
    const daysInPreviousMonth = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      console.log(daysInPreviousMonth);
      this.calendar.push({ day: daysInPreviousMonth - i, otherMonth: true });
    }

    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      this.calendar.push({ day: i, otherMonth: false });
    }

    // Dias do próximo mês
    for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
      this.calendar.push({ day: i, otherMonth: true });
    }
  }
}
