import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { CfgLogoComponent } from './components/cfg-logo/cfg-logo.component';
import { IntroImageComponent } from './components/intro-image/intro-image.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    SkeletonComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ArrowComponent,
    CfgLogoComponent,
    IntroImageComponent,
    ProgressBarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, ArrowComponent, IntroImageComponent, ArrowComponent, ProgressBarComponent],
})
export class SharedModule {}
