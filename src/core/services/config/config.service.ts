import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {

  fileConfig = {
    tempPath: "temp-files/",
    compressedExtension: ".bz2",
    decompressedExtension: ".dem"
  }
  
  getPathsFiles(fileID) {
    return {
      compressedFile:  `${this.fileConfig.tempPath}${fileID}${this.fileConfig.compressedExtension}`,
      descompressedFile: `${this.fileConfig.tempPath}${fileID}${this.fileConfig.decompressedExtension}` 
    }
  }
}
