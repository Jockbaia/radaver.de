import { AudioType } from "ts-audio";

export interface AudioOptions {
    name: string;
    audio: AudioType;
    restart?: boolean;
    minRepetitions?: number;
    maxRepetitions?: number;
    minDelay?: number;
    maxDelay?: number;
    hasDelayOnStart?: boolean;
    curRepetitions?: number;
  }