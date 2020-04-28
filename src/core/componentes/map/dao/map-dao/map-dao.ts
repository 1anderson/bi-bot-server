import { Injectable } from '@nestjs/common';
import { Map } from 'src/entities/map';
import { getManager } from "typeorm";

@Injectable()
export class MapDao {
    async getMapByName(name: string): Promise<Map> {
      return await getManager()
      .createQueryBuilder(Map, "map")
      .where("map.name LIKE '%:name%' ", { name: name })
      .getOne();
    }
}
