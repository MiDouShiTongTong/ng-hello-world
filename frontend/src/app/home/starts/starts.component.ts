import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.scss']
})
export class StartsComponent implements OnInit, OnChanges {
  @Input()
  rating: number;

  @Input()
  readOnly: boolean;

  @Output()
  changeRatingValue: EventEmitter<number> = new EventEmitter<number>();

  startList: boolean[];

  constructor() {
    this.rating = 0;
    this.readOnly = true;
    this.startList = [];
  }

  ngOnInit() {
    this.startList = [];
    Array.from(Array(5)).forEach((num, index) => {
      this.startList.push(this.rating >= index + 1);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 父组件提交了评论, 重新渲染组件
    this.ngOnInit();
  }

  handlerClick(rating: number) {
    if (!this.readOnly) {
      this.rating = rating;
      this.ngOnInit();
      this.changeRatingValue.emit(rating);
    }
  }
}
