import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() addMusic = new EventEmitter<string | null>();
 
  constructor(private readonly formBuilder: FormBuilder) {}

  formPlayer = this.formBuilder.group({
    add: ['file', Validators.required],
    select: [''],
  });

  addTrack() {
    this.addMusic.emit(this.formPlayer.controls['select'].value);
    this.formPlayer.reset({add: 'file'});
  }
}
