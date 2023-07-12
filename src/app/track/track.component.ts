import { Component, EventEmitter, Output } from '@angular/core';
import { MethodsService } from '../methods.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css'],
})
export class TrackComponent {
  @Output() deleteMusic = new EventEmitter<string>();
  @Output() playAudio = new EventEmitter<string>();
  constructor(protected ms: MethodsService) {}

  playTrack(index : number) {
    this.playAudio.emit(this.ms.musicArray[index].url);
  }
  download() {}
  deleteTrack(index: number) {
    this.deleteMusic.emit(this.ms.musicArray[index]);
  }
}
