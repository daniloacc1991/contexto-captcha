import {Controller, Get, Param, Query} from '@nestjs/common';
import {AppService, CaptchaResponse} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('token') token: string): Promise<CaptchaResponse> {
    return this.appService.getHello(token);
  }
}
