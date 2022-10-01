import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';

import { StepsComponent } from './steps.component';

const routes: Routes = [
  { path: '', component: StepsComponent },
  { path: 'first-step', component: FirstStepComponent },
  { path: 'second-step', component: SecondStepComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepsRoutingModule {}
