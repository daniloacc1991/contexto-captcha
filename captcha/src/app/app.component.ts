import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InvisibleReCaptchaComponent} from 'ngx-captcha/lib/components/invisible-recaptcha.component';
import {BackCaptchaService} from "./services/back-captcha.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formGroup: FormGroup;

  captchaInvisible: any = '';

  @ViewChild('captchaElem', {static: true}) captchaElem: InvisibleReCaptchaComponent;

  constructor(
    private formBuilder: FormBuilder,
    private backService: BackCaptchaService,
  ) {
    this.formGroup = this.formBuilder.group({
      value1: [undefined, [Validators.required]],
      value2: [undefined, [Validators.required]],
      captcha: [undefined, [Validators.required]],
    });
    this.formGroup.valueChanges.subscribe(res => {
      console.log('formGroup', res);
      console.log('ngModel', this.captchaInvisible);
    });
  }


  handleReset(): void {
    console.log('handleReset');
  }

  handleExpire(): void {
    console.log('handleExpire');
  }

  handleLoad(): void {
    console.log('handleLoad');
  }

  handleSuccess(token: any): void {
    console.log(token);
    this.backService.verifyToken(token).subscribe(res => {
      console.log('verifyToken', res);
    });
  }

  send(): void {
    this.captchaElem.execute();
  }
}
