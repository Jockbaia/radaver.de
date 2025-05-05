import { Component } from '@angular/core';
import { ChurchService } from '../../../services/sounds/church.service';
import { TimeService } from '../../../services/time.service';

@Component({
  selector: 'app-commands',
  standalone: true,
  imports: [],
  templateUrl: './commands.component.html',
  styleUrl: './commands.component.scss'
})
export class CommandsComponent {
  constructor(
    public _churchService: ChurchService,
    public _timeService: TimeService
  ) {}

  hourlyBell() {
    this._churchService.hourlyBell(this._timeService.getTime().hour);
  }

}
