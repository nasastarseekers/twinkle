import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';
import { ComponentsModule } from '../components/components.module';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';

@NgModule({
  declarations: [StepsComponent, FirstStepComponent, SecondStepComponent],
  imports: [
    CommonModule,
    StepsRoutingModule,
    ComponentsModule,
  ]
})
export class StepsModule { }
