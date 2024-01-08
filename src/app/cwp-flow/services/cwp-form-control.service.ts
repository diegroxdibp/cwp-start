import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {
  birthDateRegex,
  cityRegex,
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
  rentRegex,
  residencePermitValidTillRegex,
  residentDateSinceRegex,
} from 'src/app/shared/constants/dynamicValidations';
import { CWPFlowStepsSequence } from '../enums/cwp-flow-steps-sequence.enum';
import { CwpFlowControlService } from './cwp-flow-control.service';
import { dynamicMinLengthValidator } from 'src/app/shared/validators/validators';
import { CountryService } from 'src/app/shared/services/country.service';

@Injectable({
  providedIn: 'root',
})
export class CwpFormControlService {
  isSubmited = new BehaviorSubject<boolean>(false);
  //CwpFlowService: any;

  readonly CWPFlowStepsSequence = CWPFlowStepsSequence;

  constructor(
    private fb: FormBuilder,
    private CwpFlowService: CwpFlowControlService,
    private countryService: CountryService
  ) {
    console.log(CWPFlowStepsSequence);
  }

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
        // Validators.pattern(emailRegex),
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
        dynamicMinLengthValidator(this.countryService.currentCountryPhone),
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
    bankDetails: this.fb.group({
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

  personalDataControl = this.CWPForm.get('personalData') as FormGroup;
  contactDetailsControl = this.CWPForm.get('contactDetails') as FormGroup;
  bankDetails = this.CWPForm.get('bankDetails') as FormGroup;
  employmentsDetailsControl = this.CWPForm.get(
    'employmentDetails'
  ) as FormGroup;
  familyDetailsControl = this.CWPForm.get('familyDetails') as FormGroup;
  /* get userForm() {
    return this.CWPForm.get('user') as FormGroup;
  }*/

  get salutationControl(): FormControl {
    return this.personalDataControl!.get('salutation') as FormControl;
  }
  get firstNameControl(): FormControl {
    return this.personalDataControl!.get('firstName') as FormControl;
  }

  get lastNameControl(): FormControl {
    return this.personalDataControl!.get('lastName') as FormControl;
  }

  get emailControl(): FormControl {
    return this.personalDataControl!.get('email') as FormControl;
  }

  get birthDateControl(): FormControl {
    return this.personalDataControl!.get('birthDate') as FormControl;
  }
  get birthNameControl(): FormControl {
    return this.personalDataControl!.get('birthName') as FormControl;
  }
  get maritalStatusControl(): FormControl {
    return this.personalDataControl!.get('maritalStatus') as FormControl;
  }
  get zipCodeControl(): FormControl {
    return this.contactDetailsControl!.get('zipCode') as FormControl;
  }
  get cityControl(): FormControl {
    return this.contactDetailsControl!.get('city') as FormControl;
  }
  get streetControl(): FormControl {
    return this.contactDetailsControl!.get('street') as FormControl;
  }
  get doorNumberControl(): FormControl {
    return this.contactDetailsControl!.get('doorNumber') as FormControl;
  }
  get residentDateSinceControl(): FormControl {
    return this.contactDetailsControl!.get('residentDateSince') as FormControl;
  }
  get previousZipCodeControl(): FormControl {
    return this.contactDetailsControl!.get('previousZipCode') as FormControl;
  }
  get previousCityControl(): FormControl {
    return this.contactDetailsControl!.get('previousCity') as FormControl;
  }
  get previousStreetControl(): FormControl {
    return this.contactDetailsControl!.get('previousStreet') as FormControl;
  }
  get previousDoorNumberControl(): FormControl {
    return this.contactDetailsControl!.get('previousDoorNumber') as FormControl;
  }

  get phoneNumberControl() {
    return this.contactDetailsControl!.get('phoneNumber') as FormControl;
  }

  get ibanControl() {
    return this.bankDetails!.get('iban') as FormControl;
  }
  get professionControl() {
    return this.employmentsDetailsControl!.get('profession') as FormGroup;
  }
  get netIcome() {
    return this.employmentsDetailsControl!.get('netIncome') as FormGroup;
  }
  get industry() {
    return this.employmentsDetailsControl!.get(' industry') as FormGroup;
  }
  get countryOfActivity() {
    return this.employmentsDetailsControl!.get(
      'countryOfActivity'
    ) as FormGroup;
  }
  get employedDateSince() {
    return this.employmentsDetailsControl!.get(
      'employedDateSince'
    ) as FormGroup;
  }
  get employmentContractType() {
    return this.employmentsDetailsControl!.get(
      ' employmentContractType'
    ) as FormGroup;
  }
  get employmentContractValidTill() {
    return this.employmentsDetailsControl!.get(
      'employmentContractValidTill'
    ) as FormGroup;
  }
  get employerZipCode() {
    return this.employmentsDetailsControl!.get(' employerZipCode') as FormGroup;
  }
  get employerCity() {
    return this.employmentsDetailsControl!.get('employerCity') as FormGroup;
  }
  get employerStreet() {
    return this.employmentsDetailsControl!.get('employerStreet') as FormGroup;
  }
  get employerDoorNumber() {
    return this.employmentsDetailsControl!.get(
      'employerDoorNumber'
    ) as FormGroup;
  }
  get housingType() {
    return this.familyDetailsControl!.get('housingType') as FormGroup;
  }
  get rent() {
    return this.familyDetailsControl!.get('rent') as FormGroup;
  }
  get childrenCheck() {
    return this.familyDetailsControl!.get(' childrenCheck') as FormGroup;
  }
  get numberOfChildren() {
    return this.familyDetailsControl!.get('numberOfChildren') as FormGroup;
  }
  /* public get userFormGroup() {
    return this.CWPForm.get('user') as FormGroup;
  }*/

  submitForm() {
    /*if (!this.CWPForm.valid) {
      return;
    }
    console.log(this.CWPForm.value);*/

    console.log(this.CWPForm.value);
  }
  /*
  validation() {
    this.isSubmited.next(true);
    if (
      this.personalDataControl.controls['firstName'].invalid ||
      this.personalDataControl.controls['lastName'].invalid ||
      this.personalDataControl.controls['salutation'].invalid
    ) {
      console.log('2');
      return false;
    } else {
      this.isSubmited.next(false);
      console.log('1');
      return true;
    }
  }*/
  //saber a posição em que está e fazer a validação conforme a posição
  /*validation(){
    if (this.CwpFlowService.CWPFlowStepActive.value === this.CwpFlowService.CWPFlowStepsSequence.personalData_salutationAndNamePage) {
      this.isSubmited.next(true);
      if (
        this.personalDataControl.controls['firstName'].invalid ||
        this.personalDataControl.controls['lastName'].invalid ||
        this.personalDataControl.controls['salutation'].invalid
      ) {
        console.log('2');
        return false; 
      } else {
        this.isSubmited.next(false);
         return true; 
      }
      
    }else if(this.CwpFlowService.CWPFlowStepActive){
      this.isSubmited.next(true);
      if (
        this.personalDataControl.controls['email'].invalid 
      ) {
        console.log('2');
        return false; 
      } else {
        this.isSubmited.next(false);
        return true; 
      }
    }
    else {
      return false; 
    }
  }*/
  // step: number = this.CwpFlowService.CWPFlowStepActive.value;

  validation(): boolean {
    switch (true) {
      case this.CwpFlowService.CWPFlowStepActive.value ===
        this.CwpFlowService.CWPFlowStepsSequence
          .personalData_salutationAndNamePage:
        this.isSubmited.next(true);
        if (
          this.personalDataControl.controls['firstName'].invalid ||
          this.personalDataControl.controls['lastName'].invalid ||
          this.personalDataControl.controls['salutation'].invalid
        ) {
          console.log('2');
          return false;
        } else {
          this.isSubmited.next(false);
          return true;
        }

      case this.CwpFlowService.CWPFlowStepActive.value ===
        this.CwpFlowService.CWPFlowStepsSequence.personalData_emailPage:
        this.isSubmited.next(true);
        if (this.personalDataControl.controls['email'].invalid) {
          console.log('2');
          return false;
        } else {
          this.isSubmited.next(false);
          return true;
        }

      case this.CwpFlowService.CWPFlowStepActive.value ===
        this.CwpFlowService.CWPFlowStepsSequence.contactDetails_phoneNumberPage:
        this.isSubmited.next(true);
        if (this.contactDetailsControl.controls['phoneNumber'].invalid) {
          console.log(
            'minLegth error => ',
            this.CWPForm.get('contactDetails.phoneNumber')?.hasError(
              'dynamicMinLengthValidator'
            )
          );
          return false;
        } else {
          this.isSubmited.next(false);
          return true;
        }

      default:
        return true;
    }
  }
}
