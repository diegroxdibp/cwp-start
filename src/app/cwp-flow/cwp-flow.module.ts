import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CwpFlowComponent } from './pages/cwp-flow/cwp-flow.component';
import { NavigationButtonsComponent } from './components/navigation-buttons/navigation-buttons.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CwpFlowComponent, NavigationButtonsComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [CwpFlowComponent, NavigationButtonsComponent],
})
export class CwpFlowModule {}
