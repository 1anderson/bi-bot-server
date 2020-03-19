import { Injectable } from '@nestjs/common';
import { MatchDTO } from 'src/core/componentes/demo/dto/match-dto';
import { DemoReaderService } from 'src/core/services/demo-reader/demo-reader.service';
import { CsgoDemoDownloadService } from 'src/core/services/csgo-demo-download/csgo-demo-download.service';
import { FileService } from 'src/core/services/file/file.service';

@Injectable()
export class DemoFacadeService {
    constructor(readonly demoReaderService: DemoReaderService, readonly csgoDemoDownloadService: CsgoDemoDownloadService, readonly fileService: FileService){}
    filePath = 'demo'
    async createMatch(matchDTO: MatchDTO) {
      try {
       const response = await this.csgoDemoDownloadService.demoDownload(matchDTO);
       await this.fileService.saveFile(response.data);
       return await this.demoReaderService.readDemo('temp.dem');
      } catch (err) {
         console.log(err) 
      }
    }
}
