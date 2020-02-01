import { Controller , Get, Post, Body } from '@nestjs/common';
import CreateUserDTO from '../dto/create-user-dto';

@Controller('user')
export class UserController {

    @Post()
    createUser(@Body() createUserDTO: CreateUserDTO) {
        console.log(createUserDTO);
    }

}