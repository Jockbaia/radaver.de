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
  frogs: boolean = true;
  birds: boolean = true;
  
  cricketsAudio = new Gapless5({
    tracks: ['assets/audio/crickets.wav'],
  });

  whiteNoiseAudio = new Gapless5({
    tracks: ['assets/audio/whitenoise.wav'], 
    loop: true,
  });

  frog1Audio = new Gapless5({
    tracks: ['assets/audio/frog1.wav'], 
  });

  frog2Audio = new Gapless5({
    tracks: ['assets/audio/frog2.wav'], 
  });

  frog3Audio = new Gapless5({
    tracks: ['assets/audio/frog3.wav'], 
  });

  bgm1Audio = new Gapless5({
    tracks: ['assets/audio/birds__bg--morning-1.wav'], 
  });

  bgm2Audio = new Gapless5({
    tracks: ['assets/audio/birds__bg--morning-2.wav'], 
  });

  bgm3Audio = new Gapless5({
    tracks: ['assets/audio/birds__bg--morning-3.wav'], 
  });

  bgm4Audio = new Gapless5({
    tracks: ['assets/audio/birds__bg--morning-4.wav'], 
  });

  bgm5Audio = new Gapless5({
    tracks: ['assets/audio/birds__bg--morning-5.wav'], 
  });

  mdm1Audio = new Gapless5({
    tracks: ['assets/audio/birds__md--morning-1.wav'], 
  });

  mdm2Audio = new Gapless5({
    tracks: ['assets/audio/birds__md--morning-2.wav'], 
  });

  mdm3Audio = new Gapless5({
    tracks: ['assets/audio/birds__md--morning-3.wav'], 
  });

  mdm4Audio = new Gapless5({
    tracks: ['assets/audio/birds__md--morning-4.wav'], 
  });


  start() {
    this.isPlaying = true;
    // this.playCrickets();
    this.playWhiteNoise();
    this.playMorningBirds();
    // this.playFrogs();
  }

  stop() {
    this.cricketsAudio.onfinishedtrack = () => {this.cricketsAudio.stop()};
  }
  
  playCrickets() { 
    const cricketDelay = Math.random() * 20000;
    setTimeout(() => {
      this._audioService.playRepeatWaitIf(this.cricketsAudio, this.crickets, 1, 2, 10, 30);
    }, cricketDelay);
  }

  playWhiteNoise() {
    this._audioService.play(this.whiteNoiseAudio);
  }

  playFrogs() {
  const frog1Delay = Math.random() * 20000;
  const frog2Delay = Math.random() * 20000;
  const frog3Delay = Math.random() * 20000;

    setTimeout(() => {
      this._audioService.playRepeatWaitIf(this.frog1Audio, this.frogs, 1, 25, 0, 30);
    }, frog1Delay);

    setTimeout(() => {
      this._audioService.playRepeatWaitIf(this.frog2Audio, this.frogs, 1, 10, 0, 30);
    }, frog2Delay);

    setTimeout(() => {
      this._audioService.playRepeatWaitIf(this.frog3Audio, this.frogs, 1, 15, 0, 30);
    }, frog3Delay);
  }

  playMorningBirds() {
    const bgm1Delay = Math.random() * 20000;
    const bgm2Delay = Math.random() * 20000;
    const bgm3Delay = Math.random() * 20000;
    const bgm4Delay = Math.random() * 20000;
    const bgm5Delay = Math.random() * 20000;
    const mdm1Delay = Math.random() * 20000;
    const mdm2Delay = Math.random() * 20000;
    const mdm3Delay = Math.random() * 20000;
    const mdm4Delay = Math.random() * 20000;
    const mdm5Delay = Math.random() * 20000;
  
      setTimeout(() => {
        this._audioService.playRepeatWaitIf(this.bgm1Audio, this.birds, 1, 1, 0, 40);
      }, bgm1Delay);
  
      setTimeout(() => {
        this._audioService.playRepeatWaitIf(this.bgm2Audio, this.birds, 1, 1, 0, 40);
      }, bgm2Delay);
  
      setTimeout(() => {
        this._audioService.playRepeatWaitIf(this.bgm3Audio, this.birds, 1, 1, 0, 40);
      }, bgm3Delay);

      setTimeout(() => {
        this._audioService.playRepeatWaitIf(this.bgm4Audio, this.birds, 1, 1, 0, 40);
      }, bgm4Delay);
  
      setTimeout(() => {
        this._audioService.playRepeatWaitIf(this.bgm5Audio, this.birds, 1, 1, 0, 40);
      }, bgm5Delay);
  
      setTimeout(() => {
        this._audioService.playRepeatWaitIf(this.mdm1Audio, this.birds, 1, 1, 0, 40);
      }, mdm1Delay);

      setTimeout(() => {
        this._audioService.playRepeatWaitIf(this.mdm2Audio, this.birds, 1, 1, 0, 40);
      }, mdm2Delay);
  
      setTimeout(() => {
        this._audioService.playRepeatWaitIf(this.mdm3Audio, this.birds, 1, 1, 0, 40);
      }, mdm3Delay);

      setTimeout(() => {
        this._audioService.playRepeatWaitIf(this.mdm4Audio, this.birds, 1, 1, 0, 40);
      }, mdm4Delay);
    }

}
