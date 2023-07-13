import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethodsService {
  musicArray: any = [];
  duration!: number;
  songTime!: string;
  currentSongTime!: string;
  audio: any;
  constructor() {}

  addMusic(music: any) {
    this.musicArray.push(music);
    return this.musicArray;
  }
  deleteMusic(music: any) {
    this.musicArray = this.musicArray.filter((e: any) => music !== e);
  }

  async playAudio(music: string) {
    this.audio = new Audio(music);
    this.currentSongTime = this.audio.currentTime;
    const promise = (): Promise<number> => {
      return new Promise((resolve) => {
        this.audio.addEventListener('loadedmetadata', () => {
          resolve(this.audio.duration);
        });
      });
    };
    this.duration = await promise();
    this.songTime = `${Math.floor(this.duration / 60)}:${String(
      Math.floor(this.duration % 60)
    ).padStart(2, '0')}`;
      // this.audio.play();

    // return this.duration, this.currentSongTime;
  }
  throwTrack() {
    this.audio.play();
  }
  pauseAudio() {
    this.audio.pause();
  }
  stopAudio() {
    this.audio.pause();
    this.audio.load()
  }
}
