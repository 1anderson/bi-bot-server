import { Module } from '@nestjs/common';
import { UserModule } from './componentes/user/user.module';
import { PasswordService } from './services/password/password.service';
import { EmailService } from './services/email/email.service';
import { DatabaseService } from './services/database/database.service';
import { ClassTransformService } from './services/class-transform/class-transform.service';
import { MulterModule } from '@nestjs/platform-express';
import { MatchModule } from './componentes/demo/match.module';
import { ExtractorDemoDataService } from './services/extractor-demo-data/extractor-demo-data.service';

@Module({
    imports: [ UserModule, MatchModule, MulterModule.register({ dest: 'files/'}) ],
    
    providers: [ PasswordService, EmailService, DatabaseService, ClassTransformService, ExtractorDemoDataService],
    exports: [ DatabaseService, PasswordService, ClassTransformService ]
})
export class CoreModule {}
