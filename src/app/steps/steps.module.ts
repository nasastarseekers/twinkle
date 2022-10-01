import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsRoutingModule } from './steps-routing.module';
import { StepsComponent } from './steps.component';
import { ComponentsModule } from '../components/components.module';
import { FirstStepComponent } from './first-step/first-step.component';


@NgModule({
  declarations: [StepsComponent, FirstStepComponent],
  imports: [
    CommonModule,
    StepsRoutingModule,
    ComponentsModule
  ]
})
export class StepsModule { }
