import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');
import fs = require('fs-extra');

@Injectable()
export class HttpServiceService {
  async get(url: string, pathToSaveFile: string) {
    const writer = fs.createWriteStream(pathToSaveFile);
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


