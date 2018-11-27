import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bind1Component } from './component/bind1/bind1.component';
import { Bind2Component } from './component/bind2/bind2.component';
import { Bind3Component } from './component/bind3/bind3.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { MultiplePipe } from './pipe/multiple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Bind1Component,
    Bind2Component,
    Bind3Component,
    PipeComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
