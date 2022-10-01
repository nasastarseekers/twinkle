import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { HeaderComponent } from './header/header.component';
import { StepTitleComponent } from './step-title/step-title.component';
import { ButtonLinkComponent } from './button-link/button-link.component';

@NgModule({
  declarations: [
    DarkModeToggleComponent,
    HeaderComponent,
    StepTitleComponent,
    ButtonLinkComponent,
  ],
  imports: [CommonModule],
  exports: [
    DarkModeToggleComponent,
    HeaderComponent,
    StepTitleComponent,
    ButtonLinkComponent,
  ],
})
export class ComponentsModule {}
