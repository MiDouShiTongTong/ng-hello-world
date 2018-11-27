import { Component, OnInit, OnChanges, Input, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements
  OnInit,
  OnChanges,
  DoCheck {
  @Input()
  greeting: string;

  @Input()
  user: { name: string };

  oldUsername: string;

  message: string;

  constructor() {
  }

  ngOnInit() {
    this.message = 'hello world';
  }

  // 只会监听输入属性的变化
  // 如果监听的值为对象, 需要改变对象的引用才会触发
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    if (this.user.name !== this.oldUsername) {
      console.log(`name 发生变化: ${this.oldUsername} => ${this.user.name}`);
      this.oldUsername = this.user.name;
    } else {
      console.log(`name 没有发生变化 DoCheck 被调用`);
    }
  }

}
