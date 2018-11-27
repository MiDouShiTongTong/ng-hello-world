import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // // 构造函数接受初始值
  // username: FormControl = new FormControl('aaa');
  //
  // // 包含两个 FormControl
  // signUpFormValue: FormGroup = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl()
  // });
  //
  // // 可变长度的 FormGroup
  // emailsFormValue: FormArray = new FormArray([
  //   new FormControl('a@a.com'),
  //   new FormControl('a@b.com')
  // ]);

  myForm: FormGroup = new FormGroup({
    username: new FormControl(),
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl('a@a.com')
    ])
  });

  constructor() {
  }

  ngOnInit() {
  }

  addEmail() {
    const emails = this.myForm.get('emails') as FormArray;
    emails.push(new FormControl());
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

}
