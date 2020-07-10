import { Module } from '@nestjs/common';
import { UserModule } from './componentes/user/user.module';
import { PasswordService } from './services/password/password.service';
import { EmailService } from './services/email/email.service';
import { DatabaseService } from './services/database/database.service';
import { ClassTransformService } from './services/class-transform/class-transform.service';
import { MulterModule } from '@nestjs/platform-express';
import { ExtractorDemoDataService } from './services/extractor-demo-data/extractor-demo-data.service';
import { HttpServiceService } from './services/http-service/http-service.service';
import { FileService } from './services/file/file.service';
import { CsgoDemoDownloadService } from './services/csgo-demo-download/csgo-demo-download.service';
import { ExtractorPlayerDataService } from './services/extractor-player-data/extractor-player-data.service';

@Module({
    imports: [ UserModule, MulterModule.register({ dest: 'files/'}) ],
    providers: [ PasswordService, EmailService, DatabaseService, ClassTransformService, ExtractorDemoDataService, HttpServiceService, FileService, CsgoDemoDownloadService, ExtractorPlayerDataService],
    exports: [ DatabaseService, PasswordService, ClassTransformService, ExtractorDemoDataService, HttpServiceService, FileService, CsgoDemoDownloadService, ExtractorPlayerDataService]
})
export class CoreModule {}
