import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MethodsService } from '../methods.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(
    private readonly formBuilder: FormBuilder,
    protected ms: MethodsService
  ) {}
  formPlayer = this.formBuilder.group({
    add: ['file', Validators.required],
    select: [''],
  });

  addMusicFromService(music: any) {
    this.ms.musicArray = this.ms.addMusic(music);
    console.log(this.ms.musicArray);
  }
}
