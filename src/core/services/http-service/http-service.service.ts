import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');
import fs = require('fs-extra');
import request = require('request');

@Injectable()
export class HttpServiceService {
 
  async get(url: string) {
    const writer = fs.createWriteStream('tempC.dem.bz2')

      const response =  await axios({
        url,
        method: 'GET',
        responseType: 'stream'
      });
      // console.log(response);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
       writer.on('finish', resolve)
        writer.on('error', reject)
      })
  }
}


