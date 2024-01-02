import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ArrowComponent } from './components/arrow/arrow.component';
import { CfgLogoComponent } from './components/cfg-logo/cfg-logo.component';
import { IntroImageComponent } from './components/intro-image/intro-image.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CwpLoaderComponent } from './components/cwp-loader/cwp-loader.component';
import { NavigationButtonsComponent } from './components/navigation-buttons/navigation-buttons.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import {
  IconCalendar,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronsLeft,
  IconChevronsRight,
  IconCircleCheck,
  IconExclamationCircle,
} from 'angular-tabler-icons/icons';
import { InputComponent } from './components/input/input.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const icons = {
  IconCircleCheck,
  IconExclamationCircle,
  IconCalendar, 
  IconChevronUp,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconCheck
};
@NgModule({
  declarations: [
    SkeletonComponent,
    HeaderComponent,
    FooterComponent,
    ArrowComponent,
    CfgLogoComponent,
    IntroImageComponent,
    ProgressBarComponent,
    CwpLoaderComponent,
    NavigationButtonsComponent,
    InputComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TablerIconsModule.pick(icons),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ArrowComponent,
    IntroImageComponent,
    ArrowComponent,
    ProgressBarComponent,
    CwpLoaderComponent,
    NavigationButtonsComponent,
    TablerIconsModule,
    InputComponent,
    CalendarComponent,
  ],
})
export class SharedModule {}
