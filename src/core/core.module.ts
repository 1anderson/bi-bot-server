import { Module } from '@nestjs/common';
import { UserModule } from './componentes/user/user.module';
@Module({
    imports: [ UserModule ]
})
export class CoreModule {}
