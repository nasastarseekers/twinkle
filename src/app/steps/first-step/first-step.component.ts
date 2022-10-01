import { Component } from '@angular/core';

@Component({
  selector: 'twinkle-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent {
  public setNewValue($event: number): void {
    const circle = document.getElementById("circle");
    circle.style.opacity = ($event / 10).toString();
  }
}
