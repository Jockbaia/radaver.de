import { Component } from '@angular/core';
import { ClockComponent } from "./clock/clock.component";
import { CommandsComponent } from './commands/commands.component';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [ClockComponent, CommandsComponent],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.scss'
})
export class DebugComponent {

}
