import { Injectable } from '@angular/core';
import { TimeModel } from '../models/time.model';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private baseTime: Date;
  private startTime: Date; 
  private timeOffset: number = 0; 

  constructor() {
    this.baseTime = new Date(); 
    this.startTime = new Date();
  }

  setCustomTime(timeModel: TimeModel): void {
    this.baseTime = new Date(timeModel.year, timeModel.month - 1, timeModel.day, timeModel.hour, timeModel.minute, timeModel.second);
    this.startTime = new Date();
  }

  getTime(): TimeModel {
    const now = new Date();
    const diff = now.getTime() - this.startTime.getTime(); 
    const currentTime = new Date(this.baseTime.getTime() + diff + this.timeOffset); 

    return {
      hour: currentTime.getHours(),
      minute: currentTime.getMinutes(),
      second: currentTime.getSeconds(),
      day: currentTime.getDate(),
      month: currentTime.getMonth() + 1,
      year: currentTime.getFullYear(),
    };
  }

  resetTimeToSystem(): void {
    this.baseTime = new Date();
    this.startTime = new Date();
    this.timeOffset = 0;
  }

  isValidTimeModel(timeModel: TimeModel): boolean {
    const { day, month, year, hour, minute, second } = timeModel;
      if (
      year > 0 &&
      month >= 1 && month <= 12 &&
      day >= 1 && day <= this.daysInMonth(month, year) &&
      hour >= 0 && hour < 24 &&
      minute >= 0 && minute < 60 &&
      second >= 0 && second < 60
    ) {
      return true;
    }
    return false;
  }

  daysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }
  
}
