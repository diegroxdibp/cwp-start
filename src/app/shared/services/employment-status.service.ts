import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GroupOfProfessions } from 'src/app/cwp-flow/enums/group-of-professions.enum';

@Injectable({
  providedIn: 'root',
})
export class EmploymentStatusService {
  currentProfession = new BehaviorSubject<string | null>(null);
  constructor() {}

  get groupsOfProfessionsFromValues(): string[] {
    return Object.values(GroupOfProfessions);
  }

  selectGroupOfProfession(profession: string | null): void {
    this.currentProfession.next(profession);
  }
}
