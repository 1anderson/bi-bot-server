import { Module } from '@nestjs/common';
import { UserModule } from './componentes/user/user.module';
import { PasswordService } from './services/password/password.service';
import { EmailService } from './services/email/email.service';
import { DatabaseService } from './services/database/database.service';
import { ClassTransformService } from './services/class-transform/class-transform.service';

@Module({
    imports: [ UserModule ],
    providers: [ PasswordService, EmailService, DatabaseService, ClassTransformService],
    exports: [ DatabaseService, PasswordService, ClassTransformService ]
})
export class CoreModule {}
