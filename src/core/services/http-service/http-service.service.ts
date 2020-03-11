import { Injectable } from '@nestjs/common';
import https = require('https');

@Injectable()
export class HttpServiceService {
 
  get(url: string) {
    return new Promise(resolve => {
      https.request(url)
        .on('end', (data) => {
          resolve(data); 
        }).on('err', (err) => {
          throw new Error(err);
        });    
    })
  }


}
