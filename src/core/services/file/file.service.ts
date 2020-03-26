import { Injectable } from '@nestjs/common';
import fs = require('fs-extra');
import Bunzip = require('seek-bzip');

@Injectable()
export class FileService {
  
  async decompressFile(paths: any) {
    const compressedData = fs.readFileSync(paths.compressedFile);
    const data = Bunzip.decode(compressedData);
        
    fs.writeFileSync(paths.descompressedFile, data);
  }
}

//http://replay202.valve.net/730/003400822383488008270_1892974323.dem.bz2