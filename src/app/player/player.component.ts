import { Component, EventEmitter, Output } from '@angular/core';
import { MethodsService } from '../methods.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Output() throwTrack = new EventEmitter<string>();
  @Output() pauseAudio = new EventEmitter<string>();
  @Output() stopAudio = new EventEmitter<string>();
  constructor(protected ms: MethodsService){}
  playTrack() {
    this.throwTrack.emit(this.ms.musicArray.url);
  }
 pauseTrack() {
  this.pauseAudio.emit(this.ms.musicArray.url);
 }
 stopTrack() {
  this.stopAudio.emit(this.ms.musicArray.url);
 }
}
