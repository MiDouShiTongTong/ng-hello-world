import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind1',
  templateUrl: './bind1.component.html',
  styleUrls: ['./bind1.component.scss']
})
export class Bind1Component implements OnInit {
  imgUrl: string;
  collapseSize: number;
  inputValue: string;
  isC: boolean;
  currentClass: object;
  isF: boolean;
  currentStyle: object;

  constructor() {
  }

  ngOnInit() {
    this.imgUrl = 'https://ng.ant.design/assets/img/logo.svg';
    this.collapseSize = 0;
    this.inputValue = '';
    this.currentClass = {
      a: false,
      b: false,
      c: false
    };

    setInterval(() => {
      this.collapseSize += 1;
      this.inputValue += '2';
      this.isC = true;
      this.currentClass = {
        a: true,
        b: true,
        c: true
      };
      this.isF = true;
      this.currentStyle = {
        color: '#06f',
        fontSize: '20px'
      };
    }, 1000);
  }

  handlerClick(event: any) {
    console.log(event);
  }

  handlerChange(event: any) {
    console.log(event.target.value); // 获取 DOM 属性, 值会改变
    console.log(event.target.getAttribute('value')); // 获取 HTML 属性, 值不会改变
  }

}
