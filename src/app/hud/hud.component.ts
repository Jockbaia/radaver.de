import { Component } from '@angular/core';
import { Gapless5 } from '@regosen/gapless-5';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-hud',
  standalone: true,
  imports: [],
  templateUrl: './hud.component.html',
  styleUrl: './hud.component.scss'
})
export class HudComponent {

  constructor(private _audioService: AudioService){}

  isPlaying: boolean = false;
  crickets: boolean = true;
  
  cricketsAudio = new Gapless5({
    tracks: ['assets/audio/crickets.wav'],
  });

  whiteNoiseAudio = new Gapless5({
    tracks: ['assets/audio/whitenoise.wav'], 
    loop: true,
  });

  start() {
    this.isPlaying = true;
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
