import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COUNTRIES_LIBRARY } from 'src/assets/flag-icons/country';
import { CountryModel } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  readonly countries: CountryModel[] = COUNTRIES_LIBRARY;
  // First country should aways be germany
  currentCountryPhone: BehaviorSubject<CountryModel> =
    new BehaviorSubject<CountryModel>(this.countries[0]);
  currentCountryNationality: BehaviorSubject<CountryModel> =
    new BehaviorSubject<CountryModel >(this.countries[0]);

  constructor() {}

  selectCountryPhone(country: CountryModel): void {
    this.currentCountryPhone.next(country);
  }

  selectCountryNationality(country: CountryModel): void {
    this.currentCountryNationality.next(country);
  }
}
