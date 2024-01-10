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
  startYear: number = new Date().getFullYear() - 60;
  endYear: number = new Date().getFullYear() + 60;
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
    this.step = 2;
  }

  nameMonthSelected: string = '';

  getMonth(month: number): void {
    this.selectedMonth = month;
    // Emit the clicked day to the parent component
    const monthSelected = this.listMonths.find((obj: { id: number }) => {
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

    this.currentRange = this.displayYears(
      currentYear - this.yearsPerPage + 1, // Adjust the start to include current year
      currentYear
    );
  }

  displayYears(startYear: number, endYear: number): number[] {
    let years = [];
    this.rangeStartYear = startYear;
    this.rangeEndYear = endYear;
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }
  getFirstYear(): number {
    return this.currentRange[0];
  }

  getLastYear(): number {
    return this.currentRange[this.currentRange.length - 1];
  }

  getNextBlockYears() {
    const newStartYear = Math.min(
      this.currentRange[0] + this.yearsPerPage,
      this.endYear - this.yearsPerPage + 1
    );

    const newEndYear = Math.min(
      newStartYear + this.yearsPerPage - 1, // Limit the end year to a block of 12
      this.endYear
    );

    this.currentRange = this.displayYears(newStartYear, newEndYear);
  }

  getPreviousBlockYears() {
    const newStartYear = Math.max(
      this.currentRange[0] - this.yearsPerPage,
      this.startYear
    );

    const newEndYear = Math.max(
      newStartYear + this.yearsPerPage - 1, // Limit the end year to a block of 12
      this.startYear
    );

    this.currentRange = this.displayYears(newStartYear, newEndYear);
  }
  goBack(currentStep: number) {
    this.step = currentStep - 1;
  }

  generateCalendar(currentYear: number, currentMonth: number) {
    this.calendar = [];
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
