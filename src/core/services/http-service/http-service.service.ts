import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');

@Injectable()
export class HttpServiceService {
 
  async get(url: string) {
      const response =  await axios.get(url);
      console.log(response);
      return response;
  }
}


