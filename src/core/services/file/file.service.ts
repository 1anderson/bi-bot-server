import { Injectable } from '@nestjs/common';
import fs = require('fs-extra');
import Bunzip = require('seek-bzip');

@Injectable()
export class FileService {
    
    async decompressFile(filePath: any) {
        const compressedData = fs.readFileSync(filePath);
        const data = Bunzip.decode(compressedData);
        
        fs.writeFileSync('tempC.dem', data);
    }
}

//http://replay202.valve.net/730/003400822383488008270_1892974323.dem.bz2