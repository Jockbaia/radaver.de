import { Component } from '@angular/core';
import { ClockComponent } from "./clock/clock.component";

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [ClockComponent],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.scss'
})
export class DebugComponent {

}
