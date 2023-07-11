import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethodsService {
  musicArray: string[] = [];
  constructor() {}

  addMusic(music: any): string[] {
    this.musicArray.push(music);
    return this.musicArray;
  }
}
