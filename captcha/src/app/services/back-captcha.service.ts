import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BackCaptchaService {

  private urlApi = 'http://test-captcha-local:3000';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  verifyToken(token: string): Observable<any> {
    return this.httpClient.get(`${this.urlApi}?token=${token}`);
  }
}
