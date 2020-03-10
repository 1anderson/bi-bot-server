import { Controller, Post, Body, UseInterceptors, UploadedFile, Get } from '@nestjs/common';
import { MatchDTO } from '../../dto/match-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { DemoReaderService } from 'src/core/services/demo-reader/demo-reader.service';

@Controller('match')
export class MatchController {
  constructor(readonly demoReaderService: DemoReaderService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createUser(@UploadedFile() file, @Body() matchDTO: MatchDTO): Promise<any> {
    await this.demoReaderService.readDemo(file.buffer);
  }

  @Get()
  teste() {
    this.demoReaderService.csgo();
  }
}
