import { Injectable } from '@nestjs/common';
import http = require('http');

@Injectable()
export class HttpServiceService {
 
  get(url: string) {
    return new Promise(( resolve, reject ) => {
      const req = http.get(url);
      console.log("url--->", url)
      req.on('end', (data) => {
          resolve(data); 
          console.log(data);
      });

      req.on('data', (data) => {
        console.log(data);
    });
      
      req.on('error', (err) => {
          console.log(err);
          reject(err);
      });    
    }); 
  }
}


