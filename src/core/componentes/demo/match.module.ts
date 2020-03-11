import { Module } from '@nestjs/common';
import { MatchController } from './controller/match/match.controller';
import { DemoReaderService } from 'src/core/services/demo-reader/demo-reader.service';
import { ExtractorDemoDataService } from 'src/core/services/extractor-demo-data/extractor-demo-data.service';
import { ExtractorPlayerDataService } from 'src/core/services/extractor-player-data/extractor-player-data.service';
import { DemoFacadeService } from 'src/core/facade/demo-facade/demo-facade.service';
import { HttpServiceService } from 'src/core/services/http-service/http-service.service';
import { FileService } from 'src/core/services/file/file.service';
import { CsgoDemoDownloadService } from 'src/core/services/csgo-demo-download/csgo-demo-download.service';

@Module({ 
    imports: [],
    controllers: [ MatchController ],
    providers: [ DemoReaderService , ExtractorDemoDataService, ExtractorPlayerDataService, DemoFacadeService, HttpServiceService, FileService, CsgoDemoDownloadService ],
    exports: [ DemoReaderService , ExtractorDemoDataService, ExtractorPlayerDataService, DemoFacadeService, HttpServiceService, FileService, CsgoDemoDownloadService ] 
})
export class MatchModule {}
