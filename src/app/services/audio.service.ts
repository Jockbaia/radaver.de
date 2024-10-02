import { Injectable } from '@angular/core';
import { RandomService } from './random.service';
import { AudioType } from 'ts-audio';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private _randomService: RandomService) { }

  play(
    name: string,
    audio: AudioType,
    restart: boolean = false,
    minRepetitions: number = 5,
    maxRepetitions: number = 10,
    minDelay: number = 3,
    maxDelay: number = 10,
    hasDelayOnStart: boolean = true,
    curRepetitions?: number
  ) {
    curRepetitions = curRepetitions ?? this._randomService.randomBetween(minRepetitions, maxRepetitions);
  
    if (hasDelayOnStart) {
      const waitTime = this._randomService.randomBetween(minDelay / 5, maxDelay / 5) * 1000; 
      this.logWait(name, audio, waitTime);
      setTimeout(() => {
        audio.play();
        this.logAudio(name, audio, curRepetitions);
      }, waitTime);
    } else {
      audio.play();
      this.logAudio(name, audio, curRepetitions);
    }
  
    audio.on("end", () => {
      if (curRepetitions === 0 && !restart) {
        return;
      } 
      const waitTime = curRepetitions !== 0 ? 0 : this._randomService.randomBetween(minDelay, maxDelay) * 1000;
      if (curRepetitions === 0) this.logWait(name, audio, waitTime);
      setTimeout(() => {
        this.play(name, audio, restart, minRepetitions, maxRepetitions, minDelay, maxDelay, hasDelayOnStart = false, curRepetitions === 0 ? undefined : curRepetitions - 1);
      }, waitTime);
    });
  }

  stop(name: string, audio: AudioType) {
    audio.on("end", () => {
      this.logStop(name, audio);
      audio.stop();
    });
  }

  logAudio(name: string, audio: AudioType, repetitions = 1) {
    console.log(`[${this.formatTime()}] ▶️ ${name} | 🔂 ${repetitions} | 🔁 ${audio.loop}`);
  }

  logWait(name: string, audio: AudioType, delay: any) {
    console.log(`[${this.formatTime()}] ▶️ ${name} | ⏳ ${delay/1000}s`);
  }

  logStop(name: string, audio: AudioType) {
    console.log(`[${this.formatTime()}] ✋ ${name}`);
  }

  formatTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
