import { Controller, Post, Body, UseInterceptors, UploadedFile, Get } from '@nestjs/common';
import { MatchDTO } from '../../dto/match-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { DemoFacadeService } from 'src/core/facade/demo-facade/demo-facade.service';

@Controller('match')
export class MatchController {
  constructor(readonly demoFacadeService: DemoFacadeService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createUser(@UploadedFile() file, @Body() matchDTO: MatchDTO): Promise<any> {
    console.log("controller", matchDTO);
    return await this.demoFacadeService.createMatch(matchDTO);
  }
}
