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
  currentCountry: BehaviorSubject<CountryModel> =
    new BehaviorSubject<CountryModel>(this.countries[0]);

  constructor() {}

  selectCountry(country: CountryModel): void {
    this.currentCountry.next(country);
  }

  cu() {
    this.countries.forEach((country: CountryModel) => {});
  }
}
