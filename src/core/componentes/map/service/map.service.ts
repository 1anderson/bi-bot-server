import { Injectable } from '@nestjs/common';
import { Map } from 'src/entities/map';
import { MapDao } from '../dao/map-dao/map-dao';

@Injectable()
export class MapService {
    constructor(readonly mapDao: MapDao){}
    async getMapByName(name: string): Promise<Map> {
        return await this.mapDao.getMapByName(name);
    }
}
