import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// 表单的校验器
export const phoneValidator = (control: FormControl): null | object => {
  const pattern = /^1[3-5][\d]{9}$/;
  console.log(control.value);
  return pattern.test(control.value)
    ? null
    : { mobileFormatter: true };
};

export const asyncPhoneValidator = (control: FormControl): any => {
  const pattern = /^1[3-5][\d]{9}$/;
  const isValid = pattern.test(control.value);
  return of(isValid
    ? null
    : { mobileFormatter: true }
  ).pipe(debounceTime(5000));
};

export const passwordFormValidator = (formGroup: FormGroup): null | object => {
  if (formGroup.get('password') === null) {
    return;
  }
  const password = formGroup.get('password').value;
  if (!password) {
    return {
      required: true
    };
  }
  const confirmPassword = formGroup.get('confirmPassword').value;
  return password === confirmPassword
    ? null
    : { passwordEqual: true };
};
