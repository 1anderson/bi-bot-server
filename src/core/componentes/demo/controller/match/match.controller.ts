import { Controller, Post, Body } from '@nestjs/common';
import { MatchDTO } from '../../dto/match-dto';

@Controller('match')
export class MatchController {

  @Post()
  async createUser(@Body() matchDTO: MatchDTO): Promise<any> {
    console.log(matchDTO);
  }
}
