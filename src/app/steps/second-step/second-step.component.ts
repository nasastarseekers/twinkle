import { Component } from '@angular/core';

@Component({
  selector: 'twinkle-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent {
  public colours = {
    1: '#005eff',
    2: '#36b5ff',
    3: '#a6f6ff',
    4: '#c4f5e3',
    5: '#edf5c4',
    6: '#f5edc4',
    7: '#f5e4c4',
    8: '#ff9d69',
    9: '#db442a',
    10: '#c70d00',
  }

  public setNewValue($event: number): void {
    const star = document.getElementById("star");
    star.style.fill = this.colours[$event];
  }
}
