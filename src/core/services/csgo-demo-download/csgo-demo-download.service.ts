
import { Injectable } from '@nestjs/common';
import { MatchDTO } from 'src/core/componentes/demo/dto/match-dto';
import { HttpServiceService } from '../http-service/http-service.service';


@Injectable()
export class CsgoDemoDownloadService {
  constructor(readonly httpServiceService: HttpServiceService){}

  regexSharedCode = /CSGO.*/;
  demoDownload = async (matchDTO: MatchDTO) => await this.httpServiceService.get(matchDTO.DemoLink);

  getSharedCode(sharedDemoLink: string) {
    return sharedDemoLink.match(this.regexSharedCode)[0];
  }
}
