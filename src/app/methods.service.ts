import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethodsService {
  musicArray: any = [];
  duration!: number;
  songTime!: string;
  constructor() {}

  addMusic(music: any) {
    this.musicArray.push(music);
    return this.musicArray;
  }
  deleteMusic(music: any) {
    this.musicArray = this.musicArray.filter((e: any) => music !== e);
  }

  async playAudio(music: string) {
    const audio = new Audio(music);
    const promise = (): Promise<number> => {
      return new Promise((resolve) => {
        audio.addEventListener('loadedmetadata', () => {
          resolve(audio.duration);
        });
      });
    };
    this.duration = await promise();
    this.songTime = `${Math.floor(this.duration / 60)}:${Math.floor(
      this.duration % 60
    )}`;
    audio.play();
    return this.duration;
  }
}
