import { Module } from '@nestjs/common';
import { UserModule } from './componentes/user/user.module';
import { PasswordService } from './services/password/password.service';
import { EmailService } from './services/email/email.service';
@Module({
    imports: [ UserModule ],
    providers: [ PasswordService, EmailService]
})
export class CoreModule {}
