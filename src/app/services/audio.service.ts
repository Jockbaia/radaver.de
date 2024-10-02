import { Injectable } from '@angular/core';
import { RandomService } from './random.service';
import { AudioType } from 'ts-audio';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private _randomService: RandomService) { }


  play(audio: AudioType) {
    audio.play();
    this.logAudio(audio, 1);
  }

  stop(audio: AudioType) {
    audio.stop();
  }

  playRepeatWaitIf(audio: AudioType, keepPlaying: boolean, minR: number = 5, maxR: number = 10, minW: number = 3, maxW: number = 10) { 
    let playAgain = () => {
      if (!keepPlaying) {
        return; 
      }
  
      this.playAndRepeat(audio, this._randomService.randomBetween(minR, maxR));
  
      audio.on("end", () => {
        let delay = this._randomService.randomBetween(minW * 1000, maxW * 1000);
        this.logWait(audio, delay/1000);
        setTimeout(playAgain, delay);
      });

     // audio.onstop = () => {
     //   this.logStop(audio);
    //  }
    };
    playAgain();
  }

  playAndRepeat(audio: AudioType, repetitions: number) {
    //let repeatedTrack = audio.getTrack();
    //for (let i = 0; i < repetitions - 1; i++) {
    //  audio.addTrack(repeatedTrack);
   // }
    audio.play();
    this.logAudio(audio, repetitions);
  }

  logAudio(audio: AudioType, repetitions = 1) {

    console.log(`[${this.formatTime()}] ▶️ ${audio} | 🔂 ${repetitions} | 🔁 ${audio.loop}`);
  }

  logWait(audio: AudioType, delay: any) {
    console.log(`[${this.formatTime()}] ▶️ ${audio} | ⏳ ${delay}`);
  }

  logStop(audio: AudioType) {
    console.log(`[${this.formatTime()}] ✋ ${audio}`);
  }

  formatTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
