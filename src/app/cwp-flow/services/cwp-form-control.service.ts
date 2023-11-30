import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  birthDateRegex,
  cityRegex,
  emailRegex,
  employedDateSinceRegex,
  employmentContractValidTillRegex,
  ibanRegex,
  maxLengthBirthName,
  maxLengthCity,
  maxLengthCountryOfActivity,
  maxLengthDoorNumber,
  maxLengthFirtName,
  maxLengthIndustry,
  maxLengthLastName,
  maxLengthProfession,
  maxLengthStreet,
  maxLengthZipCode,
  minLengthBirthName,
  minLengthCity,
  minLengthCountryOfActivity,
  minLengthDoorNumber,
  minLengthFisrtName,
  minLengthIndustry,
  minLengthLastName,
  minLengthProfession,
  minLengthStreet,
  minLengthZipCode,
  netIncomeRegex,
  phoneNumberRegex,
  rentRegex,
  residencePermitValidTillRegex,
  residentDateSinceRegex,
} from 'src/app/shared/constants/dynamicValidations';

@Injectable({
  providedIn: 'root',
})
export class CwpFormControlService {
  constructor(private fb: FormBuilder) {}

  CWPForm: FormGroup = this.fb.group({
    personalData: this.fb.group({
      salutation: this.fb.control(null, [Validators.required]),
      firstName: this.fb.control('', [
        Validators.required,
        Validators.maxLength(maxLengthFirtName),
        Validators.minLength(minLengthFisrtName),
      ]),
      lastName: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthLastName),
        Validators.minLength(minLengthLastName),
      ]),
      email: this.fb.control(null, [
        Validators.required,
        Validators.pattern(emailRegex),
      ]),
      birthDate: this.fb.control(null, [
        Validators.required,
        Validators.pattern(birthDateRegex),
        Validators.min(minLengthBirthName),
        Validators.max(maxLengthBirthName),
      ]),
      birthName: this.fb.control(null),
      maritalStatus: this.fb.control(null, [Validators.required]),
    }),
    contactDetails: this.fb.group({
      zipCode: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthZipCode),
        Validators.min(minLengthZipCode),
      ]),
      city: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthCity),
        Validators.minLength(minLengthCity),
        Validators.pattern(cityRegex),
      ]),
      street: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthStreet),
        Validators.minLength(minLengthStreet),
      ]),
      doorNumber: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthDoorNumber),
        Validators.minLength(minLengthDoorNumber),
      ]),
      residentDateSince: this.fb.control(null, [
        Validators.required,
        Validators.pattern(residentDateSinceRegex),
      ]),
      previousZipCode: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthZipCode),
        Validators.min(minLengthZipCode),
      ]),
      previousCity: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthCity),
        Validators.minLength(minLengthCity),
        Validators.pattern(cityRegex),
      ]),
      previousStreet: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthStreet),
        Validators.minLength(minLengthStreet),
      ]),
      previousDoorNumber: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthDoorNumber),
        Validators.minLength(minLengthDoorNumber),
      ]),
      phoneNumber: this.fb.control(null, [
        Validators.required,
        Validators.pattern(phoneNumberRegex),
      ]),
    }),
    nationalityDetails: this.fb.group({
      nationality: this.fb.control(null, [
        Validators.required,
        Validators.pattern(residentDateSinceRegex),
      ]),
      residencePermitType: this.fb.control(null, [Validators.required]),
      residencePermitValidTill: this.fb.control(null, [
        Validators.required,
        Validators.pattern(residencePermitValidTillRegex),
      ]),
      countryExceptionCheck: this.fb.control(null, [Validators.required]),
    }),
    backDetails: this.fb.group({
      iban: this.fb.control(null, [
        Validators.required,
        Validators.pattern(ibanRegex),
      ]),
    }),
    employmentsDetails: this.fb.group({
      profession: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthProfession),
        Validators.minLength(minLengthProfession),
      ]),
      netIncome: this.fb.control(null, [
        Validators.required,
        Validators.pattern(netIncomeRegex),
      ]),
      industry: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthIndustry),
        Validators.minLength(minLengthIndustry),
      ]),
      countryOfActivity: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthCountryOfActivity),
        Validators.minLength(minLengthCountryOfActivity),
      ]),
      employedDateSince: this.fb.control(null, [
        Validators.required,
        Validators.pattern(employedDateSinceRegex),
      ]),
      employmentContractType: this.fb.control(null, [Validators.required]),
      employmentContractValidTill: this.fb.control(null, [
        Validators.required,
        Validators.pattern(employmentContractValidTillRegex),
      ]),
      employerZipCode: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthZipCode),
        Validators.min(minLengthZipCode),
      ]),
      employerCity: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthCity),
        Validators.minLength(minLengthCity),
        Validators.pattern(cityRegex),
      ]),
      employerStreet: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthStreet),
        Validators.minLength(minLengthStreet),
      ]),
      employerDoorNumber: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(maxLengthDoorNumber),
        Validators.minLength(minLengthDoorNumber),
      ]),
    }),
    familyDetails: this.fb.group({
      housingType: this.fb.control(null, [Validators.required]),
      rent: this.fb.control(null, [
        Validators.required,
        Validators.pattern(rentRegex),
      ]),
      childrenCheck: this.fb.control(null, [Validators.required]),
      numberOfChildren: this.fb.control(null, [Validators.required]),
    }),
  });

  personalDataControl = this.CWPForm.get('personalData');

  get userForm() {
    return this.CWPForm.get('user') as FormGroup;
  }

  get salutationControl(): FormControl {
    return this.personalDataControl!.get('salutation') as FormControl;
  }
  get firstNameControl() {
    return this.CWPForm.controls['firstName'];
  }

  get lastNameControl() {
    return this.CWPForm.controls['lastName'];
  }

  public get userFormGroup() {
    return this.CWPForm.get('user') as FormGroup;
  }

  submitForm() {
    if (!this.CWPForm.valid) {
      return;
    }
    console.log(this.CWPForm.value);
  }

  getControl(name: any): AbstractControl | null {
    return this.CWPForm.get(name);
  }
}
