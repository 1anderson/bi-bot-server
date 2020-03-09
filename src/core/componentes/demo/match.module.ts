import { Module } from '@nestjs/common';
import { MatchController } from './controller/match/match.controller';
import { DemoReaderService } from 'src/core/services/demo-reader/demo-reader.service';
import { ExtractorDemoDataService } from 'src/core/services/extractor-demo-data/extractor-demo-data.service';
import { ExtractorPlayerDataService } from 'src/core/services/extractor-player-data/extractor-player-data.service';

@Module({ 
    imports: [],
    controllers: [ MatchController ],
    providers: [ DemoReaderService , ExtractorDemoDataService, ExtractorPlayerDataService ],
    exports: [ DemoReaderService , ExtractorDemoDataService, ExtractorPlayerDataService ] 
})
export class MatchModule {}
