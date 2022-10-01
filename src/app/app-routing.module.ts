import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'steps',
    pathMatch: 'full',
  },
  {
    path: 'steps',
    loadChildren: () =>
      import('./steps/steps.module').then((m) => m.StepsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
