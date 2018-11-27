import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  // greeting: string;
  // user: { name: string };

  message: number;

  innerHTML: string;
  //
  // @ViewChild('child1')
  // child1: Child2Component;

  ngOnInit() {
    // this.greeting = 'hello greeting';
    // this.user = {name: 'hello user'};
    this.message = 0;
    this.innerHTML = `<div>test</div>`;
    // 父组件调用子组件的方法
    // setInterval(() => {
    //   this.child1.sayGreeting('hello1');
    // }, 1000);
  }

  ngAfterContentInit(): void {
    console.log('父组件 内容投影初始化完成');
  }

  ngAfterContentChecked(): void {
    console.log('父组件 内容投影更新完成');
  }

  // [只调用一次]组件视图初始化完成
  // 如果子组件也有此方法, 先调用子组件的方法
  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   // Angular 禁止在该生命周期修改数据, 通过 setTimeout 解决
    //   this.message += 1;
    // }, 500);
    console.log('父组件 视图初始化完成');
  }

  // [重复调用]组件视图更新完成调用(子组件的视图更新也会调用)
  // 如果子组件也有此方法, 先调用子组件的方法
  ngAfterViewChecked(): void {
    // setTimeout(() => {
    //   // Angular 禁止在该生命周期修改数据, 通过 setTimeout 解决
    //   this.message += 1;
    // }, 500);
    console.log('父组件 视图更新完成');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
