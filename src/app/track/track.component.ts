import { Component } from '@angular/core';
import { MethodsService } from '../methods.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
constructor(protected ms : MethodsService){}
musicArray : string[] = []


}
