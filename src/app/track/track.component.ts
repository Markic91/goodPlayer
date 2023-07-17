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
  @Output() seePlayer = new EventEmitter<boolean>();
  @Output() downloadAudio = new EventEmitter<boolean>();
  showPlayer: boolean = false;
  constructor(protected ms: MethodsService) {}

  playTrack(index : number) {
    this.showPlayer = true;
    this.playAudio.emit(this.ms.musicArray[index].url);
    this.seePlayer.emit(this.showPlayer);
  }
  download(index :number) {
    this.downloadAudio.emit(this.ms.musicArray[index].url);
  }
  deleteTrack(index: number) {
    this.deleteMusic.emit(this.ms.musicArray[index]);
  }
}
