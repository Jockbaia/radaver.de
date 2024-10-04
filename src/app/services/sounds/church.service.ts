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

  bell1 = Audio({
    file: 'assets/audio/church/bell.mp3',
    volume: 0.6
  });
  bell2 = Audio({
    file: 'assets/audio/church/bell.mp3',
    volume: 0.6
  });
  bell3 = Audio({
    file: 'assets/audio/church/bell.mp3',
    volume: 0.6
  });
  
  hourlyBell(counter: number) {
    let time: TimeModel = this._timeService.getTime();
    if(counter > 13) counter = counter - 12;
    if(time.hour >= 7 && time.hour <=22){
      let i = 0;
      const nextBell = () => {
        if (counter > 0) {
          if (i === 0) {
            this.bell1.play();
            this.bell2.stop();
            this._audioService.play({
              name: 'bell--1',
              audio: this.bell1,
            });
          } else if (i === 1) {
            this.bell2.play();
            this.bell3.stop();
            this._audioService.play({
              name: 'bell--2',
              audio: this.bell2,
            });
          } else {
            this.bell3.play();
            this.bell1.stop();
            this._audioService.play({
              name: 'bell--3',
              audio: this.bell3,
            });
          }
          i = (i + 1) % 3;
          counter--;
          setTimeout(nextBell, 3000);
        }
      };
      nextBell();
    }
  }
}
