import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import data from 'src/assets/months';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, OnChanges {
  @Output() yearSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() monthSelected: EventEmitter<number> = new EventEmitter<number>();
  @Output() daySelected: EventEmitter<number> = new EventEmitter<number>();
  @Input() dateSelectionOptions: 'past' | 'future' | 'both' = 'both';

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

  showPreviousButton: boolean = true;
  showNextButton: boolean = true;

  nameMonthSelected: string = '';

  constructor() {}

  ngOnInit() {
    this.initializeCalendar();
    this.getFirstYear();
    this.getLastYear();
    this.updateNavigationButtonsVisibility();
    console.log(this.dateSelectionOptions);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('dateSelectionOptions' in changes) {
      this.updateNavigationButtonsVisibility();
    }
  }

  updateNavigationButtonsVisibility() {
    const currentYear = new Date().getFullYear();
    const isFirstBlock = this.currentRange[0] === this.startYear;
    const isLastBlock =
      this.currentRange[this.currentRange.length - 1] === this.endYear;
    const isPresentBlock =
      this.currentRange[0] <= this.startYear + this.yearsPerPage;
    console.log('End year » ', this.endYear);
    console.log('currentRange » ', this.currentRange, isPresentBlock);
    console.log(
      this.currentRange[this.currentRange.length - 1],
      this.currentRange[0],
      'calc > ',
      this.currentRange[this.currentRange.length - 1] - this.currentRange[0] ===
        11
    );
    switch (this.dateSelectionOptions) {
      case 'past':
        this.showPreviousButton = !isFirstBlock;
        this.showNextButton = !isLastBlock;
        break;
      case 'future':
        this.showPreviousButton = !isFirstBlock;
        this.showNextButton = isLastBlock;
        break;
      case 'both':
        this.showPreviousButton = !isFirstBlock;
        this.showNextButton = !isLastBlock;
        break;
      default:
        // Default to showing both buttons if the option is not recognized
        this.showPreviousButton = true;
        this.showNextButton = true;
        break;
    }
  }

  getYear(year: number): void {
    // Emit the clicked day to the parent component
    this.selectedYear = year;
    this.yearSelected.emit(year);
    this.currentYearSelected = year;
    this.step = 2;
  }

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
    this.updateNavigationButtonsVisibility();
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
    this.updateNavigationButtonsVisibility();
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
