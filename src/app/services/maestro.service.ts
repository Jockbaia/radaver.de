import { Injectable } from '@angular/core';
import { TimeService } from './time.service';
import { Subscription, interval } from 'rxjs';
import { ChurchService } from './sounds/church.service';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {
  
  public $currentTime?: Subscription;
  public currentTime?: any;

  constructor(
    public _timeService: TimeService, 
    public _churchService: ChurchService
  ) {
    this.$currentTime = interval(1000).subscribe(() => {
      this.currentTime = this._timeService.getTime();
      if(this.currentTime?.minute === 0 && this.currentTime?.second === 0) {
        this.everyHour(this.currentTime.hour);
      }
    });
}


  everyHour(h: number){
    this._churchService.hourlyBell(h);
  }
}
