import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'twinkle-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output()
  public newValue = new EventEmitter<number>();

  public originalValue: number = 5;
  public options: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };

  public changeValue(changeContext: number): void {
    this.newValue.emit(changeContext);
  }
}
