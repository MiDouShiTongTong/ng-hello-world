import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges,
  AfterContentChecked
} from '@angular/core';

let count: any = 0;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  name: string;

  constructor() {
    console.log(++count, 'constructor');
  }

  // 绑定输入属性之前调用
  // 只有声明了 @Input 装饰器才会被调用
  // 每次输入属性发生变化都会被调用
  ngOnChanges(changes: SimpleChanges): void {
    console.log(++count, 'ngOnChanges', changes);
  }

  // ngOnChanges 第一轮调用后调用
  // 用于初始化数据
  ngOnInit() {
    console.log(++count, 'ngOnInit');
  }

  // Angular 变更检测机制被调用
  ngDoCheck(): void {
    console.log(++count, 'ngDoCheck');
  }

  // 内容投影进组件完成后调用
  ngAfterContentInit(): void {
    console.log(++count, 'ngAfterContentInit');
  }

  // 内容投影进组件完成后, 变更检测之后被调用
  ngAfterContentChecked(): void {
    console.log(++count, 'ngAfterContentChecked');
  }

  // 组件视图初始化完成后被调用
  ngAfterViewInit(): void {
    console.log(++count, 'ngAfterViewInit');
  }

  // 组件视图初始化完成后, 变更检测之后被调用
  ngAfterViewChecked(): void {
    console.log(++count, 'ngAfterViewChecked');
  }

  // Angular 指令/组件销毁后被调用
  ngOnDestroy(): void {
    console.log(++count, 'ngOnDestroy');
  }
}
