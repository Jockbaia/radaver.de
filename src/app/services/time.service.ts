import { Injectable } from '@angular/core';
import { TimeModel } from '../models/time.model';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  getCurrentTime(): TimeModel {
    const now = new Date();
    return {
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear()
    };
  }
}
