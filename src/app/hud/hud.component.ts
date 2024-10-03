import { Component, OnInit } from '@angular/core';
import { Audio, AudioType } from 'ts-audio';
import { AudioService } from '../services/audio.service';
import { TimeService } from '../services/time.service';
import { Subscription, interval } from 'rxjs';
import { TimeModel } from '../models/time.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hud',
  standalone: true,
  templateUrl: './hud.component.html',
  styleUrl: './hud.component.scss',
  imports: [CommonModule]
})
export class HudComponent implements OnInit {
  
  $currentTime?: Subscription;
  currentTime?: any;

  constructor(
    private _audioService: AudioService,
    private _timeService: TimeService
  ){}

  ngOnInit(): void {
      this.$currentTime = interval(1000).subscribe(() => {
      this.currentTime = new Date(
        this._timeService.getCurrentTime().year, 
        this._timeService.getCurrentTime().month - 1, 
        this._timeService.getCurrentTime().day, 
        this._timeService.getCurrentTime().hour, 
        this._timeService.getCurrentTime().minute, 
        this._timeService.getCurrentTime().second
      );
    });
  }

  ngOnDestroy(): void {
    if (this.$currentTime) {
      this.$currentTime.unsubscribe();
    }
  }

  isPlaying: boolean = false;
  hasNoise: boolean = false;
  
  cricketsAudio = Audio({
    file: "assets/audio/crickets.mp3",
  });

  whiteNoiseAudio = Audio({
    file: 'assets/audio/whitenoise.mp3', 
    loop: true,
  });

  frog1Audio = Audio({
    file: 'assets/audio/frog1.mp3', 
  });

  frog2Audio = Audio({
    file: 'assets/audio/frog2.mp3', 
  });

  frog3Audio = Audio({
    file: 'assets/audio/frog3.mp3', 
  });

  bgm1Audio = Audio({
    file: 'assets/audio/birds__bg--morning-1.mp3', 
  });

  bgm2Audio = Audio({
    file: 'assets/audio/birds__bg--morning-2.mp3', 
  });

  bgm3Audio = Audio({
    file: 'assets/audio/birds__bg--morning-3.mp3', 
  });

  bgm4Audio = Audio({
    file: 'assets/audio/birds__bg--morning-4.mp3', 
  });

  bgm5Audio = Audio({
    file: 'assets/audio/birds__bg--morning-5.mp3', 
  });

  mdm1Audio = Audio({
    file: 'assets/audio/birds__md--morning-1.mp3', 
  });

  mdm2Audio = Audio({
    file: 'assets/audio/birds__md--morning-2.mp3', 
  });

  mdm3Audio = Audio({
    file: 'assets/audio/birds__md--morning-3.mp3', 
  });

  mdm4Audio = Audio({
    file: 'assets/audio/birds__md--morning-4.mp3', 
  });


  start() {
    this.isPlaying = true;
    //this.playCrickets();
    if(!this.hasNoise) {
      this.playWhiteNoise();
    }
    this.playMorningBirds();
    //this.playFrogs();
  }

  stop() {
    this.isPlaying = false;
    this._audioService.stop('birds__bg--morning-1', this.bgm1Audio);
    this._audioService.stop('birds__bg--morning-2', this.bgm2Audio);
    this._audioService.stop('birds__bg--morning-3', this.bgm3Audio);
    this._audioService.stop('birds__bg--morning-4', this.bgm4Audio);
    this._audioService.stop('birds__bg--morning-5', this.bgm5Audio);
    this._audioService.stop('birds__md--morning-1', this.mdm1Audio);
    this._audioService.stop('birds__md--morning-2', this.mdm2Audio);
    this._audioService.stop('birds__md--morning-3', this.mdm3Audio);
    this._audioService.stop('birds__md--morning-4', this.mdm4Audio);

  }
  
  playCrickets() { 
    this._audioService.play('crickets', this.cricketsAudio, true, 1, 10, 0, 30);
  }

  playWhiteNoise() {
    this._audioService.play('whitenoise', this.whiteNoiseAudio, true, 0, 0, 0, 0, false);
  }

  playFrogs() {
    this._audioService.play('frog1', this.frog1Audio, true, 1, 25, 0, 30);
    this._audioService.play('frog2', this.frog2Audio, true, 1, 10, 0, 30);
    this._audioService.play('frog3', this.frog3Audio, true, 1, 15, 0, 30);
  }

  playMorningBirds() {
    this._audioService.play('birds__bg--morning-1', this.bgm1Audio, true, 1, 1, 0, 40);
    this._audioService.play('birds__bg--morning-2', this.bgm2Audio, true, 1, 1, 0, 40);
    this._audioService.play('birds__bg--morning-3', this.bgm3Audio, true, 1, 1, 0, 40);
    this._audioService.play('birds__bg--morning-4', this.bgm4Audio, true, 1, 1, 0, 40);
    this._audioService.play('birds__bg--morning-5', this.bgm5Audio, true, 1, 1, 0, 40);
    this._audioService.play('birds__md--morning-1', this.mdm1Audio, true, 1, 1, 0, 40);
    this._audioService.play('birds__md--morning-2', this.mdm2Audio, true, 1, 1, 0, 40);
    this._audioService.play('birds__md--morning-3', this.mdm3Audio, true, 1, 1, 0, 40);
    this._audioService.play('birds__md--morning-4', this.mdm4Audio, true, 1, 1, 0, 40);
  }
}
