import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { PhoneValidatorDirective } from './directive/phone-validator.directive';
import { EqualValidatorDirective } from './directive/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    SignUpComponent,
    PhoneValidatorDirective,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 双向绑定的前提
    FormsModule,
    // 响应式编程的前提
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
