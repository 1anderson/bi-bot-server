import { Module } from '@nestjs/common';
import { MatchController } from './controller/match/match.controller';
import { DemoFacadeService } from 'src/core/facade/demo-facade/demo-facade.service';
import { CoreModule } from 'src/core/core.module';

@Module({ 
    imports: [CoreModule],
    controllers: [ MatchController ],
    providers: [ DemoFacadeService],
    exports: [ DemoFacadeService ] 
})
export class MatchModule {}
