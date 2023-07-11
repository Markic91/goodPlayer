import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethodsService {
  musicArray: string[] = []
  music! :string;
  constructor() {}

  addMusic(music: any): string[] {
    this.musicArray.push(music);
    return this.musicArray;
  }
  deleteMusic(music: string) {
    this.musicArray = this.musicArray.filter((e) => music !== e)
  }
}
