import { Injectable } from '@angular/core';
import { Audio } from 'ts-audio';
import { AudioService } from '../audio.service';
import { TimeService } from '../time.service';
import { TimeModel } from '../../models/time.model';

@Injectable({
  providedIn: 'root'
})
export class ChurchService {

  constructor(public _audioService: AudioService, public _timeService: TimeService) { }

  // ChurchBellKonstanz.wav by edsward -- https://freesound.org/s/341866/ -- License: Creative Commons 0

  hourlyBell(counter: number) {
    const time: TimeModel = this._timeService.getTime();
    if(counter > 13) counter = counter - 12;
    if(time.hour >= 7 && time.hour <=22){
      const bell = Audio({
        file: `assets/audio/church/bells--${counter}.mp3`,
        volume: 0.6
      });
      this._audioService.play({
        name: `bell--${counter}`,
        audio: bell,
      });
    }
  }
}
