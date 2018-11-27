import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { asyncPhoneValidator, passwordFormValidator, phoneValidator } from 'src/app/validator/validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  // 表单的模型
  signUpForm: FormGroup;

  constructor(fb: FormBuilder) {

    // 利用 FormBuilder 重构 FormGroup 简化代码量
    this.signUpForm = fb.group({
      username:           ['', [Validators.required, Validators.minLength(5)]],
      phone:              ['', phoneValidator, asyncPhoneValidator],
      passwordForm: fb.group({
        password:         [''],
        confirmPassword:  ['']
      }, {
        validator: passwordFormValidator
      })
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    for (const field of Object.keys(this.signUpForm.controls)) {
      // 标记为 dirty
      this.signUpForm.controls[field].markAsDirty();
      // 触发 valueChanges
      this.signUpForm.controls[field].updateValueAndValidity();
    }
    console.log(this.signUpForm.get('username').errors);
    console.log(this.signUpForm.get('phone').errors);
    console.log(this.signUpForm.get('passwordForm').errors);
    console.log(this.signUpForm.valid);
  }
}
