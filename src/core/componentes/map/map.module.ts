import { Module } from '@nestjs/common';
import { MapService } from './service/map.service';

@Module({
  providers: [MapService]
})
export class MapModule {}
