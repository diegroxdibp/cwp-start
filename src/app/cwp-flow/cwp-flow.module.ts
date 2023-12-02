import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CwpFlowComponent } from './pages/cwp-flow/cwp-flow.component';
import { NavigationButtonsComponent } from './components/navigation-buttons/navigation-buttons.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalutationAndNameComponent } from './components/salutation-and-name/salutation-and-name.component';
import { ContentComponent } from './components/content/content.component';
import { EmailComponent } from './components/email/email.component';

@NgModule({
  declarations: [CwpFlowComponent, NavigationButtonsComponent, SalutationAndNameComponent, EmailComponent, ContentComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [CwpFlowComponent, NavigationButtonsComponent],
})
export class CwpFlowModule {}
