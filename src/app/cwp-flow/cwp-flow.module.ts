import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CwpFlowComponent } from './pages/cwp-flow/cwp-flow.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalutationAndNameComponent } from './components/salutation-and-name/salutation-and-name.component';
import { ContentComponent } from './components/content/content.component';
import { EmailComponent } from './components/email/email.component';
import { BirthDateComponent } from './components/birth-date/birth-date.component';
import { MaritalStatusComponent } from './components/marital-status/marital-status.component';
import { CurrentAddressComponent } from './components/current-address/current-address.component';
import { PreviousAddressComponent } from './components/previous-address/previous-address.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { NationalityComponent } from './components/nationality/nationality.component';
import { BankDetailsComponent } from './components/bank-deatils/bank-details.component';
import { EmploymentRelationshipComponent } from './components/employment-relationship/employment-relationship.component';
import { TimeWorkingForCurrentEmployerComponent } from './components/time-working-for-current-employer/time-working-for-current-employer.component';
import { IndustryTypeAndMajoritySalesCountryComponent } from './components/industry-type-and-majority-sales-country/industry-type-and-majority-sales-country.component';
import { EmployerAddressComponent } from './components/employer-address/employer-address.component';
import { WhoDoYouLiveWithComponent } from './components/who-do-you-live-with/who-do-you-live-with.component';
import { HaveChildrenWhomYouAreResponsibleComponent } from './components/have-children-whom-you-are-responsible/have-children-whom-you-are-responsible.component';
import { SummaryComponent } from './components/summary-page/summary.component';

@NgModule({
  declarations: [CwpFlowComponent, SalutationAndNameComponent, EmailComponent, ContentComponent, BirthDateComponent, MaritalStatusComponent, CurrentAddressComponent, PreviousAddressComponent, PhoneNumberComponent, NationalityComponent, BankDetailsComponent, EmploymentRelationshipComponent, TimeWorkingForCurrentEmployerComponent, IndustryTypeAndMajoritySalesCountryComponent, EmployerAddressComponent, WhoDoYouLiveWithComponent, HaveChildrenWhomYouAreResponsibleComponent, SummaryComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [CwpFlowComponent],
})
export class CwpFlowModule {}
