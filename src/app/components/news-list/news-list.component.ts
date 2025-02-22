import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';

@Component({
  selector: 'app-news-list',
  imports: [],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css',
})
export class NewsListComponent {
  @Input() newsList: INew[] = [];
  @Output() newEmitter: EventEmitter<INew> = new EventEmitter();

  activeIndex: number = -1;
  setActiveIndex(index: number) {
    this.activeIndex = index;
    this.emitNew(index);
  }

  emitNew(index: number) {
    this.newEmitter.emit(this.newsList[index]);
  }
}
