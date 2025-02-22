import { Component, Input, inject } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-main',
  imports: [],
  providers: [DatePipe],
  templateUrl: './new-main.component.html',
  styleUrl: './new-main.component.css',
})
export class NewMainComponent {
  @Input() selectedNew: INew | null = null;
  private datePipe = inject(DatePipe);

  get formattedDate(): string {
    return this.selectedNew
      ? this.datePipe.transform(this.selectedNew.date, 'longDate') ?? ''
      : '';
  }
}
