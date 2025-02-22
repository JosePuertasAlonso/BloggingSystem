import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { INew } from '../../interfaces/inew.interface';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() sendNew: EventEmitter<INew> = new EventEmitter();

  dataForm: INew = {
    title: '',
    image: '',
    body: '',
    date: new Date(),
  };

  newForm: FormGroup;

  constructor() {
    this.newForm = new FormGroup(
      {
        title: new FormControl('', [Validators.required]),
        image: new FormControl('', [Validators.required]),
        body: new FormControl('', [Validators.required]),
        date: new FormControl(null, [
          Validators.required,
          this.dateLessThanTodayValidator,
        ]),
      },
      []
    );
  }
  getData() {
    this.sendNew.emit(this.newForm.value);
    this.newForm.reset();
  }

  checkControl(controlName: string, errorName: string) {
    return (
      this.newForm.get(controlName)?.hasError(errorName) &&
      this.newForm.get(controlName)?.touched
    );
  }

  /*
   * Comprueba que la fecha de publicación no sea posterior al día actual
   */
  dateLessThanTodayValidator(controlName: AbstractControl): any {
    if (!controlName.value) {
      return null;
    }
    const inputDate = new Date(controlName.value);
    const today = new Date();

    if (inputDate >= today) {
      return {
        dateLessThanTodayValidator: 'La fecha debe de ser anterior a hoy.',
      };
    }
    return null;
  }
}
