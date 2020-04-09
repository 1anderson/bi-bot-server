import { Injectable } from '@nestjs/common';
import { MatchDTO } from 'src/core/componentes/demo/dto/match-dto';
import { DemoReaderService } from 'src/core/services/demo-reader/demo-reader.service';
import { CsgoDemoDownloadService } from 'src/core/services/csgo-demo-download/csgo-demo-download.service';
import { FileService } from 'src/core/services/file/file.service';
import { ConfigService } from 'src/core/services/config/config.service';

@Injectable()
export class DemoFacadeService {
    constructor(readonly demoReaderService: DemoReaderService, readonly csgoDemoDownloadService: CsgoDemoDownloadService, readonly fileService: FileService, readonly configService: ConfigService){}
    regexFileId = /730\/(.*?)\.dem/;
    async createMatch(matchDTO: MatchDTO) {
      try {
        const fileId = matchDTO.demoLink.match(this.regexFileId);
        const pathsfiles = this.configService.getPathsFiles(fileId[1]);
        await this.csgoDemoDownloadService.demoDownload(matchDTO, pathsfiles.compressedFile);
        await this.fileService.decompressFile(pathsfiles);
        return await this.demoReaderService.readDemo(matchDTO, pathsfiles.descompressedFile);
      } catch (err) {
         console.log(err) 
      }
    }
}
