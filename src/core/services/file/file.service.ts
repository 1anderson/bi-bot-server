import { Injectable } from '@nestjs/common';
import fs = require('fs-extra');
import { decompress } from 'bz2';

@Injectable()
export class FileService {

    async saveFile(response: any) {
        //const teste = await decompress(response);
        return await fs.writeFile('temp.dem', response);
    }
}

//http://replay202.valve.net/730/003400822383488008270_1892974323.dem.bz2