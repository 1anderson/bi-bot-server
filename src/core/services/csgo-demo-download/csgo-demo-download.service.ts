
import { Injectable } from '@nestjs/common';
import { MatchDTO } from 'src/core/componentes/demo/dto/match-dto';
import { HttpServiceService } from '../http-service/http-service.service';


@Injectable()
export class CsgoDemoDownloadService {
  constructor(readonly httpServiceService: HttpServiceService){}

  regexSharedCode = /CSGO.*/;
  async demoDownload(matchDTO: MatchDTO) {
    return await this.httpServiceService.get(matchDTO.demoLink);
  }

  getSharedCode(sharedDemoLink: string) {
    return sharedDemoLink.match(this.regexSharedCode)[0];
  }
}
