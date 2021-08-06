import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import axios from 'axios';

export interface CaptchaResponse {
    success: boolean;
    challenge_ts: string;
    hostname: string;
    ['error-codes']: [];
}

@Injectable()
export class AppService {
    async getHello(tokenCaptcha: string): Promise<CaptchaResponse> {
        console.log('token', tokenCaptcha);
        const body = {
            secret: '6Lf2NeMbAAAAAEAheoscBvQSrE8ixVgR-28fO6tx',
            response: tokenCaptcha,
        }
        const response = await axios.post<CaptchaResponse>('https://www.google.com/recaptcha/api/siteverify', null, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            params: body
        });
        console.log(response.data);
        if (response.data.success) {
            return response.data;
        }
        throw new HttpException('CaptchaNoValido', HttpStatus.BAD_REQUEST);
    }
}
