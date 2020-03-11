import { Injectable } from '@nestjs/common';
import fs = require('fs-extra');   
@Injectable()
export class FileService {

    async saveFile(file: any, destination: string) {
        const demoFile = await fs.writeFile(file);
    }
}
