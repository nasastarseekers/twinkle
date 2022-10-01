import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { HeaderComponent } from './header/header.component';
import { StepTitleComponent } from './step-title/step-title.component';
import { ButtonLinkComponent } from './button-link/button-link.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    DarkModeToggleComponent,
    HeaderComponent,
    StepTitleComponent,
    ButtonLinkComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, NgxSliderModule],
  exports: [
    DarkModeToggleComponent,
    HeaderComponent,
    StepTitleComponent,
    ButtonLinkComponent,
    SidebarComponent,
  ],
})
export class ComponentsModule {}
