import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import {
  EmailRegex,
  LicenseRegex,
  PhoneNumberRegex,
} from '../constants/app.constants';
import { Observable, Subscription, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { CountryModel } from '../models/country.model';
export function dynamicMinLengthValidator(
  observable: Observable<CountryModel>
): ValidatorFn {
  let subscription: Subscription | undefined;
  let minLength: number;

  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!subscription) {
      subscription = observable
        .pipe(debounceTime(0))
        .subscribe((country: CountryModel) => {
          // Calculate the desired minimum length
          minLength = Math.max(15 - country['length_of_international_area_code_+_00'], 0);
          // Update the control validity
          control.updateValueAndValidity();
        });
    }

    // Check if the value has the desired minimum length
    const value = control.value;
    if (value && value.toString().length !== minLength) {
      return { 'minLength': { minLength, actualLength: value.toString().length } };
    }

    return null;
  };
}
export function maxLengthValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value && value.toString().length > maxLength) {
      return {
        maxLength: { maxLength, actualLength: value.toString().length },
      };
    }
    return null;
  };
}

export const licensePlateValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const validLicensePlate = LicenseRegex.test(value);

    return !validLicensePlate ? { licensePlate: true } : null;
  };
};

export const emailValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const validEmail = EmailRegex.test(value);

    return !validEmail ? { email: true } : null;
  };
};

export const phoneNumberValidation = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const validPhone = PhoneNumberRegex.test(value);

    return !validPhone ? { phoneNumber: true } : null;
  };
};
