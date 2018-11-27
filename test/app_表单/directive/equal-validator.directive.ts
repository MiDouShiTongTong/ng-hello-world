import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { passwordFormValidator } from '../validator/validator';

@Directive({
  selector: '[appEqualValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: passwordFormValidator,
      multi: true // 一个 token 多个值
    }
  ]
})
export class EqualValidatorDirective {
  constructor() {
  }
}
