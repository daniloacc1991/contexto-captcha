import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxCaptchaModule} from 'ngx-captcha';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BackCaptchaService} from './services/back-captcha.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BackCaptchaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
