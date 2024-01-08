import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResidencePermit } from 'src/app/cwp-flow/enums/residence-permit.enum';
import { CountryService } from './country.service';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class NationalityService {
  readonly residencePermit = ResidencePermit;
  selectedResidencePermit: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  isMSCQ: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  requiresResidencePermit: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  constructor(public countryService: CountryService) {
    this.countryService.currentCountryNationality.subscribe(
      (country: CountryModel) => {
        this.checkPermirtRequirement();
        this.checkMSCQ();
      }
    );
  }

  get residencePermitValues(): string[] {
    return Object.values(this.residencePermit);
  }

  selectResidencePermit(permit: string): void {
    this.selectedResidencePermit.next(permit);
  }

  checkMSCQ() {
    if (
      this.countryService.currentCountryNationality.value.name === 'Cuba' ||
      this.countryService.currentCountryNationality.value.name === 'Ukraine' ||
      this.countryService.currentCountryNationality.value.name === 'Iran' ||
      this.countryService.currentCountryNationality.value.name ===
        'North Korea' ||
      this.countryService.currentCountryNationality.value.name === 'Syria'
    ) {
      this.isMSCQ.next(true);
    } else this.isMSCQ.next(false);
  }

  checkPermirtRequirement(): void {
    if (
      this.countryService.currentCountryNationality.value.name === 'Germany' ||
      this.countryService.currentCountryNationality.value.name === 'Austria' ||
      this.countryService.currentCountryNationality.value.name === 'Eu'
    ) {
      this.requiresResidencePermit.next(false);
    } else {
      this.requiresResidencePermit.next(true);
    }
  }
}
