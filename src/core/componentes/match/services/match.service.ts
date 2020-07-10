import { Injectable } from '@nestjs/common';
import { DemoData } from 'src/shared/class/demo-data';
import { MapService } from '../../map/service/map.service';

@Injectable()
export class MatchService {
    constructor(readonly mapService: MapService){}
    async saveMatch(demodata: DemoData) {
      const map = await this.mapService.getMapByName(demodata.getMapName());
    }
}
