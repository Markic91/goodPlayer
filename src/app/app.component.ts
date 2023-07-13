import { Component } from '@angular/core';
import { MethodsService } from './methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPlayer!: boolean;
  constructor(protected ms: MethodsService) {}
  addMusicFromService(music: any) {
    this.ms.musicArray = this.ms.addMusic(music);
  }
  deleteMusicInService(music: string) {
    this.ms.deleteMusic(music);
  }
  playAudioFromService(music: string) {
    this.ms.playAudio(music);
  }
  seePlayer(event: boolean) {
    this.showPlayer = event;
  }
}
