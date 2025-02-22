import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INew } from '../../interfaces/inew.interface';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
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

  getData() {
    this.sendNew.emit(this.dataForm);
    this.resetForm();
  }

  resetForm() {
    this.dataForm = {
      title: '',
      image: '',
      body: '',
      date: new Date(),
    };
  }
}
