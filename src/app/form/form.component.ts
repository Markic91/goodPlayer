import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() addMusic = new EventEmitter<string | null>();
  blobItem: any;
  objectToPush: any;

  constructor(private readonly formBuilder: FormBuilder) {}

  formPlayer = this.formBuilder.group({
    add: ['file', Validators.required],
    select: [''],
  });

  addTrack() {
    if (this.formPlayer.controls.add.value === 'url') {
      this.objectToPush = {
        musicName: this.formPlayer.controls['select'].value,
        url: this.formPlayer.controls['select'].value,
      };
    } else {
      this.objectToPush = {
        musicName: this.blobItem.musicName,
        url: this.blobItem.blobUrl,
      };
    }
    this.addMusic.emit(this.objectToPush)
    this.formPlayer.reset({ add: 'file' });
  }

  inputChange(event: any) {
    this.blobItem = {
      blobUrl: URL.createObjectURL(event.target.files[0]),
      musicName: event.target.files[0].name,
    };
    console.log(event.target.files[0]);
    
  }
}
