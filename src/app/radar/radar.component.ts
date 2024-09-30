import { Component } from '@angular/core';
import { Gapless5 } from '@regosen/gapless-5';
import { AudioService } from '../services/audio.service';
import { RandomService } from '../services/random.service';

@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [],
  templateUrl: './radar.component.html',
  styleUrl: './radar.component.scss'
})
export class RadarComponent {

  constructor(private _audioService: AudioService, private _randomService: RandomService){}

  crickets: boolean = true;
  
  cricketsAudio = new Gapless5({
    tracks: ['assets/audio/crickets.wav'],
  });

  whiteNoiseAudio = new Gapless5({
    tracks: ['assets/audio/whitenoise.wav'], 
    loop: true,
  });

  start() {
    this.playCrickets();
    this.playWhiteNoise();
  }

  stop() {
    this.cricketsAudio.onfinishedtrack = () => {this.cricketsAudio.stop()};
  }
  
  playCrickets() { 
    this._audioService.playRepeatWaitIf(this.cricketsAudio, this.crickets, 2, 8, 3, 30);
  }

  playWhiteNoise() {
    this._audioService.play(this.whiteNoiseAudio);
  }

}
