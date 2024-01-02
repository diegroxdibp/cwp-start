import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResidencePermit } from 'src/app/cwp-flow/enums/residence-permit.enum';
import { CountryService } from './country.service';

@Injectable({
  providedIn: 'root',
})
export class NationalityService {
  readonly residencePermit = ResidencePermit;
  selectedResidencePermit: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  isMSQC: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  requiresResidencePermit: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  constructor(public countryService: CountryService) {
    this.countryService.currentCountryNationality.subscribe((country) => {
      console.log(country.name);
      this.checkPermirtRequirement();
    });
  }

  get residencePermitValues(): string[] {
    return Object.values(this.residencePermit);
  }

  selectResidencePermit(permit: string): void {
    this.selectedResidencePermit.next(permit);
  }

  checkMSQC() {}
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
