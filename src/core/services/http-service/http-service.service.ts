import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');
import fs = require('fs-extra');
import config from 'config/config.json';
@Injectable()
export class HttpServiceService {
 
  async get(url: string, fileID: string) {
    const writer = fs.createWriteStream(`temp/${fileID}.dem.bz2`);

      const response =  await axios({
        url,
        method: 'GET',
        responseType: 'stream'
      });
      
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
       writer.on('finish', resolve)
        writer.on('error', reject)
      })
  }
}


