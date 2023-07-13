import { Component, EventEmitter, Output } from '@angular/core';
import { MethodsService } from '../methods.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Output() playAudio = new EventEmitter<string>();
  constructor(private ms: MethodsService){}
  playTrack(index : number) {
    this.playAudio.emit(this.ms.musicArray[index].url);
  }
}
