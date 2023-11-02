import { SalutationEnum } from '../enums/salutation.enum';

export interface PersonalDataModel {
  salutation: SalutationEnum;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  birthName: string;
  maritalStatus: string;
}
