import { Component} from '@angular/core';
import { Audio } from 'ts-audio';
import { AudioService } from '../services/audio.service';
import { DebugComponent } from "./debug/debug.component";
import { MaestroService } from '../services/maestro.service';

@Component({
  selector: 'app-hud',
  standalone: true,
  templateUrl: './hud.component.html',
  styleUrl: './hud.component.scss',
  imports: [DebugComponent]
})
export class HudComponent {
debugMode: boolean = false;
  
  constructor(
    private _audioService: AudioService,
    private _maestroService: MaestroService
  ){}

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
    this._audioService.play({
      name: 'crickets',
      audio: this.cricketsAudio,
      restart: true,
      minRepetitions: 1,
      maxRepetitions: 10,
      minDelay: 0,
      maxDelay: 30
    });
  }
  
  playWhiteNoise() {
    this._audioService.play({
      name: 'whitenoise',
      audio: this.whiteNoiseAudio,
      restart: true,
      minRepetitions: 0,
      maxRepetitions: 0,
      minDelay: 0,
      maxDelay: 0,
      hasDelayOnStart: false
    });
  }
  
  playFrogs() {
    this._audioService.play({
      name: 'frog1',
      audio: this.frog1Audio,
      restart: true,
      minRepetitions: 1,
      maxRepetitions: 25,
      minDelay: 0,
      maxDelay: 30
    });
  
    this._audioService.play({
      name: 'frog2',
      audio: this.frog2Audio,
      restart: true,
      minRepetitions: 1,
      maxRepetitions: 10,
      minDelay: 0,
      maxDelay: 30
    });
  
    this._audioService.play({
      name: 'frog3',
      audio: this.frog3Audio,
      restart: true,
      minRepetitions: 1,
      maxRepetitions: 15,
      minDelay: 0,
      maxDelay: 30
    });
  }
  
  playMorningBirds() {
    const birdAudios = [
      { name: 'birds__bg--morning-1', audio: this.bgm1Audio },
      { name: 'birds__bg--morning-2', audio: this.bgm2Audio },
      { name: 'birds__bg--morning-3', audio: this.bgm3Audio },
      { name: 'birds__bg--morning-4', audio: this.bgm4Audio },
      { name: 'birds__bg--morning-5', audio: this.bgm5Audio },
      { name: 'birds__md--morning-1', audio: this.mdm1Audio },
      { name: 'birds__md--morning-2', audio: this.mdm2Audio },
      { name: 'birds__md--morning-3', audio: this.mdm3Audio },
      { name: 'birds__md--morning-4', audio: this.mdm4Audio }
    ];
  
    birdAudios.forEach(({ name, audio }) => {
      this._audioService.play({
        name,
        audio,
        restart: true,
        minRepetitions: 1,
        maxRepetitions: 1,
        hasDelayOnStart: true,
        minDelay: 0,
        maxDelay: 40
      });
    });
  }
}
